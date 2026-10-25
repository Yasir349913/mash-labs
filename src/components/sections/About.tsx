import Image from "next/image";
import { ArrowUpRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { founder } from "@/data/founder";

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function About() {
  return (
    <section id="about" className="bg-white py-20 md:py-28">
      <Container>
        <FadeIn>
          <p className="text-sm font-medium text-amber">About Mash Labs</p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            A focused software and AI studio, led by its founder.
          </h2>
        </FadeIn>

        <div className="mt-14 grid gap-10 md:grid-cols-12 md:gap-16">
          <FadeIn direction="left" className="md:col-span-4">
            <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-sm border border-line bg-paper">
              {founder.photo ? (
                <Image
                  src={founder.photo}
                  alt={founder.photoAlt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
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
            </div>
          </FadeIn>

          <FadeIn direction="right" className="md:col-span-8">
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

            <ul className="mt-6 flex flex-wrap gap-2">
              {founder.focus.map((item) => (
                <li
                  key={item}
                  className="rounded-sm border border-line px-2.5 py-1 font-mono text-xs text-slate"
                >
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
              <Button href={founder.cta.href} variant="primary">
                {founder.cta.label}
              </Button>

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