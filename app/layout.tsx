import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "WildCard | 一分钟注册，轻松订阅海外软件服务",
  description: "WildCard 轻松订阅 OpenAI API 等海外服务，快速开通与便捷支付体验。",
  icons: { icon: "/favicon.ico" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
