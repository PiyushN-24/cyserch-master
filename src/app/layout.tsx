import Footer from "./components/footer/footer";
import Navigation from "./components/navigation";
import "./globals.css";
import 'animate.css';
import { Inter } from "next/font/google";
import Head from "next/head";
import Script from "next/script";
import CyserchImage from "../../../../public/images/blog1-topimgge.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Top Cybersecurity Services: Web, Mobile, API, Cloud, Network Pen Testing | Cyserch",
  description: "Cyserch: Comprehensive Web, Mobile, API, Network, and Cloud Penetration Testing, DevSecOps, and Cybersecurity Training."
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        {/* Meta tags */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />

        {/* Preload fonts */}
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" as="style" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" />

        {/* Preconnect to Google Tag Manager */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />

        {/* Canonical Tag */}
        <link rel="canonical" href="https://www.cyserch.com" />
      </Head>

      {/* GTM Script */}
      <Script
        id="gtm-script"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MDHZZM9M');
          `,
        }}
      />

      <html lang="en">
        <body className={inter.className}>
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-MDHZZM9M"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>
          <Navigation />
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
}