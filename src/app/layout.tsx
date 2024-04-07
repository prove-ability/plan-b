import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const myFont = localFont({
  src: "fonts/nanum-son_kang.ttf",
  display: "swap",
});

export const metadata: Metadata = {
  title: "plan-b is the best!",
  description: "a 보다는 b가 더 나은 것 같아요.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={
          myFont.className +
          " flex min-h-screen flex-col items-center justify-between px-8"
        }
      >
        {children}
      </body>
    </html>
  );
}
