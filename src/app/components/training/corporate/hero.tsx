import Image from "next/image";
import CorporateTrainingImg from "../../../../../public/images/BC_What-Is-Student-Teaching_247733fd61.jpg"; // Update the path as needed
import Link from "next/link";

export default function Hero() {
  return (
    <div className="hero-container flex flex-col lg:flex-row items-center justify-between p-8 lg:p-16">
      <div className="hero-text lg:w-1/2 pr-4 fadeInLeft">
        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
          Enhance Your Teams Skills with Advanced Corporate Training
        </h1>
        <p className="text-lg lg:text-xl text-gray-300 mb-6">
          Elevate your organizations capabilities with specialized training in Cybersecurity, Compliance, and Risk Management. Equip your team with the skills needed to tackle the latest challenges and stay ahead of evolving threats.
        </p>

        <div className="flex gap-4">
          <a href="#training-courses">
            <button className="btn btn-primary">Training Programs</button>
          </a>
          <Link href="/contactus">
            <button className="btn btn-secondary">Get in Touch</button>
          </Link>
        </div>
      </div>
      <div className="hero-image lg:w-1/2 mt-8 lg:mt-0 fadeInRight">
        <Image alt="Corporate Training" src={CorporateTrainingImg} className="rounded-lg" layout="responsive" />
      </div>
    </div>
  );
}
