import Image from "next/image";
import Infrastructure from "../../../../../public/icons/infrastructure.svg";
import Applications from "../../../../../public/icons/applications.svg";
import IAM from "../../../../../public/icons/IAM.svg";

export default function WhyCloudPenetrationTesting() {
  return (
    <div className="px-4 sm:px-[9rem] py-4 sm:py-[3rem]">
      <h2 className="text-white text-[2.18rem] font-semibold mt-3 mb-[-5rem] sm:mb-[1rem]">
        Key Areas of Cloud Security Focus
      </h2>
      <p className="text-[#A39D9D] text-[1.2rem] font-light mt-24 sm:mt-2 sm:mb-[0rem]">
        Cloud Penetration Testing is essential to identify and mitigate
        security risks in cloud environments before they are exploited. As more
        organizations move their critical operations to the cloud, new
        vulnerabilities emerge. From misconfigurations to access control flaws,
        cloud environments are dynamic and require proactive security measures.
        Penetration testing helps uncover these weaknesses by simulating real
        attacks, ensuring that your cloud infrastructure, applications, IAM, and
        data security are robust.
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
            Evaluate the security of all cloud resources, including networking,
            storage, virtual machines, and containers.
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
            Identify vulnerabilities such as logical errors and unsafe coding
            practices in cloud-based mobile and web applications.
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
            Evaluate user access controls and credentials to prevent
            unauthorized access and ensure proper adherence to the least
            privilege principle.
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
            Ensure that your data encryption methods and storage procedures are
            robust enough to protect sensitive information from unauthorized
            access or breaches.
          </p>
        </div>
      </div>
    </div>
  );
}
