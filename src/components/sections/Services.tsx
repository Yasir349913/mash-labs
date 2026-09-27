import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { services } from "@/data/services";

export function Services() {
  return (
    <section id="services" className="bg-paper py-20 md:py-28">
      <Container>
        <FadeIn>
          <SectionHeading
            title="What we do"
            description="Three ways we help businesses solve real problems with technology."
          />
        </FadeIn>

        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-line bg-line md:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <FadeIn key={service.title} delay={i * 0.1} direction="up">
                <div className="h-full bg-white p-8">
                  <Icon className="h-6 w-6 text-amber" strokeWidth={1.5} />
                  <h3 className="mt-5 font-display text-xl font-semibold text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate">{service.description}</p>
                  <ul className="mt-5 space-y-2">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="border-t border-line pt-2 text-sm text-ink first:border-t-0 first:pt-0"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}