import type { Metadata } from "next";
import { Montserrat, Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const notoSansKR = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "정민주의 포트폴리오",
  description: "풀스택 개발자 정민주의 포트폴리오입니다.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ko"
      className={`${montserrat.variable} ${notoSansKR.variable} h-full antialiased break-normal break-keep`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
