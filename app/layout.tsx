import { ourFileRouter } from "@/app/api/uploadthing/core";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { extractRouterConfig } from "uploadthing/server";
import { ThemeProvider } from "./components/dashboard/ThemeProvider";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "Schedulify - Smart Meeting Scheduling Platform",
    template: "%s | Schedulify",
  },
  description:
    "Schedulify streamlines your meeting scheduling across Google Meet, Zoom, and other platforms. Save time with automated scheduling, calendar integration, and smart meeting management.",
  keywords: [
    "meeting scheduler",
    "calendar management",
    "video conferencing",
    "Google Meet",
    "Zoom integration",
    "Microsoft Teams",
    "appointment scheduling",
    "calendar sync",
    "meeting planner",
    "scheduling software",
  ],
  authors: [{ name: "Schedulify Team" }],
  creator: "Schedulify",
  publisher: "Schedulify",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://schedulify-app.vercel.app  "),
  openGraph: {
    title: "Schedulify - Smart Meeting Scheduling Platform",
    description:
      "Streamline your meeting scheduling across all major platforms. Automated scheduling, calendar integration, and smart meeting management.",
    url: "https://schedulify-app.vercel.app   ",
    siteName: "Schedulify",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Schedulify - Smart Meeting Scheduling",
      },
    ],
  },
  twitter: {
    title: "Schedulify - Smart Meeting Scheduling Platform",
    description:
      "Streamline your meeting scheduling across all major platforms. Automated scheduling, calendar integration, and smart meeting management.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    other: [
      {
        rel: "manifest",
        url: "/site.webmanifest",
      },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
