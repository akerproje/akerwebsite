import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AKER Proje | Eğitim Teknolojileri & Dijital Rehabilitasyon",
  description: "AKER Proje; akıllı kürsü, eğitim teknolojileri, Briolight dijital rehabilitasyon ve kapsayıcı eğitim çözümleri sunar.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="tr"><body>{children}</body></html>;
}
