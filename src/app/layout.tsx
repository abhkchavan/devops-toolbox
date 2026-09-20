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
    default:
      "DevOps Commands, Troubleshooting & Tools | Kubernetes, Linux, Docker",
    template: "%s | DevOps Commands",
  },

  description:
    "Free DevOps commands, Kubernetes kubectl, Linux, Docker, Git, Terraform, Ansible, Jenkins and cloud CLI references. Practical SRE troubleshooting guides, DevOps interview questions and developer tools.",

  keywords: [
    "DevOps commands",
    "DevOps cheat sheet",
    "Kubernetes commands",
    "kubectl commands",
    "Kubernetes troubleshooting",
    "Linux commands",
    "Linux troubleshooting",
    "Docker commands",
    "Docker troubleshooting",
    "Git commands",
    "Terraform commands",
    "Terraform troubleshooting",
    "Ansible commands",
    "Jenkins commands",
    "AWS CLI commands",
    "Azure CLI commands",
    "Google Cloud CLI commands",
    "Helm commands",
    "Prometheus commands",
    "SRE troubleshooting",
    "DevOps interview questions",
    "DevOps tools",
  ],

  authors: [
    {
      name: "DevOps Commands",
      url: "https://www.devopscommands.com",
    },
  ],

  creator: "DevOps Commands",
  publisher: "DevOps Commands",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "DevOps Commands",
    title:
      "DevOps Commands, Troubleshooting & Tools | Kubernetes, Linux, Docker",
    description:
      "Practical DevOps commands, troubleshooting guides, interview preparation and free tools for DevOps, SRE and cloud engineers.",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "DevOps Commands, Troubleshooting & Tools | Kubernetes, Linux, Docker",
    description:
      "Practical DevOps commands, troubleshooting guides, interview preparation and free DevOps tools.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "technology",
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