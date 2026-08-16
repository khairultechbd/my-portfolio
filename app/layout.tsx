import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://mdkhairulislam.com";
const title = "Md. Khairul Islam | System & Network Engineer";
const description =
  "Portfolio of Md. Khairul Islam, System & Network Engineer and CSE Graduate from BUBT. Expertise in MikroTik, Cisco, Windows Server, and network security.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Md. Khairul Islam | Portfolio",
    images: [
      {
        url: "/all-photo/Formal Photo/passport_photo_near_1mb.jpg",
        width: 709,
        height: 900,
        alt: "Md. Khairul Islam",
      },
    ],
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/all-photo/Formal Photo/passport_photo_near_1mb.jpg"],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Md. Khairul Islam",
  jobTitle: "System & Network Engineer",
  url: siteUrl,
  email: "mailto:mdkhairulislam87001@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dhaka",
    addressCountry: "BD",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Bangladesh University of Business and Technology (BUBT)",
  },
  sameAs: [
    "https://www.linkedin.com/in/khairultechbd",
    "https://github.com/khairultechbd",
    "https://www.facebook.com/khairultechbd",
  ],
};

import { ThemeProvider } from 'next-themes'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
