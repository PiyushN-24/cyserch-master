export default function CourseSecondSection() {
  return (
    <div className="flex flex-col md:flex-row bg-[#011C3C] justify-between mt-[3rem] px-4 md:px-[15rem] py-[3rem] mb-4 text-white text-sm sm:text-base md:text-lg font-light mt-2">
      <div className="flex flex-col justify-center items-center mb-4 md:mb-0 p-4 md:p-0">
        <span className="font-white text-[1.3rem] md:text-[1.5rem] font-semibold leading-tight">
        Limited Time Offer
        </span>
        <span className="text-[#A39D9D] text-[1rem] md:text-[1.2rem] font-light leading-normal">
          Expiring soon
        </span>
      </div>

      <div className="flex flex-col justify-center items-center mb-4 md:mb-0 p-4 md:p-0">
        <span className="font-white text-[1.3rem] md:text-[1.5rem] font-semibold leading-tight">
          Program Duration
        </span>
        <span className="text-[#A39D9D] text-[1rem] md:text-[1.2rem] font-light leading-normal">
        Flexible
        </span>
      </div>

      <div className="flex flex-col justify-center items-center p-4 md:p-0">
        <span className="font-white text-[1.3rem] md:text-[1.5rem] font-semibold leading-tight">
          Learning Format
        </span>
        <span className="text-[#A39D9D] text-[1rem] md:text-[1.2rem] font-light leading-normal">
        Flexible learning: offline or online
        </span>
      </div>
    </div>
  );
}