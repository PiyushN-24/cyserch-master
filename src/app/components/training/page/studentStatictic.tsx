  import { FaUsers, FaChalkboardTeacher, FaCode, FaBook, FaAward, FaProjectDiagram } from 'react-icons/fa';

  export default function StudentStatistics() {
    return (
      <div className="text-center Industrys">
        <h2 className="text-white text-[2.10rem] sm:text-[2.10rem] mt-[4rem] sm:mt-[0rem] font-semibold fadeInUp">
          Trusted Over <span className="text-[#19FFDB]">700+</span> Students in
          the World
        </h2>
        <div className="Industrys-boxs bg-[#011C3C] gap-4 sm:gap-10 flex flex-wrap container p-7 rounded-xl items-center justify-center mt-10 fadeInUp">
          <div className="Industrys-card w-full sm:w-[10rem] flex flex-col justify-center items-center mb-4 sm:mb-0">
            <FaUsers size={50} className="text-white" />
            <span className="text-[white] text-[2rem] font-bold">700+</span>
            <span className="text-[#D9D9D9] text-[1rem] font-light">Students</span>
          </div>

          <div className="Industrys-card w-full sm:w-[10rem] flex flex-col justify-center items-center mb-4 sm:mb-0">
            <FaChalkboardTeacher size={50} className="text-white" />
            <span className="text-[white] text-[2rem] font-bold">15+</span>
            <span className="text-[#D9D9D9] text-[1rem] font-light">Teachers</span>
          </div>

          <div className="Industrys-card w-full sm:w-[10rem] flex flex-col justify-center items-center mb-4 sm:mb-0">
            <FaCode size={50} className="text-white" />
            <span className="text-[white] text-[2rem] font-bold">70+</span>
            <span className="text-[#D9D9D9] text-[1rem] font-light">Practical Labs</span>
          </div>

          <div className="Industrys-card w-full sm:w-[10rem] flex flex-col justify-center items-center mb-4 sm:mb-0">
            <FaBook size={50} className="text-white" />
            <span className="text-[white] text-[2rem] font-bold">10+</span>
            <span className="text-[#D9D9D9] text-[1rem] font-light">Courses</span>
          </div>

          <div className="Industrys-card w-full sm:w-[10rem] flex flex-col justify-center items-center mb-4 sm:mb-0">
            <FaAward size={50} className="text-white" />
            <span className="text-[white] text-[2rem] font-bold">50+</span>
            <span className="text-[#D9D9D9] text-[1rem] font-light">Certifications</span>
          </div>

          <div className="Industrys-card w-full sm:w-[10rem] flex flex-col justify-center items-center">
            <FaProjectDiagram size={50} className="text-white" />
            <span className="text-[white] text-[2rem] font-bold">100+</span>
            <span className="text-[#D9D9D9] text-[1rem] font-light">Projects</span>
          </div>
        </div>
      </div>
    );
  }
