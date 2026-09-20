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

export const metadata: Metadata = {
  metadataBase: new URL("https://www.devopscommands.com"),

  title: {
    default: "DevOps Commands | Kubernetes, Docker, Linux & Ansible",
    template: "%s | DevOps Commands",
  },

  description:
    "DevOps commands, Kubernetes kubectl commands, Docker commands, Linux commands, Ansible commands, SRE troubleshooting guides and free DevOps tools.",

  keywords: [
    "DevOps commands",
    "Kubernetes commands",
    "kubectl commands",
    "Docker commands",
    "Linux commands",
    "Ansible commands",
    "SRE troubleshooting",
    "DevOps tools",
    "DevOps cheat sheet",
  ],

  alternates: {
    canonical: "https://www.devopscommands.com/",
  },

  openGraph: {
    type: "website",
    url: "https://www.devopscommands.com/",
    siteName: "DevOps Commands",
    title: "DevOps Commands | Kubernetes, Docker, Linux & Ansible",
    description:
      "Practical DevOps commands, Kubernetes, Docker, Linux, Ansible and SRE guides with free developer tools.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}






