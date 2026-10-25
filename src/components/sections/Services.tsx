import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { services } from "@/data/services";

export function Services() {
  return (
    <section id="services" className="bg-white py-20 md:py-28">
      <Container>
        <FadeIn>
          <SectionHeading
            title="What we do"
            description="Five ways we help businesses replace manual work and weak digital presence with something that works."
          />
        </FadeIn>

        <div className="mt-14 border-t border-line">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <FadeIn key={service.slug} delay={i * 0.05}>
                <article className="grid gap-6 border-b border-line py-10 md:grid-cols-12 md:gap-10">
                  <div className="md:col-span-4">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-sm text-amber">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <Icon
                        className="h-5 w-5 text-amber"
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="mt-4 font-display text-xl font-semibold text-ink">
                      {service.title}
                    </h3>
                  </div>

                  <div className="space-y-5 md:col-span-5">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-slate">
                        The problem
                      </p>
                      <p className="mt-1 text-sm text-ink">{service.problem}</p>
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-slate">
                        What you get
                      </p>
                      <p className="mt-1 text-sm text-ink">{service.outcome}</p>
                    </div>
                  </div>

                  <div className="md:col-span-3">
                    <p className="text-xs font-medium uppercase tracking-wide text-slate">
                      Includes
                    </p>
                    <ul className="mt-2 space-y-1.5">
                      {service.includes.map((item) => (
                        <li key={item} className="text-sm text-slate">
                          — {item}
                        </li>
                      ))}
                    </ul>

                    {service.proof && (
                      <a
                        href={service.proof.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-ink hover:text-amber"
                      >
                        See an example: {service.proof.label}
                        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}