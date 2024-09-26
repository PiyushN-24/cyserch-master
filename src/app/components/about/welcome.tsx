import Image from "next/image";
import CodingBoy from "../../../../public/images/programmer-working-on-laptop-computer-technology.jpg";
import Link from "next/link";

export default function AboutWelcome() {
  return (
    <div className="flex flex-col-reverse px-4 sm:px-[9rem] py-4 sm:py-[3rem] sm:flex-row">
      <div className="div-1 pr-4 fadeLeft">
        <span className="text-[#19FFDB] text-[1.37rem] font-medium mb-4">
          WELCOME TO CYSERCH
        </span>
        <h3 className="text-white text-[2.18rem] font-semibold">
        Your Partner in Cutting-Edge Cybersecurity Solutions
        </h3>
        <p className="text-[#A39D9D] text-[1.2rem] font-light mt-6">
        In today’s digital age, where the threats to your business’s online security are more sophisticated than ever, having a reliable partner to protect your digital assets is crucial. At Cyserch, we stand at the forefront of cybersecurity protection, offering advanced security solutions meticulously designed to meet the unique challenges of todays dynamic digital landscape. Our commitment to safeguarding your digital assets with precision and innovative technology ensures that your business can operate securely and confidently, no matter what challenges arise.
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
