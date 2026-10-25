import { ArrowUpRight, Clock, ListChecks, MessagesSquare } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { calendlyUrl } from "@/lib/config";

const SITE_DOMAIN = "mash-labs.vercel.app";

const points = [
  {
    icon: Clock,
    title: "30 minutes, one conversation",
    description: "Pick any slot that suits you. Times show in your own timezone.",
  },
  {
    icon: MessagesSquare,
    title: "Talk through your project",
    description:
      "Tell me what you're working on and what you want it to achieve.",
  },
  {
    icon: ListChecks,
    title: "Leave with clear next steps",
    description:
      "An honest view on whether and how I can help, and what the sensible first step is.",
  },
];

function buildEmbedUrl(base: string) {
  try {
    const url = new URL(base);
    url.searchParams.set("embed_domain", SITE_DOMAIN);
    url.searchParams.set("embed_type", "Inline");
    url.searchParams.set("hide_gdpr_banner", "1");
    url.searchParams.set("background_color", "ffffff");
    url.searchParams.set("text_color", "15181e");
    url.searchParams.set("primary_color", "c8862b");
    return url.toString();
  } catch {
    return base;
  }
}

export function Booking() {
  if (!calendlyUrl) return null;

  return (
    <section id="booking" className="bg-paper py-20 md:py-28">
      <Container>
        <div className="grid gap-12 md:grid-cols-5 md:gap-14">
          <FadeIn direction="left" className="md:col-span-2">
            <p className="text-sm font-medium text-amber">Book a call</p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              Pick a time that works for you.
            </h2>
            <p className="mt-4 text-base text-slate md:text-lg">
              Prefer to talk it through? Book a short discovery call and we&apos;ll
              go over your project together.
            </p>

            <ul className="mt-8 space-y-6">
              {points.map(({ icon: Icon, title, description }) => (
                <li key={title} className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-line bg-white">
                    <Icon
                      className="h-5 w-5 text-amber"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-semibold text-ink">
                      {title}
                    </h3>
                    <p className="mt-1 text-sm text-slate">{description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-1 text-sm font-medium text-ink hover:text-amber"
            >
              Open scheduler in a new tab
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </FadeIn>

          <FadeIn direction="right" className="md:col-span-3">
            <div className="relative">
              <div className="overflow-hidden rounded-sm border border-line bg-white">
                <iframe
                  src={buildEmbedUrl(calendlyUrl)}
                  title="Book a discovery call with Mash Labs"
                  loading="lazy"
                  className="block h-[700px] w-full md:h-[720px]"
                />
              </div>
              <div className="absolute -right-3 -top-3 -z-10 h-full w-full rounded-sm border border-amber/30 md:-right-4 md:-top-4" />
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}