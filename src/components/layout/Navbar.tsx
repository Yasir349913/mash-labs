"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur-sm">
      <Container className="flex h-18 items-center justify-between py-4">
        <Link href="/" className="font-display text-lg font-semibold text-ink">
          Mash Labs
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Button href="#contact" variant="primary" className="hidden md:inline-flex">
          Start a Conversation
        </Button>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? (
            <X className="h-6 w-6 text-ink" strokeWidth={1.5} />
          ) : (
            <Menu className="h-6 w-6 text-ink" strokeWidth={1.5} />
          )}
        </button>
      </Container>

      {isOpen && (
        <div className="border-t border-line bg-white px-6 py-6 md:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-ink"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Button
            href="#contact"
            variant="primary"
            className="mt-6 w-full"
            onClick={() => setIsOpen(false)}
          >
            Start a Conversation
          </Button>
        </div>
      )}
    </header>
  );
}