import Image from "next/image";
import Link from "next/link";
import Heroimg from "../../../../../public/images/DevSecOps.png";

export default function CloudSecurityHero() {
  return (
    <div className="div-boxs">
      <div className="div-box1 pr-4 fadeLeft">
        <h1 className="title">DevSecOps</h1>
        <p className="discription">
          Elevate Your Security Posture with DevSecOps: Seamlessly Integrating Security into Every Phase of Development to Protect Your Assets and Mitigate Risks.
        </p>
        <Link href="/contactus">
          <button className="btn-2">Contact us</button>
        </Link>

        {/* <p className="discription2">Built by the team that has helped secure</p> */}
      </div>
      <div className="div-box2 fadeRight">
        <Image 
          src={Heroimg} 
          width={800} 
          height={600} 
          alt="devsecops image" 
          className="rounded-lg object-cover" 
        />
      </div>
    </div>
  );
}
