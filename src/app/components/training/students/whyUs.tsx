import Image from "next/image";
import done from "../../../../../public/icons/Done.png";
import trainingImage from "../../../../../public/images/360_F_604704017_zHjlvfNLv06FIw2FulzbhwjOQeYUcGr3.jpg"; // Replace with a relevant image

export default function WhyChooseUsForTraining() {
  return (
    <div className="WhyChooseUs">
      <div className="trainig-div-2 fadeLeft">
        <Image className="trainig-img" src={trainingImage} alt="student training" />
      </div>
      <div className="div-1 pl-8 fadeRight">
        <span className="text-[#19FFDB] text-[1.37rem] font-medium mb-4">
          Why Choose Our Student Training Program
        </span>
        <h3 className="text-white text-[2.18rem] font-semibold">
          Empower Your Future with Real-World Skills.
        </h3>
        <p className="text-[#A39D9D] text-[1.2rem] font-light mt-6">
          Our training program is designed to equip students with industry-relevant skills, hands-on experience, and personalized guidance to help you succeed in todays competitive world.
        </p>
        <ul className="mt-6">
          <li className="flex items-center text-[#A39D9D] text-[1.2rem] font-light">
            <Image src={done} alt="done" className="mr-3" /> Practical, Hands-on Learning
          </li>
          <li className="flex items-center text-[#A39D9D] text-[1.2rem] font-light">
            <Image src={done} alt="done" className="mr-3" /> Expert Instructors with Real-World Experience
          </li>
          <li className="flex items-center text-[#A39D9D] text-[1.2rem] font-light">
            <Image src={done} alt="done" className="mr-3" /> Flexible Learning Schedule for Busy Students
          </li>
          <li className="flex items-center text-[#A39D9D] text-[1.2rem] font-light">
            <Image src={done} alt="done" className="mr-3" /> Industry-Recognized Certifications
          </li>
          <li className="flex items-center text-[#A39D9D] text-[1.2rem] font-light">
            <Image src={done} alt="done" className="mr-3" /> Career Guidance and Support
          </li>
        </ul>
      </div>
    </div>
  );
}
