import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import Script from "next/script";
import "./globals.css";

const fallbackSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host");
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host?.includes("localhost") ? "http" : "https");
  const siteUrl = host ? `${protocol}://${host}` : fallbackSiteUrl;
  const socialImage = new URL("/og.png", siteUrl);

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: "Nuren Fahmid — Software Engineering Portfolio",
      template: "%s | Nuren Fahmid",
    },
    description:
      "Portfolio of Nuren Fahmid, a Software Engineering undergraduate building backend systems, full-stack products, real-time software, and practical AI workflows.",
    alternates: { canonical: "/" },
    openGraph: {
      title: "Nuren Fahmid — Software Engineering Portfolio",
      description:
        "Backend systems, full-stack products, real-time software, and practical AI workflows.",
      url: "/",
      siteName: "Nuren Fahmid Portfolio",
      images: [
        {
          url: socialImage,
          width: 1729,
          height: 910,
          alt: "Nuren Fahmid software engineering portfolio",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Nuren Fahmid — Software Engineering Portfolio",
      description:
        "Backend systems, full-stack products, real-time software, and practical AI workflows.",
      images: [socialImage],
    },
    robots: { index: true, follow: true },
  };
}

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f2efe7" },
    { media: "(prefers-color-scheme: dark)", color: "#0d1117" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body>
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var e=document.documentElement;var t=localStorage.getItem('theme');var s=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';e.dataset.theme=t||s;}catch(_){}})();`,
          }}
        />
        {children}
      </body>
    </html>
  );
}
