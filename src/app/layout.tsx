import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import { ThemeProvider, themeInitScript } from "@/components/theme/ThemeProvider";
import { brand } from "@/data/navigation";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const siteUrl = "https://kimo.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${brand.name} — Little Helpers for Big Ideas`,
    template: `%s — ${brand.name}`,
  },
  description:
    "Kimo is a friendly home for specialized AI agents that help with coding, career, research, writing, finance, and everyday tasks. Meet your little helpers for big ideas.",
  keywords: [
    "AI agents",
    "AI assistant",
    "coding assistant",
    "career coach",
    "research assistant",
    "writing assistant",
    "personal assistant",
    "Kimo",
  ],
  authors: [{ name: brand.name }],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${brand.name} — Little Helpers for Big Ideas`,
    description:
      "A friendly home for specialized AI agents. Meet your little helpers for coding, career, research, writing, finance, and everyday life.",
    siteName: brand.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${brand.name} — Little Helpers for Big Ideas`,
    description:
      "A friendly home for specialized AI agents that help with the things you care about.",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/icon.svg" }],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbf8f4" },
    { media: "(prefers-color-scheme: dark)", color: "#0d0b1a" },
  ],
  colorScheme: "light dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          // Set theme before paint to avoid a flash of the wrong theme.
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
        />
      </head>
      <body className={`${inter.variable} ${sora.variable} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
