import Image from "next/image";
import Heroimg from "../../../../../public/images/BC_What-Is-Student-Teaching_247733fd61.jpg";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="hero-container flex flex-col lg:flex-row items-center justify-between p-8 lg:p-16">
      <div className="hero-text lg:w-1/2 pr-4 fadeInLeft">
        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
          Elevate Your Cybersecurity Skills with Expert Courses
        </h1>
        <p className="text-lg lg:text-xl text-gray-300 mb-6">
          Enhance your cybersecurity expertise through our specialized courses in Ethical Hacking, Cloud Security, SAST, DAST, and Secure SDLC. Build robust defense mechanisms and secure your systems effectively.
        </p>

        <div className="flex gap-4">
          <a href="#courses">
            <button className="btn btn-primary">Explore Courses</button>
          </a>
          <Link href="/contactus">
            <button className="btn btn-secondary">Schedule a Call</button>
          </Link>
        </div>
      </div>
      <div className="hero-image lg:w-1/2 mt-8 lg:mt-0 fadeInRight">
        <Image alt="hero" src={Heroimg} className="rounded-lg" layout="responsive" />
      </div>
    </div>
  );
}
