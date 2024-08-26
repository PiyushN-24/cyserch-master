import Image from "next/image";
import Link from "next/link";
import Head from "next/head"; // Import Head component
import heroImg from "../../../../public/images/security.png";

export default function Hero() {
  return (
    <>
      <Head>
        {/* Preload hero image */}
        <link
          rel="preload"
          href="/images/security.svg"
          as="image"
          type="image/svg+xml"
        />
      </Head>
      <div className="div-boxs ">
        <div className="div-box1 fadeLeft">
          <h1 className="title">
          Comprehensive Cybersecurity Services:
            
          <span className="title-services">Penetration Testing</span>,
              Corporate Cybersecurity Training
            
          </h1>
          {/*<p className="discription">
            Choose our team for trustworthy security solutions designed
            specifically for your requirements. Secure your operations and gain
            tranquility knowing we are your dedicated cybersecurity partners.
          </p>*/}
          <Link href="/contactus">
            <button className="btn-2">Schedule a call</button>
          </Link>
        </div>
        <div className="div-box2 fadeRight">
          <Image 
            src={heroImg} 
            alt="hero" 
            decoding="async"
            loading="lazy" 
          />
        </div>
      </div>
    </>
  );
}