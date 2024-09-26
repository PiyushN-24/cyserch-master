import { FaUserGraduate, FaChalkboardTeacher, FaCode, FaBook, FaDesktop } from 'react-icons/fa';

export default function CorporateTrainingStatistics() {
  return (
    <div className="text-center Industrys">
      <h2 className="text-white text-[2.10rem] sm:text-[2.10rem] mt-[4rem] sm:mt-[0rem] font-semibold fadeInUp">
        Trusted by Over <span className="text-[#19FFDB]">700+</span> Clients
      </h2>
      <div className="Industrys-boxs bg-[#011C3C] gap-4 sm:gap-10 flex flex-wrap container p-7 rounded-xl items-center justify-center mt-10 fadeInUp">
        <div className="Industrys-card w-full sm:w-[10rem] flex flex-col justify-center items-center mb-4 sm:mb-0">
          <FaUserGraduate size={50} className="text-white" />
          <span className="text-[white] text-[2rem] font-bold">70+</span>
          <span className="text-[#D9D9D9] text-[1rem] font-light">
            Clients
          </span>
        </div>

        <div className="Industrys-card w-full sm:w-[10rem] flex flex-col justify-center items-center mb-4 sm:mb-0">
          <FaChalkboardTeacher size={50} className="text-white" />
          <span className="text-[white] text-[2rem] font-bold">15+</span>
          <span className="text-[#D9D9D9] text-[1rem] font-light">
            Trainers
          </span>
        </div>

        <div className="Industrys-card w-full sm:w-[10rem] flex flex-col justify-center items-center mb-4 sm:mb-0">
          <FaCode size={50} className="text-white" />
          <span className="text-[white] text-[2rem] font-bold">70+</span>
          <span className="text-[#D9D9D9] text-[1rem] font-light">
            Lab Sessions
          </span>
        </div>

        <div className="Statistics-card w-full sm:w-[10rem] flex flex-col justify-center items-center">
          <FaBook size={60} className="text-white" />
          <span className="text-[white] text-[2rem] font-bold">10+</span>
          <span className="text-[#D9D9D9] text-[1rem] font-light">
            Courses
          </span>
        </div>
        
        <div className="Statistics-card w-full sm:w-[10rem] flex flex-col justify-center items-center">
          <FaDesktop size={50} className="text-white" />
          <span className="text-[white] text-[2rem] font-bold">20+</span>
          <span className="text-[#D9D9D9] text-[1rem] font-light">
            Tools
          </span>
        </div>
      </div>
    </div>
  );
}
