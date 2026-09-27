"use client";

import { useState } from "react";
import { Mail, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

const projectTypes = [
  "Web Development",
  "AI Solution",
  "Automation / Integration",
  "Not sure yet",
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(false);
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch(
        "https://formspree.io/f/maenpgow",
        {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" },
        }
      );

      if (response.ok) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
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
              <div className="border border-line bg-paper p-8">
                <p className="font-display text-lg font-semibold text-ink">
                  Thanks - message received.
                </p>

                <p className="mt-2 text-sm text-slate">
                  We will get back to you shortly at the email you provided.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-5 text-sm font-medium text-ink underline underline-offset-4 hover:opacity-70"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
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
                      required
                      placeholder="Your name"
                      className="mt-2 w-full border border-line bg-white px-4 py-2.5 text-sm text-ink outline-none placeholder:text-slate/60 focus:border-ink"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-ink"
                    >
                      Work Email
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@company.com"
                      className="mt-2 w-full border border-line bg-white px-4 py-2.5 text-sm text-ink outline-none placeholder:text-slate/60 focus:border-ink"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="company"
                      className="text-sm font-medium text-ink"
                    >
                      Company
                    </label>

                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Company name"
                      className="mt-2 w-full border border-line bg-white px-4 py-2.5 text-sm text-ink outline-none placeholder:text-slate/60 focus:border-ink"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="projectType"
                      className="text-sm font-medium text-ink"
                    >
                      Project Type
                    </label>

                    <select
                      id="projectType"
                      name="projectType"
                      required
                      defaultValue=""
                      className="mt-2 w-full border border-line bg-white px-4 py-2.5 text-sm text-ink outline-none focus:border-ink"
                    >
                      <option value="" disabled>
                        Select one
                      </option>

                      {projectTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
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
                    Project Description
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us what you're looking to build..."
                    className="mt-2 w-full resize-none border border-line bg-white px-4 py-2.5 text-sm text-ink outline-none placeholder:text-slate/60 focus:border-ink"
                  />
                </div>

                {error && (
                  <p className="text-sm text-red-600">
                    Something went wrong. Please try again or email us
                    directly.
                  </p>
                )}

                <Button type="submit" variant="primary">
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </FadeIn>

          <FadeIn direction="right">
            <p className="text-sm font-medium text-ink">
              Prefer to reach out directly?
            </p>

            <div className="mt-4 space-y-4">
              <a
                href="mailto:yasirmaqsood534@gmail.com"
                className="flex items-center gap-3 text-sm text-slate transition-colors hover:text-ink"
              >
                <Mail
                  className="h-4 w-4 text-amber"
                  strokeWidth={1.5}
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
                />
                <span>WhatsApp</span>
              </a>

              <a
                href="https://www.linkedin.com/in/yasir-maqsood/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-slate transition-colors hover:text-ink"
              >
                <span className="flex h-4 w-4 items-center justify-center rounded-sm bg-amber text-[10px] font-bold text-white">
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