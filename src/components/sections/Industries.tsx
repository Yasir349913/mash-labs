import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { industries } from "@/data/industries";

export function Industries() {
  return (
    <section className="bg-white py-20 md:py-28">
      <Container>
        <FadeIn>
          <SectionHeading
            title="Who we work with"
            description="We focus on businesses where technology has a direct, practical impact."
          />
        </FadeIn>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {industries.map((industry, i) => {
            const Icon = industry.icon;
            return (
              <FadeIn key={industry.title} delay={i * 0.08}>
                <div className="h-full border border-line bg-white p-6 transition-colors hover:border-ink/30">
                  <Icon className="h-5 w-5 text-amber" strokeWidth={1.5} />
                  <h3 className="mt-4 font-display text-base font-semibold text-ink">
                    {industry.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate">{industry.description}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}