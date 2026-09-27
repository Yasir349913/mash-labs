import Link from "next/link";
import { Container } from "@/components/ui/Container";

const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-white py-10">
      <Container className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <p className="font-display text-lg font-semibold text-ink">Mash Labs</p>
          <p className="mt-1 text-sm text-slate">
            Software and AI solutions, built practically.
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 md:justify-end">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-slate hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </Container>

      <Container className="mt-8 border-t border-line pt-6">
        <p className="text-center text-xs text-slate md:text-left">
          © {new Date().getFullYear()} Mash Labs. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}