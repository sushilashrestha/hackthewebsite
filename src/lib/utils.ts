import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function validateEmailDomain(email: string) {
  const emailDomain = email.split("@")[1];
  if (emailDomain !== "gmail.com") {
    throw new Error("Only gmail.com email addresses are allowed.");
  }
}
