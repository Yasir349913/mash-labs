import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { MagneticButton } from "@/components/ui/MagneticButton";
export function FinalCTA() {
  return (
    <section className="bg-ink py-24 md:py-32">
      <Container>
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Have a problem worth solving?
          </h2>
          <p className="mt-5 text-base text-white/60 md:text-lg">
            Tell us what you're working with. We'll tell you honestly if — and
            how — we can help.
          </p>
          <div className="mt-8 flex justify-center">
  <MagneticButton>
    <Button href="#contact" variant="primary" className="hover:bg-amber">
      Start a Conversation
    </Button>
  </MagneticButton>
</div>
        </FadeIn>
      </Container>
    </section>
  );
}