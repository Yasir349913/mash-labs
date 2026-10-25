// Calendly link. Ye .env / Vercel env variable se override ho sakta hai,
// warna neeche wala default use hota hai. (.env gitignored hai, is liye
// default zaroori hai taake Vercel par bhi booking section hamesha dikhe.)
const DEFAULT_CALENDLY_URL = "https://calendly.com/yasirmaqsood534/30min";

export const calendlyUrl =
  process.env.NEXT_PUBLIC_CALENDLY_URL?.trim() || DEFAULT_CALENDLY_URL;

export const bookingEnabled = Boolean(calendlyUrl);

export const primaryCta = bookingEnabled
  ? { label: "Book a Call", href: "#booking" }
  : { label: "Discuss Your Project", href: "#contact" };