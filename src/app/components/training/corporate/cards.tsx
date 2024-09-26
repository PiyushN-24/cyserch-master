import { FaChalkboardTeacher, FaRegLightbulb, FaVideo } from 'react-icons/fa';

export default function CorporateTrainingCards() {
  return (
    <div className="cards fadeInUp grid grid-cols-1 sm:grid-cols-3 gap-6">
      <div className="card flex flex-col items-center justify-center p-6 bg-[#2D2D2D] rounded-lg h-[350px]">
        <div className="flex items-center justify-center mb-4">
          <FaChalkboardTeacher size={60} className="text-white" />
        </div>
        <h3 className="text-white text-[1.4rem] font-semibold mb-2 text-center">
          Expert Trainers
        </h3>
        <p className="card-description text-[#A39D9D] text-[1rem] font-light text-center">
          Benefit from the expertise of our trainers who bring real-world experience to the table. They provide practical knowledge and insights that are tailored to your team’s needs, ensuring effective learning and application.
        </p>
      </div>

      <div className="card flex flex-col items-center justify-center p-6 bg-[#2D2D2D] rounded-lg h-[350px]">
        <div className="flex items-center justify-center mb-4">
          <FaRegLightbulb size={60} className="text-white" />
        </div>
        <h3 className="text-white text-[1.4rem] font-semibold mb-2 text-center">
          Innovative Solutions
        </h3>
        <p className="card-description text-[#A39D9D] text-[1rem] font-light text-center">
          Explore innovative training solutions that address your unique business challenges. Our approach integrates the latest methodologies and tools to foster a dynamic and engaging learning environment.
        </p>
      </div>

      <div className="card flex flex-col items-center justify-center p-6 bg-[#2D2D2D] rounded-lg h-[350px]">
        <div className="flex items-center justify-center mb-4">
          <FaVideo size={60} className="text-white" />
        </div>
        <h3 className="text-white text-[1.4rem] font-semibold mb-2 text-center">
          On-Demand Videos
        </h3>
        <p className="card-description text-[#A39D9D] text-[1rem] font-light text-center">
          Access a library of on-demand video tutorials designed to fit your schedule. Our content covers a wide range of topics, allowing you to learn at your own pace and revisit material as needed.
        </p>
      </div>
    </div>
  );
}
