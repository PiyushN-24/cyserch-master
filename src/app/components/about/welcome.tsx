import Image from "next/image";
import CodingBoy from "../../../../public/images/programmer-working-on-laptop-computer-technology.jpg";
import Link from "next/link";

export default function AboutWelcome() {
  return (
    <div className="flex flex-col-reverse px-4 sm:px-[9rem] py-4 sm:py-[3rem] sm:flex-row">
      <div className="div-1 pr-4 fadeLeft">
        <span className="text-[#19FFDB] text-[1.37rem] font-medium mb-4">
          WELCOME
        </span>
        <h3 className="text-white text-[2.18rem] font-semibold">
          Discover Cutting-Edge Cybersecurity Solutions
        </h3>
        <p className="text-[#A39D9D] text-[1.2rem] font-light mt-6">
          Welcome to the forefront of cybersecurity protection. At Cyserch, we
          are dedicated to providing you with advanced security solutions
          tailored to meet the challenges of todays digital landscape. Join us
          as we safeguard your digital assets with expert precision and
          innovative technology.
        </p>

        <Link href="/#contacts">
          <button className="btn-2">Schedule a call</button>
        </Link>
      </div>

      <div className="div-1">
        <Image src={CodingBoy} alt="hacker" layout="responsive" />
      </div>
    </div>
  );
}
