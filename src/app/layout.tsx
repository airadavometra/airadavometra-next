import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "@/styles/reset.css";
import "@/styles/globals.css";
import { Layout } from "@/components/Layout/Layout";

export const metadata: Metadata = {
  title: "Daria Artemova",
  description: "Daria Artemova personal website",
  keywords: [
    "portfolio",
    "resume",
    "CV",
    "Daria Artemova",
    "front-end",
    "web",
    "developer",
    "software",
    "engineer",
  ],
  openGraph: {
    locale: "en_US",
    type: "website",
    url: "https://www.airadavometra.space/",
    title: "Daria Artemova",
    description: "Daria Artemova personal website",
    siteName: "Daria Artemova personal website",
    images: [
      {
        url: "/share.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
        <Analytics />
      </body>
    </html>
  );
}
