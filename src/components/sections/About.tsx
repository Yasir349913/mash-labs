import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { ArrowUpRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { founder } from "@/data/founder";
import { bookingEnabled, primaryCta } from "@/lib/config";

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

// Photo sirf tab dikhayein jab file sach mein public/ mein maujood ho,
// warna broken image ki jagah initials wala card dikhta hai.
function photoExists(src?: string) {
  if (!src) return false;
  try {
    return fs.existsSync(path.join(process.cwd(), "public", src));
  } catch {
    return false;
  }
}

export function About() {
  const hasPhoto = photoExists(founder.photo);

  return (
    <section id="about" className="bg-white py-20 md:py-28">
      <Container>
        <FadeIn>
          <p className="text-sm font-medium text-amber">About Mash Labs</p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            A focused software and AI studio, led by its founder.
          </h2>
        </FadeIn>

        <div className="mt-14 grid items-start gap-12 md:grid-cols-12 md:gap-16">
          <FadeIn direction="left" className="md:col-span-5">
            <div className="relative mx-auto w-full max-w-sm md:mx-0">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm border border-line bg-paper">
                {hasPhoto && founder.photo ? (
                  <Image
                    src={founder.photo}
                    alt={founder.photoAlt}
                    fill
                    sizes="(min-width: 768px) 40vw, 100vw"
                    className="object-cover"
                  />
                ) : (
                  <div
                    className="flex h-full w-full items-center justify-center bg-navy"
                    role="img"
                    aria-label={founder.photoAlt}
                  >
                    <span className="font-display text-6xl font-semibold text-amber">
                      {getInitials(founder.name)}
                    </span>
                  </div>
                )}

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 via-ink/40 to-transparent px-5 pb-5 pt-16">
                  <p className="font-display text-lg font-semibold text-white">
                    {founder.name}
                  </p>
                  <p className="font-mono text-xs uppercase tracking-wide text-white/70">
                    Founder, Mash Labs
                  </p>
                </div>
              </div>
              <div className="absolute -right-3 -top-3 -z-10 h-full w-full rounded-sm border border-amber/30 md:-right-4 md:-top-4" />
            </div>
          </FadeIn>

          <FadeIn direction="right" className="md:col-span-7">
            <h3 className="font-display text-2xl font-semibold text-ink">
              {founder.name}
            </h3>
            <p className="mt-1 text-sm text-slate">{founder.role}</p>

            <div className="mt-6 max-w-2xl space-y-4">
              {founder.bio.map((paragraph) => (
                <p key={paragraph} className="text-base text-slate">
                  {paragraph}
                </p>
              ))}
            </div>

            {founder.quote && (
              <blockquote className="mt-6 max-w-2xl border-l-2 border-amber pl-5 font-display text-lg font-medium leading-snug text-ink">
                {founder.quote}
              </blockquote>
            )}

            <ul className="mt-8 grid gap-4 sm:grid-cols-3">
              {founder.focus.map(({ icon: Icon, label, description }) => (
                <li
                  key={label}
                  className="rounded-sm border border-line bg-paper/40 p-4"
                >
                  <Icon
                    className="h-5 w-5 text-amber"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  <p className="mt-3 font-display text-sm font-semibold text-ink">
                    {label}
                  </p>
                  <p className="mt-1 text-sm text-slate">{description}</p>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href={primaryCta.href} variant="primary">
                {primaryCta.label}
              </Button>
              {bookingEnabled && (
                <Button href="#contact" variant="secondary">
                  Send a message
                </Button>
              )}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-line pt-6">
              <a
                href={founder.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-ink hover:text-amber"
              >
                LinkedIn
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <a
                href={`mailto:${founder.email}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-amber"
              >
                <Mail className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                {founder.email}
              </a>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}