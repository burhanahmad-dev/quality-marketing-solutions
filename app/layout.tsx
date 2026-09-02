import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "localhost:3000";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.startsWith("localhost") ? "http" : "https");
  const metadataBase = new URL(`${protocol}://${host}`);

  return {
    metadataBase,
    title: "Quality Marketing Solutions | Digital Growth Agency",
    description:
      "QMS connects SEO, paid media, social media and conversion-led web design into one clear digital growth system.",
    keywords: [
      "digital marketing agency",
      "SEO agency",
      "paid media",
      "social media marketing",
      "conversion rate optimization",
      "web design",
    ],
    icons: {
      icon: "/favicon.png",
      shortcut: "/favicon.png",
    },
    openGraph: {
      type: "website",
      title: "Quality Marketing Solutions | Digital Growth Agency",
      description: "Digital marketing built to perform.",
      siteName: "Quality Marketing Solutions",
      images: [
        {
          url: "/og.png",
          width: 1200,
          height: 630,
          alt: "Quality Marketing Solutions — Digital marketing built to perform",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Quality Marketing Solutions | Digital Growth Agency",
      description: "Digital marketing built to perform.",
      images: ["/og.png"],
    },
    alternates: {
      canonical: "/",
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
