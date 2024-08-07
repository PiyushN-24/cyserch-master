import Image from "next/image";
import done from "../../../../public/icons/Done.png";
import hacker from "../../../../public/images/young-hacker 2.png";
import Head from "next/head";

export default function WhyChooseUs() {
  return (
    <>

<Head>
        {/* Preload hero image */}
        <link
          rel="preload"
          href="/images/security.svg"
          as="image"
          type="image/svg+xml"
        />
      </Head>
    <div className="WhyChooseUs">
      <div className="div-1 fadeLeft2 pr-4">
        <span className="text-[#19FFDB] text-[1.37rem] font-medium mb-4">
          Why Choose Us
        </span>
        <h3 className="text-white text-[2.18rem] font-semibold">
          Provide Advanced Security Against Emerging Threats
        </h3>
        <p className="text-[#A39D9D] text-[1.2rem] font-light mt-6">
          Choose our specialized cybersecurity expertise, offering customized
          solutions, reliable performance, and strict compliance. Protect your
          digital assets with assurance and complete peace of mind.
        </p>
        <ul className="mt-6">
          <li className="flex items-center text-[#A39D9D] text-[1.2rem] font-light">
            <Image src={done} alt="done" className="mr-3" /> Expert
            Cybersecurity Services
          </li>
          <li className="flex items-center text-[#A39D9D] text-[1.2rem] font-light">
            <Image src={done} alt="done" className="mr-3" /> Penetration Testing
            Expertise
          </li>
          <li className="flex items-center text-[#A39D9D] text-[1.2rem] font-light">
            <Image src={done} alt="done" className="mr-3" /> Tailored Security
            Strategies Solutions
          </li>
        </ul>
      </div>

      <div className="div-1 fadeRight2">
        <Image src={hacker} alt="hacker"  priority/>
      </div>
    </div>
    </>
  );
}
