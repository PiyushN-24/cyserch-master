import Image from "next/image";
import Link from "next/link";
import Heroimg from "../../../../../public/images/SAST_thumb.png";

export default function CloudSecurityHero() {
  return (
    <div className="div-boxs" style={{ display: 'flex', gap: '3px' }}> {/* Adjust the gap as needed */}
  <div className="div-box1 fadeLeft">
    <h1 className="title">Static Application Security Testing</h1>
    <p className="discription">
      Static application security testing is a methodology that analyzes source code to find security vulnerabilities
    </p>
    <Link href="/contactus">
      <button className="btn-2">Contact us</button>
    </Link>
  </div>
  <div className="div-box2 fadeRight">
    <Image alt="hero" src={Heroimg} className="rounded-lg" />
  </div>
</div>
  );
}
