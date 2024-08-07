import Image from "next/image";
import Heroimg from "../../../../../public/images/BC_What-Is-Student-Teaching_247733fd61.jpg";
import Link from "next/link";


export default function Hero() {
  return (
    <div className="div-boxs">
      <div className="div-box1 pr-4 fadeLeft">
        <h1 className="title">A Better Learning Journey Begins Here</h1>
        <p className="discription">
        Enhance your cybersecurity skills with our courses in Ethical Hacking,Cloud Security, SAST, DAST, and Secure SDLC, designed to protect systems, secure code, and ensure robust software development.
        </p>

        <div className="flex gap-5">
        <a href="#course">
        <button className="btn">Find The Course</button>
      </a>
      <Link href="/contactus">
            <button className="btn">Schedule a call</button>
          </Link>
          </div>

        {/* <p className="discription2">Built by the team that has helped secure</p> */}
      </div>
      <div className="div-box2 fadeRight">
        <Image alt="hero" src={Heroimg} className="rounded-lg" />
      </div>
    </div>
  );
}
