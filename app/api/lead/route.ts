import { NextResponse } from "next/server";
import { deliverLead } from "@/lib/leadTransport";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  const ct = req.headers.get("content-type") || "";
  if (ct.includes("application/json")) {
    try {
      body = await req.json();
    } catch {
      return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
    }
  } else if (ct.includes("multipart/form-data") || ct.includes("application/x-www-form-urlencoded")) {
    const fd = await req.formData();
    body = Object.fromEntries(fd.entries()) as Record<string, unknown>;
  } else {
    return NextResponse.json({ ok: false, error: "unsupported_content_type" }, { status: 415 });
  }

  // Honeypot
  if (String(body.website ?? "").trim() !== "") {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const name = String(body.name ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const email = String(body.email ?? "").trim();
  const company = String(body.company ?? "").trim();
  const subject = String(body.subject ?? "").trim();
  const message = String(body.message ?? "").trim();
  const locale = String(body.locale ?? "").trim() || undefined;

  const errors: Record<string, string> = {};
  if (!name) errors.name = "required";
  if (!phone && !email) errors.contact = "required";
  if (email && !EMAIL_RE.test(email)) errors.email = "invalid";
  if (message.length < 10) errors.message = "too_short";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  const file = body.file;
  const result = await deliverLead({
    name,
    phone: phone || undefined,
    email: email || undefined,
    company: company || undefined,
    subject: subject || undefined,
    message,
    source: "api",
    locale,
    fileName: file instanceof File ? file.name : undefined,
    fileSize: file instanceof File ? file.size : undefined,
  });

  if (!result.ok) {
    return NextResponse.json({ ok: false, error: result.reason }, { status: 502 });
  }
  return NextResponse.json({ ok: true, transport: result.transport });
}

export async function GET() {
  return NextResponse.json(
    { ok: false, error: "method_not_allowed", expected: "POST" },
    { status: 405 },
  );
}
