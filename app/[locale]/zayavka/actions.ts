"use server";

import { getTranslations } from "next-intl/server";
import { deliverLead } from "@/lib/leadTransport";

export type LeadFieldError =
  | "name"
  | "contact"
  | "email"
  | "message"
  | "consent"
  | "file"
  | "spam"
  | "server";

export type LeadFormState = {
  ok: boolean;
  errors: Partial<Record<LeadFieldError, string>>;
  values: {
    name?: string;
    phone?: string;
    email?: string;
    company?: string;
    subject?: string;
    message?: string;
  };
};

const MAX_FILE_BYTES = 20 * 1024 * 1024; // 20 MB
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitLead(
  _prev: LeadFormState,
  formData: FormData,
): Promise<LeadFormState> {
  const t = await getTranslations("form.errors");

  const honey = String(formData.get("website") ?? "");
  if (honey.trim() !== "") {
    return { ok: false, errors: { spam: t("spam") }, values: {} };
  }

  const name = String(formData.get("name") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const company = String(formData.get("company") ?? "").trim();
  const subject = String(formData.get("subject") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const consent = formData.get("consent") === "on";
  const file = formData.get("file");

  const errors: LeadFormState["errors"] = {};
  if (!name) errors.name = t("name");
  if (!phone && !email) errors.contact = t("contact");
  if (email && !EMAIL_RE.test(email)) errors.email = t("email");
  if (message.length < 10) errors.message = t("message");
  if (!consent) errors.consent = t("consent");
  if (file instanceof File && file.size > MAX_FILE_BYTES)
    errors.file = t("file");

  if (Object.keys(errors).length > 0) {
    return {
      ok: false,
      errors,
      values: { name, phone, email, company, subject, message },
    };
  }

  const result = await deliverLead({
    name,
    phone: phone || undefined,
    email: email || undefined,
    company: company || undefined,
    subject: subject || undefined,
    message,
    source: "form",
    fileName: file instanceof File ? file.name : undefined,
    fileSize: file instanceof File ? file.size : undefined,
  });

  if (!result.ok) {
    return { ok: false, errors: { server: t("server") }, values: { name, phone, email, company, subject, message } };
  }

  return { ok: true, errors: {}, values: {} };
}
