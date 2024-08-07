import Image from "next/image";
import WebSecurity from "../../../../public/icons/web.png";
import CloudSecurity from "../../../../public/icons/cloud.png";
import APISecurity from "../../../../public/icons/APISecurity.png";

export default function Fundamental() {
  return (
    <div className="Services px-4 sm:px-[9rem] py-4 sm:py-[3rem]">
      <span className="text-[#19FFDB] text-[1.37rem] font-medium mb-8">
        Our Cultures
      </span>
      <h3 className="text-white text-[2.18rem] font-semibold mb-4">
        Our Fundamental Business
      </h3>
      <div className="flex flex-col sm:flex-row justify-between mt-10">
        <div className="bg-[#011c3c] w-full sm:w-[24rem] rounded-xl flex flex-col items-center justify-start px-[3rem] py-[1rem] mb-4 sm:mb-0">
          {/* <Image width={73} height={73} src={CloudSecurity} alt="Protection" /> */}
          <h3 className="text-white text-[2.18rem] font-semibold mt-3">
            Vision
          </h3>
          <p className="text-[#A39D9D] text-[1.2rem] font-light mt-4">
            Our vision is to create a safer digital world by providing
            innovative cybersecurity solutions that empower businesses to thrive
            securely.
          </p>
        </div>

        <div className="bg-[#011c3c] w-full sm:w-[24rem] rounded-xl flex flex-col items-center justify-start px-[3rem] py-[1rem] mb-4 sm:mb-0">
          {/* <Image width={73} height={73} src={WebSecurity} alt="Protection" /> */}
          <h3 className="text-white text-[2.18rem] font-semibold mt-3">
            Mission
          </h3>
          <p className="text-[#A39D9D] text-[1.2rem] font-light mt-4">
            Our mission is to safeguard businesses against cyber threats by
            offering cutting-edge security solutions, personalized support, and
            continuous innovation.
          </p>
        </div>

        <div className="bg-[#011c3c] w-full sm:w-[24rem] rounded-xl flex flex-col items-center justify-start px-[3rem] py-[1rem]">
          {/* <Image width={73} height={73} src={APISecurity} alt="Protection" /> */}
          <h3 className="text-white text-[2.18rem] font-semibold mt-3">
            Motto
          </h3>
          <p className="text-[#A39D9D] text-[1.2rem] font-light mt-4">
            Secure today, thrive tomorrow: Protecting businesses with innovative
            cybersecurity solutions, ensuring resilience and growth in an
            interconnected digital world.
          </p>
        </div>
      </div>
    </div>
  );
}
