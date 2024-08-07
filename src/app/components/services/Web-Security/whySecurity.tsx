import Image from "next/image";
import Applications from "../../../../../public/icons/applications.svg";
import IAM from "../../../../../public/icons/IAM.svg";

export default function WhyCloudSecurity() {
  return (
    <div className="px-4 sm:px-[9rem] py-4 sm:py-[3rem]">
      <h2 className="text-white text-[2.18rem] font-semibold mt-3 sm:mb-[1rem]">
        Everything is taken care of for your application.
      </h2>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 p-4 sm:p-[3rem]">
        <div className="flex flex-col items-center justify-start w-full sm:w-1/3 h-[25rem] sm:h-[22rem] rounded-lg bg-[#011c3c] p-4">
          <div className="flex gap-3 items-center">
            <Image src={Applications} alt="card" className="w-12 h-12" />
          </div>
          <h3 className="text-white text-[1.1rem] font-semibold mt-3">
            White Box Testing
          </h3>
          <p className="text-[#a39d9d] text-lg font-light leading-normal mt-3 mb-2">
            Gain insights into your applications inner workings through
            thorough examination by our White Box Testing. Our experts
            scrutinize the source code, identifying and resolving
            vulnerabilities such as injection errors or insecure configurations.
          </p>
        </div>

        <div className="flex flex-col items-center justify-start w-full sm:w-1/3 h-[25rem] sm:h-[22rem] rounded-lg bg-[#011c3c] p-4">
          <div className="flex gap-3 items-center">
            <Image src={IAM} alt="card" className="w-12 h-12" />
          </div>
          <h3 className="text-white text-[1.1rem] font-semibold mt-3">
            Grey Box Testing
          </h3>
          <p className="text-[#a39d9d] text-lg font-light leading-normal mt-3 mb-2">
            Achieve a balanced perspective with Grey Box Testing, where our team
            is provided partial application details. By simulating semi-informed
            attacks, we assess your systems resilience against insider threats
            effectively.
          </p>
        </div>

        <div className="flex flex-col items-center justify-start w-full sm:w-1/3 h-[25rem] sm:h-[22rem] rounded-lg bg-[#011c3c] p-4">
          <div className="flex gap-3 items-center">
            <Image src={IAM} alt="card" className="w-12 h-12" />
          </div>

          <h3 className="text-white text-[1.1rem] font-semibold mt-3">
            Black Box Testing
          </h3>
          <p className="text-[#a39d9d] text-lg font-light leading-normal mt-3 mb-2">
            Simulate real-world cyberattacks with Black Box Testing, conducted
            without prior knowledge of your applications core operations.
            Mimicking the methods of potential cybercriminals, we identify and
            address vulnerabilities that could lead to a real breach scenario.
          </p>
        </div>
      </div>
    </div>
  );
}
