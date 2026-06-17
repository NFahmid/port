import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nuren Fahmid - Software Engineering Portfolio",
    template: "%s | Nuren Fahmid",
  },
  description:
    "Portfolio of Nuren Fahmid, a third-year Software Engineering undergraduate at Islamic University of Technology building full-stack, AI-assisted, and systems projects.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Nuren Fahmid - Software Engineering Portfolio",
    description:
      "Projects, academics, skills, and contact information for Nuren Fahmid.",
    url: "/",
    siteName: "Nuren Fahmid Portfolio",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Nuren Fahmid portfolio preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nuren Fahmid - Software Engineering Portfolio",
    description:
      "Software Engineering undergraduate portfolio featuring full-stack, AI-assisted, and systems projects.",
    images: ["/twitter-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
      data-loading="true"
      suppressHydrationWarning
    >
      <body className="min-h-full">
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var e=document.documentElement;e.classList.add('js');var t=localStorage.getItem('theme');var s=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';e.dataset.theme=t||s;}catch(_){}})();`,
          }}
        />
        {children}
      </body>
    </html>
  );
}
