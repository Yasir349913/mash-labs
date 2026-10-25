import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { bookingEnabled, primaryCta } from "@/lib/config";

export function FinalCTA() {
  return (
    <section className="bg-ink py-24 md:py-32">
      <Container>
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Have a problem worth solving?
          </h2>
          <p className="mt-5 text-base text-white/60 md:text-lg">
            Tell us what you&apos;re working with. We&apos;ll tell you honestly if — and
            how — we can help.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <MagneticButton>
              <Button
                href={primaryCta.href}
                variant="primary"
                className="bg-white text-ink hover:bg-amber hover:text-white"
              >
                {bookingEnabled ? primaryCta.label : "Start a Conversation"}
              </Button>
            </MagneticButton>
            {bookingEnabled && (
              <Button
                href="#contact"
                variant="secondary"
                className="border-white/30 text-white hover:border-white"
              >
                Send a message
              </Button>
            )}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}