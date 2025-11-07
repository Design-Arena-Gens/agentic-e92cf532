import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Intelliwave | Agence d'automatisation IA",
  description:
    "Intelliwave crée des chatbots IA sur mesure qui transforment l'expérience client et automatisent les processus métier.",
  metadataBase: new URL("https://agentic-e92cf532.vercel.app"),
  openGraph: {
    title: "Intelliwave | Agence d'automatisation IA",
    description:
      "Propulsez votre support client et vos ventes avec des chatbots IA sur mesure conçus par Intelliwave.",
    url: "https://agentic-e92cf532.vercel.app",
    siteName: "Intelliwave",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Intelliwave - Agence d'automatisation IA",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Intelliwave | Agence d'automatisation IA",
    description:
      "Transformez vos opérations avec des chatbots IA sur mesure développés par Intelliwave.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={spaceGrotesk.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
