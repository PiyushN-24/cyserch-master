import Image from "next/image";
import Link from "next/link";
import Heroimg from "../../../../../public/images/API.jpeg";

export default function CloudSecurityHero() {
  return (
    <div className="div-boxs">
      <div className="div-box1 pr-4 fadeLeft">
        <h1 className="title">API Penetration Testing & Web Services</h1>
        <p className="discription">
           API & Web Services Security ensures the protection of online services
          and APIs from cyber threats, safeguarding data integrity and
          preventing unauthorized access.
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
