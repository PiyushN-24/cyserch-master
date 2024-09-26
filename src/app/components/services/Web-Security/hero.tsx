import Image from "next/image";
import Link from "next/link";
import Heroimg from "../../../../../public/images/web-pentest.png";

export default function CloudSecurityHero() {
  return (
    <div className="div-boxs" style={{ display: 'flex', gap: '3px' }}>
      <div className="div-box1 pr-4 fadeLeft">
        <h1 className="title">Web Application Penetration Testing</h1>
        <p className="discription">
          Enhances the safety of online platforms by safeguarding data and
          protecting user information from cyber threats.
        </p>
        <Link href="/contactus">
          <button className="btn-2">Contact us</button>
        </Link>

        {/* <p className="discription2">Built by the team that has helped secure</p> */}
      </div>
      <div className="div-box2 fadeRight">
        <Image alt="hero" src={Heroimg} className="rounded-lg " />
      </div>
    </div>
  );
}
