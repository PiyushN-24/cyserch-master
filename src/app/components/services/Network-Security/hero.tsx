import Image from "next/image";
import Link from "next/link";
import Heroimg from "../../../../../public/images/network-security.webp";

export default function CloudSecurityHero() {
  return (
    <div className="div-boxs">
      <div className="div-box1 pr-4 fadeLeft">
        <h1 className="title">
          Network Vulnerability Assessment and Penetration Testing
        </h1>
        <p className="discription">
          Probing and securing network defenses through comprehensive testing
          strategies.
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
