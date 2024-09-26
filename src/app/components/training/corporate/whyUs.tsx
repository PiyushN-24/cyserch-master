import Image from "next/image";
import corporateTrainingImage from "../../../../../public/images/360_F_604704017_zHjlvfNLv06FIw2FulzbhwjOQeYUcGr3.jpg";
import done from "../../../../../public/icons/Done.png";

export default function CorporateTraining() {
  return (
    <div className="CorporateTraining flex flex-wrap items-center">
      <div className="training-div-2 fadeLeft flex-shrink-0 w-full sm:w-1/2 p-4">
        <div className="relative w-full h-0" style={{ paddingTop: '56.25%' }}>
          <Image
            className="absolute inset-0 w-full h-full object-cover"
            src={corporateTrainingImage}
            alt="Corporate Training"
            layout="fill"
          />
        </div>
      </div>
      <div className="div-1 pl-8 w-full sm:w-1/2 p-4 fadeRight">
        <span className="text-[#19FFDB] text-[1.37rem] font-medium mb-4 block">
          Why Our Corporate Training?
        </span>
        <h3 className="text-white text-[2.18rem] font-semibold">
          Elevate Your Teams Skills with Our Expert Training Programs
        </h3>
        <p className="text-[#A39D9D] text-[1.2rem] font-light mt-6">
          Our corporate training solutions are designed to enhance team skills and foster growth, providing engaging and practical content tailored to meet your organization’s needs.
        </p>
        <ul className="mt-6 list-disc pl-5">
          <li className="flex items-center text-[#A39D9D] text-[1.2rem] font-light mb-2">
            <Image src={done} alt="done" className="mr-3" width={20} height={20} /> Customized Training Solutions
          </li>
          <li className="flex items-center text-[#A39D9D] text-[1.2rem] font-light mb-2">
            <Image src={done} alt="done" className="mr-3" width={20} height={20} /> Interactive Workshops and Seminars
          </li>
          <li className="flex items-center text-[#A39D9D] text-[1.2rem] font-light mb-2">
            <Image src={done} alt="done" className="mr-3" width={20} height={20} /> Expert Trainers with Industry Experience
          </li>
          <li className="flex items-center text-[#A39D9D] text-[1.2rem] font-light mb-2">
            <Image src={done} alt="done" className="mr-3" width={20} height={20} /> Comprehensive Certification Programs
          </li>
        </ul>
      </div>
    </div>
  );
}
