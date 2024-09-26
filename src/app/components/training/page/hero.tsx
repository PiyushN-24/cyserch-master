import Image from "next/image";
import Heroimg from "../../../../../public/images/BC_What-Is-Student-Teaching_247733fd61.jpg";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="hero-container flex flex-col lg:flex-row items-center justify-between p-8 lg:p-16">
      <div className="hero-text lg:w-1/2 pr-4 fadeInLeft">
        <h1 className="text-4xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
          Secure Your Future with <span className="text-[#19FFDB]">Advanced Cybersecurity Training</span>
        </h1>
        <p className="text-lg lg:text-2xl text-gray-300 mb-6 leading-relaxed">
        Whether you are a student or business professional, our expert-led courses help you stay ahead of cyber threats.
        </p>

        <div className="flex gap-4">
          <Link href="/contactus">
            <button className="py-4 px-8 bg-teal-500 text-black text-lg lg:text-xl font-semibold rounded-lg shadow-lg hover:bg-teal-600 transition-all duration-300">
              Schedule a Consultation
            </button>
          </Link>
        </div>
      </div>
      
      <div className="hero-image lg:w-1/2 mt-8 lg:mt-0 fadeInRight">
        <Image
          alt="Cybersecurity Training"
          src={Heroimg}
          className="rounded-lg shadow-lg"
          layout="responsive"
        />
      </div>
    </div>
  );
}
