import Image from "next/image";
import done from "../../../../../public/icons/Done.png";
import hacker from "../../../../../public/images/360_F_604704017_zHjlvfNLv06FIw2FulzbhwjOQeYUcGr3.jpg";

export default function WhyChooseUs() {
  return (
    <div className="WhyChooseUs">
      <div className="trainig-div-2 fadeLeft">
        <Image className="trainig-img" src={hacker} alt="hacker" />
      </div>
      <div className="div-1 pl-8 fadeRight">
        <span className="text-[#19FFDB] text-[1.37rem] font-medium mb-4">
          Why Choose Us
        </span>
        <h3 className="text-white text-[2.18rem] font-semibold">
          Experience a world where learning never stops.
        </h3>
        <p className="text-[#A39D9D] text-[1.2rem] font-light mt-6">
          Our community uses an enriched curriculum to provide engaging and
          relevant content, ensuring every course not only teaches but also
          inspires.
        </p>
        <ul className="mt-6">
          <li className="flex items-center text-[#A39D9D] text-[1.2rem] font-light">
            <Image src={done} alt="done" className="mr-3" /> Top-Notch Flexible
            Classes
          </li>
          <li className="flex items-center text-[#A39D9D] text-[1.2rem] font-light">
            <Image src={done} alt="done" className="mr-3" /> Expertise in Live
            Classes From Anywhere
          </li>
          <li className="flex items-center text-[#A39D9D] text-[1.2rem] font-light">
            <Image src={done} alt="done" className="mr-3" /> Certification for
            All Courses
          </li>
        </ul>
      </div>
    </div>
  );
}
