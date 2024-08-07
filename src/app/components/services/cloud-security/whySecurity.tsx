import Image from "next/image";
import Infrastructure from "../../../../../public/icons/infrastructure.svg";
import Applications from "../../../../../public/icons/applications.svg";
import IAM from "../../../../../public/icons/IAM.svg";

export default function WhyCloudSecurity() {
  return (
    <div className="px-4 sm:px-[9rem] py-4 sm:py-[3rem]">
      <h2 className="text-white text-[2.18rem] font-semibold mt-3 mb-[-5rem] sm:mb-[1rem]">
        Why Cloud Security?
      </h2>
      <p className="text-[#A39D9D] text-[1.2rem] font-light mt-24 sm:mt-2 sm:mb-[0rem]">
        While the cloud offers unparalleled convenience, its shared nature
        brings unique security concerns. Access control gaps, unprotected
        storage, and misconfigurations create vulnerabilities attackers exploit.
        Traditional security solutions struggle to adapt to the dynamic cloud
        environment, leaving you exposed. Cloud security bridges this gap. Our
        expert team simulates real-world attacks to uncover weaknesses in your
        infrastructure, applications, IAM, and data security.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 p-4 sm:p-[3rem]">
        <div className="flex flex-col items-center justify-start w-full sm:w-96 h-70 rounded-lg bg-[#011c3c] px-4 pt-4">
          <div className="flex gap-3 items-center">
            <Image src={Infrastructure} alt="card" className="w-12 h-12" />
          </div>
          <h3 className="text-white text-[1.1rem] font-semibold mt-3">
            Infrastructure
          </h3>

          <p className="text-[#a39d9d] text-lg font-light leading-normal mt-3 mb-2">
            Evaluate the security of all cloud resources—networking, storage,
            virtual machines, and containers.
          </p>
        </div>

        <div className="flex flex-col items-center justify-start w-full sm:w-96 h-70 rounded-lg bg-[#011c3c] p-4">
          <div className="flex gap-3 items-center">
            <Image src={Applications} alt="card" className="w-12 h-12" />
          </div>
          <h3 className="text-white text-[1.1rem] font-semibold mt-3">
            Applications
          </h3>
          <p className="text-[#a39d9d] text-lg font-light leading-normal mt-3 mb-2">
            Identify logical errors and unsafe coding practices in your
            cloud-deployed mobile and web apps.
          </p>
        </div>

        <div className="flex flex-col items-center justify-start w-full sm:w-96 h-70 rounded-lg bg-[#011c3c] p-4">
          <div className="flex gap-3 items-center">
            <Image src={IAM} alt="card" className="w-12 h-12" />
          </div>
          <h3 className="text-white text-[1.1rem] text-center font-semibold mt-3">
            Identity and Access Management (IAM)
          </h3>
          <p className="text-[#a39d9d] text-lg font-light leading-normal mt-3 mb-2">
            Assess user credentials and access restrictions to ensure compliance
            with the least privilege concept.
          </p>
        </div>

        <div className="flex flex-col items-center justify-start w-full sm:w-96 h-70 rounded-lg bg-[#011c3c] p-4">
          <div className="flex gap-3 items-center">
            <Image src={IAM} alt="card" className="w-12 h-12" />
          </div>

          <h3 className="text-white text-[1.1rem] font-semibold mt-3">
            Data Security
          </h3>
          <p className="text-[#a39d9d] text-lg font-light leading-normal mt-3 mb-2">
            Examine data encryption and storage procedures to safeguard private
            data from unauthorized access.
          </p>
        </div>
      </div>
    </div>
  );
}
