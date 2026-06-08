"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { useTranslations } from "next-intl";
import { submitLead, type LeadFormState } from "@/app/[locale]/zayavka/actions";
import { ArrowIcon } from "./icons";

const initial: LeadFormState = { ok: false, errors: {}, values: {} };

export function LeadForm() {
  const t = useTranslations("form");
  const tf = useTranslations("form.fields");
  const [state, action] = useActionState(submitLead, initial);

  if (state.ok) {
    return (
      <div className="lead-success">
        <span className="num">
          <b>✓</b> — {t("title")}
        </span>
        <h3>{t("success.title")}</h3>
        <p>{t("success.body")}</p>
      </div>
    );
  }

  return (
    <form action={action} className="lead-form" noValidate>
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hp"
        defaultValue=""
      />

      <div className="lead-row">
        <Field id="name" label={tf("name")} placeholder={tf("namePh")} required defaultValue={state.values.name} error={state.errors.name} />
        <Field id="phone" type="tel" label={tf("phone")} placeholder={tf("phonePh")} defaultValue={state.values.phone} error={state.errors.contact} />
      </div>
      <div className="lead-row">
        <Field id="email" type="email" label={tf("email")} placeholder={tf("emailPh")} defaultValue={state.values.email} error={state.errors.email} />
        <Field id="company" label={tf("company")} defaultValue={state.values.company} />
      </div>
      <Field id="subject" label={tf("subject")} placeholder={tf("subjectPh")} defaultValue={state.values.subject} />
      <FieldArea id="message" label={tf("message")} placeholder={tf("messagePh")} required defaultValue={state.values.message} error={state.errors.message} />

      <label className="lead-field lead-file">
        <span>{tf("file")}</span>
        <input type="file" name="file" accept=".pdf,.dwg,.dxf,.zip,.rar,.png,.jpg,.jpeg" />
        {state.errors.file ? <span className="err">{state.errors.file}</span> : null}
      </label>

      <label className="lead-consent">
        <input type="checkbox" name="consent" defaultChecked />
        <span>{tf("consent")}</span>
        {state.errors.consent ? <span className="err">{state.errors.consent}</span> : null}
      </label>

      {state.errors.server ? <p className="err lead-srv-err">{state.errors.server}</p> : null}
      {state.errors.spam ? <p className="err lead-srv-err">{state.errors.spam}</p> : null}

      <SubmitButton />
    </form>
  );
}

function Field({
  id,
  label,
  type = "text",
  placeholder,
  required,
  defaultValue,
  error,
}: {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  defaultValue?: string;
  error?: string;
}) {
  return (
    <label className={`lead-field${error ? " has-err" : ""}`}>
      <span>
        {label}
        {required ? <em aria-hidden="true"> *</em> : null}
      </span>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue ?? ""}
        required={required}
        aria-invalid={error ? "true" : undefined}
      />
      {error ? <span className="err">{error}</span> : null}
    </label>
  );
}

function FieldArea({
  id,
  label,
  placeholder,
  required,
  defaultValue,
  error,
}: {
  id: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  defaultValue?: string;
  error?: string;
}) {
  return (
    <label className={`lead-field${error ? " has-err" : ""}`}>
      <span>
        {label}
        {required ? <em aria-hidden="true"> *</em> : null}
      </span>
      <textarea
        id={id}
        name={id}
        rows={5}
        placeholder={placeholder}
        defaultValue={defaultValue ?? ""}
        required={required}
        aria-invalid={error ? "true" : undefined}
      />
      {error ? <span className="err">{error}</span> : null}
    </label>
  );
}

function SubmitButton() {
  const t = useTranslations("form.fields");
  const { pending } = useFormStatus();
  return (
    <button className="btn" type="submit" disabled={pending}>
      {pending ? t("submitting") : t("submit")}
      <ArrowIcon />
    </button>
  );
}
