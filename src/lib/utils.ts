type ClassValue = string | number | null | false | undefined;

/** Tiny classnames joiner — avoids an extra dependency. */
export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}
