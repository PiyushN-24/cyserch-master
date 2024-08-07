import Image from "next/image";
import Students from "../../../../../public/icons/icons8-students-64.png";
import Teacher from "../../../../../public/icons/icons8-teacher-50.png";
import Code from "../../../../../public/icons/Code.png";
import Course from "../../../../../public/icons/icons8-course-50.png";
import Website from "../../../../../public/icons/Website.png";
import HIPS from "../../../../../public/icons/HIPS.png";

export default function StudentStatictics() {
  return (
    <div className="text-center Industrys">
      <h2 className="text-white text-[2.10rem] sm:text-[2.10rem] mt-[4rem] sm:mt-[0rem] font-semibold fadeInUp">
        Trusted Over <span className="text-[#19FFDB]">700+</span> Students in
        the World
      </h2>
      <div className="Industrys-boxs bg-[#011C3C] gap-4 sm:gap-10 flex flex-wrap container p-7 rounded-xl items-center justify-center mt-10 fadeInUp">
        <div className="Industrys-card w-full sm:w-[10rem] flex flex-col justify-center items-center mb-4 sm:mb-0">
          <Image width={50} height={50} src={Students} alt="industry1" />
          <span className="text-[white] text-[2rem] font-bold ">700+</span>
          <span className="text-[#D9D9D9] text-[1rem] font-light">
            Students
          </span>
        </div>

        <div className="Industrys-card w-full sm:w-[10rem] flex flex-col justify-center items-center mb-4 sm:mb-0">
          <Image width={50} height={50} src={Teacher} alt="industry1" />
          <span className="text-[white] text-[2rem] font-bold ">15+</span>
          <span className="text-[#D9D9D9] text-[1rem] font-light">
            Teachers
          </span>
        </div>

        <div className="Industrys-card w-full sm:w-[10rem] flex flex-col justify-center items-center mb-4 sm:mb-0">
          <Image width={50} height={50} src={Code} alt="industry1" />
          <span className="text-[white] text-[2rem] font-bold ">70+</span>
          <span className="text-[#D9D9D9] text-[1rem] font-light">
            Practical lab
          </span>
        </div>

        <div className="Industrys-card w-full sm:w-[10rem] flex flex-col justify-center items-center">
          <Image width={60} height={60} src={Course} alt="industry1" />
          <span className="text-[white] text-[2rem] font-bold ">10+</span>
          <span className="text-[#D9D9D9] text-[1rem] font-light">
            Course
          </span>
        </div>
      </div>
    </div>
  );
}