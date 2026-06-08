export type LeadPayload = {
  name: string;
  phone?: string;
  email?: string;
  company?: string;
  subject?: string;
  message: string;
  source: "form" | "api";
  locale?: string;
  fileName?: string;
  fileSize?: number;
};

export type DeliveryResult =
  | { ok: true; transport: "console" | "smtp" | "webhook" }
  | { ok: false; reason: string };

/**
 * Lead delivery. Selects transport from env:
 *   LEAD_WEBHOOK_URL   — POST as JSON, fastest to wire (Telegram bot, Make, n8n)
 *   LEAD_SMTP_*        — TODO once SMTP is chosen (nodemailer or similar)
 *
 * Falls back to a server log if no transport is configured — so the form
 * keeps working in dev / staging before a real channel is wired.
 */
export async function deliverLead(p: LeadPayload): Promise<DeliveryResult> {
  const webhook = process.env.LEAD_WEBHOOK_URL;
  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          at: new Date().toISOString(),
          ...p,
        }),
      });
      if (!res.ok) return { ok: false, reason: `webhook ${res.status}` };
      return { ok: true, transport: "webhook" };
    } catch (e) {
      return { ok: false, reason: `webhook error: ${(e as Error).message}` };
    }
  }

  // eslint-disable-next-line no-console
  console.log("[lead] no transport configured — logging payload", {
    at: new Date().toISOString(),
    ...p,
  });
  return { ok: true, transport: "console" };
}
