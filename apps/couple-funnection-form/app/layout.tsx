import "../styles/globals.css";

import type { Metadata } from "next";

import { pretendard } from "@/public/fonts/fonts";

export const metadata: Metadata = {
  title: "커플 퍼넥션 신청 폼",
  description: "관계를 더 단단하게",
  openGraph: {
    title: "커플 퍼넥션 | couple funnection",
    description: "우리는 서로 얼마나 알고 있을까요?",
    // images: [
    //   {
    //     url: process.env.NEXT_PUBLIC_KAKAO_SHARE_IMAGE_URL!,
    //     width: 800,
    //     height: 600,
    //     alt: "KKTI 로고 이미지",
    //   },
    // ],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pretendard.className} antialiased`}>
        <main className="bg-backgroundColor mdl:pr-40 mdl:pl-40 flex h-dvh flex-col items-center justify-between">
          {children}
        </main>
      </body>
    </html>
  );
}
