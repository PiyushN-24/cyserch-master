import Image from "next/image";
import Link from "next/link";
import Heroimg from "../../../../../public/images/AI-ML-Security.png";

export default function CloudSecurityHero() {
  return (
    <div className="div-boxs">
      <div className="div-box1 pr-4 fadeLeft">
        <h1 className="title">AL-ML Security</h1>
        <p className="discription">
        Strengthens the integrity of artificial intelligence and machine learning systems by securing data pipelines, protecting model confidentiality, and mitigating risks from adversarial attacks.
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
