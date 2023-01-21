import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        async
        defer
        data-website-id="e565587e-a671-4caa-9f18-8bf12805d472"
        src="https://melanippe-umami.vercel.app/umami.js"
      />
      <Component {...pageProps} />
    </>
  );
}
