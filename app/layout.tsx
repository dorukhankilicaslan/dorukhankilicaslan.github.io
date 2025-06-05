import ClientRoot from "@/components/ClientRoot";

export const metadata = {
  title: "Dorukhan KILIÇASLAN | Portföy",
  keywords: [
    "Dorukhan Kılıçaslan",
    "Portföy",
    "Web Geliştirici",
    "Yazılım Mühendisi",
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
  ],
  description: "Dorukhan Kılıçaslan'ın kişisel portföyü",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body>
        <ClientRoot>{children}</ClientRoot>
      </body>
    </html>
  );
}