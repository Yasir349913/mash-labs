"use client";

import { useState } from "react";
import { Calendar, Mail, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { services } from "@/data/services";
import { bookingEnabled } from "@/lib/config";

const FORM_ENDPOINT =
  process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ??
  "https://formspree.io/f/maenpgow";

const serviceOptions = [...services.map((s) => s.title), "Not sure yet"];

// Draft ranges: apne asli quotes ke hisaab se badal lein.
const budgetOptions = [
  "Under $1,000",
  "$1,000 – $3,000",
  "$3,000 – $7,000",
  "$7,000+",
  "Not sure yet",
];

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FieldName = "name" | "email" | "service" | "message";
type FieldErrors = Partial<Record<FieldName, string>>;

function validate(data: FormData): FieldErrors {
  const errors: FieldErrors = {};
  const name = String(data.get("name") ?? "").trim();
  const email = String(data.get("email") ?? "").trim();
  const service = String(data.get("service") ?? "");
  const message = String(data.get("message") ?? "").trim();

  if (name.length < 2) {
    errors.name = "Please enter your name.";
  }
  if (!email) {
    errors.email = "Please enter your email address.";
  } else if (!EMAIL_PATTERN.test(email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!service) {
    errors.service = "Please choose a service.";
  }
  if (message.length < 20) {
    errors.message = "Please add a few details (at least 20 characters).";
  }
  return errors;
}

function inputClass(hasError: boolean) {
  return `mt-2 w-full border bg-white px-4 py-2.5 text-sm text-ink outline-none placeholder:text-slate/60 focus:border-ink ${
    hasError ? "border-red-600" : "border-line"
  }`;
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-1.5 text-sm text-red-600">
      {message}
    </p>
  );
}

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (loading) return;

    const form = e.currentTarget;
    const formData = new FormData(form);

    const nextErrors = validate(formData);
    setErrors(nextErrors);
    setSubmitError(false);

    const firstInvalid = (
      ["name", "email", "service", "message"] as FieldName[]
    ).find((field) => nextErrors[field]);

    if (firstInvalid) {
      form.querySelector<HTMLElement>(`#${firstInvalid}`)?.focus();
      return;
    }

    setLoading(true);
    formData.append("_subject", "New Mash Labs website enquiry");
    formData.append("pageUrl", window.location.href);

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        setSubmitError(true);
      }
    } catch {
      setSubmitError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="bg-white py-20 md:py-28">
      <Container>
        <FadeIn>
          <SectionHeading
            title="Start a conversation"
            description="Tell us about your project. We'll get back to you within a day or two."
          />
        </FadeIn>

        <div className="mt-14 grid gap-12 md:grid-cols-3 md:gap-16">
          <FadeIn direction="left" className="md:col-span-2">
            {submitted ? (
              <div
                role="status"
                className="border border-line bg-paper p-8"
              >
                <p className="font-display text-lg font-semibold text-ink">
                  Thanks, your enquiry has been received.
                </p>

                <p className="mt-2 text-sm text-slate">
                  We will reply to the email address you provided.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setErrors({});
                  }}
                  className="mt-5 text-sm font-medium text-ink underline underline-offset-4 hover:opacity-70"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="space-y-5"
              >
                {/* Spam trap: real visitors never see or fill this field. */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="_gotcha">Leave this field empty</label>
                  <input
                    id="_gotcha"
                    name="_gotcha"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-ink"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      aria-required="true"
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      placeholder="Your name"
                      className={inputClass(Boolean(errors.name))}
                    />
                    <FieldError id="name-error" message={errors.name} />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-ink"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      aria-required="true"
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={
                        errors.email ? "email-error" : undefined
                      }
                      placeholder="you@company.com"
                      className={inputClass(Boolean(errors.email))}
                    />
                    <FieldError id="email-error" message={errors.email} />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="text-sm font-medium text-ink"
                  >
                    Company or website{" "}
                    <span className="font-normal text-slate">(optional)</span>
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    placeholder="Company name or yourwebsite.com"
                    className={inputClass(false)}
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="service"
                      className="text-sm font-medium text-ink"
                    >
                      What do you need?
                    </label>
                    <select
                      id="service"
                      name="service"
                      defaultValue=""
                      aria-required="true"
                      aria-invalid={Boolean(errors.service)}
                      aria-describedby={
                        errors.service ? "service-error" : undefined
                      }
                      className={inputClass(Boolean(errors.service))}
                    >
                      <option value="" disabled>
                        Select one
                      </option>
                      {serviceOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    <FieldError id="service-error" message={errors.service} />
                  </div>

                  <div>
                    <label
                      htmlFor="budget"
                      className="text-sm font-medium text-ink"
                    >
                      Budget range{" "}
                      <span className="font-normal text-slate">(optional)</span>
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      defaultValue=""
                      className={inputClass(false)}
                    >
                      <option value="">Prefer not to say</option>
                      {budgetOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-ink"
                  >
                    Project details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    aria-required="true"
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={
                      errors.message ? "message-error" : undefined
                    }
                    placeholder="Tell us what you're looking to build, and what you'd like it to achieve."
                    className={`${inputClass(Boolean(errors.message))} resize-none`}
                  />
                  <FieldError id="message-error" message={errors.message} />
                </div>

                {submitError && (
                  <p role="alert" className="text-sm text-red-600">
                    Something went wrong and your message was not sent. Please
                    try again, or email us directly at{" "}
                    <a
                      href="mailto:yasirmaqsood534@gmail.com"
                      className="font-medium underline underline-offset-4"
                    >
                      yasirmaqsood534@gmail.com
                    </a>
                    .
                  </p>
                )}

                <Button type="submit" variant="primary" disabled={loading}>
                  {loading ? "Sending..." : "Send Enquiry"}
                </Button>
              </form>
            )}
          </FadeIn>

          <FadeIn direction="right">
            <p className="text-sm font-medium text-ink">
              Prefer to reach out directly?
            </p>

            <div className="mt-4 space-y-4">
              {bookingEnabled && (
                <a
                  href="#booking"
                  className="flex items-center gap-3 text-sm text-slate transition-colors hover:text-ink"
                >
                  <Calendar
                    className="h-4 w-4 text-amber"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  <span>Book a discovery call</span>
                </a>
              )}

              <a
                href="mailto:yasirmaqsood534@gmail.com"
                className="flex items-center gap-3 text-sm text-slate transition-colors hover:text-ink"
              >
                <Mail
                  className="h-4 w-4 text-amber"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <span>yasirmaqsood534@gmail.com</span>
              </a>

              <a
                href="https://wa.me/923141601347"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-slate transition-colors hover:text-ink"
              >
                <MessageCircle
                  className="h-4 w-4 text-amber"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <span>WhatsApp</span>
              </a>

              <a
                href="https://www.linkedin.com/in/yasir-maqsood/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-slate transition-colors hover:text-ink"
              >
                <span
                  className="flex h-4 w-4 items-center justify-center rounded-sm bg-amber text-[10px] font-bold text-white"
                  aria-hidden="true"
                >
                  in
                </span>
                <span>LinkedIn</span>
              </a>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}