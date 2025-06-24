import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from '@/components/Header';
import Script from 'next/script';
import { CUSTOM_BODY_HTML } from '@/config/custom-html';
import Image from 'next/image';
import GoogleTagManagerHead from "@/components/GoogleTagManagerHead";
import GoogleTagManagerBody from "@/components/GoogleTagManagerBody";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ImageNinja",
  description: "Online image optimization service",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <GoogleTagManagerHead />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Yandex.Metrika counter */}
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym(102422498, "init", {
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true,
                webvisor:true
            });
          `}
        </Script>
        {/* /Yandex.Metrika counter */}
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <GoogleTagManagerBody />
        {/* Yandex.Metrika <noscript> */}
        <noscript>
          <div className="noscript-metrika">
            <Image
              src="https://mc.yandex.ru/watch/102422498"
              alt=""
              width={1}
              height={1}
              style={{ position: 'absolute', left: '-9999px' }}
              unoptimized
            />
          </div>
        </noscript>
        <>{CUSTOM_BODY_HTML && <div dangerouslySetInnerHTML={{ __html: CUSTOM_BODY_HTML }} />}</>
        <Header />
        {children}
      </body>
    </html>
  );
}
