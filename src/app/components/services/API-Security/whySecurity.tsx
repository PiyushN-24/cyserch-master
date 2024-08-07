import Image from "next/image";
import Icon1 from "../../../../../public/icons/analyze.svg";
import Applications from "../../../../../public/icons/applications.svg";
import IAM from "../../../../../public/icons/IAM.svg";
import group from "../../../../../public/icons/Mask-Group.svg";

export default function WhyCloudSecurity() {
  return (
    <div className="bg-[#011C3C] px-4 sm:px-[9rem] py-4 sm:py-[3rem]">
      <h2 className="text-white text-[2.18rem] font-semibold mt-3 mb-[-5rem] sm:mb-[1rem]">
        Our deliverables
      </h2>
      <div className="cards flex flex-col sm:flex-row gap-4 sm:gap-8 p-4 sm:p-[3rem]">
        <div className="flex flex-col items-center justify-start w-full sm:w-1/4 h-[27rem] border rounded-lg bg-[#011c3c] p-4">
          <div className="flex gap-3 items-center">
            <Image src={Icon1} alt="card" className="w-14 h-14" />
          </div>
          <h3 className="text-white text-[1.1rem] font-semibold mt-3">
            Comprehensive Vulnerability Assessment Report
          </h3>
          <p className="text-[#a39d9d] text-lg font-light leading-normal mt-3 mb-2">
           Receive a detailed report categorizing vulnerabilities by severity with actionable recommendations for remediation, ensuring every security gap is addressed effectively.
          </p>
        </div>

        <div className="flex flex-col items-center justify-start w-full sm:w-1/4 h-[27rem] border rounded-lg bg-[#011c3c] p-4">
          <div className="flex gap-3 items-center">
            <Image src={Applications} alt="card" className="w-12 h-12" />
          </div>
          <h3 className="text-white text-[1.1rem] font-semibold mt-3">
            Cost-Effective Solutions
          </h3>
          <p className="text-[#a39d9d] text-lg font-light leading-normal mt-3 mb-2">
            Receive cost-effective recommendations for addressing vulnerabilities, ensuring that security measures align with your budget constraints while maximizing protection against cyber threats.
          </p>
        </div>

        <div className="flex flex-col items-center justify-start w-full sm:w-1/4 h-[27rem] border rounded-lg bg-[#011c3c] p-4">
          <div className="flex gap-3 items-center">
            <Image src={IAM} alt="card" className="w-12 h-12" />
          </div>
          <h3 className="text-white text-[1.1rem] font-semibold mt-3">
            Customized Service Packages
          </h3>
          <p className="text-[#a39d9d] text-lg font-light leading-normal mt-3 mb-2">
            Choose from a range of service packages tailored to your organizations needs and budget, ensuring that you get the most value out of your investment in security testing and assessment
          </p>
        </div>

        <div className="flex flex-col items-center justify-start w-full sm:w-1/4 h-[27rem] border rounded-lg bg-[#011c3c] p-4">
          <div className="flex gap-3 items-center">
            <Image src={group} alt="card" className="w-12 h-12" />
          </div>
          <h3 className="text-white text-[1.1rem] font-semibold mt-3">
            Dedicated Support Team
          </h3>
          <p className="text-[#a39d9d] text-lg font-light leading-normal mt-3 mb-2">
            Access a dedicated team of security experts for ongoing support and consultation, providing assistance with implementation, troubleshooting, and any security-related queries that arise post-assessment
          </p>
        </div>




      </div>

      <div className="cards flex flex-col sm:flex-row gap-4 sm:gap-8 p-4 sm:p-[3rem]">
        <div className="flex flex-col items-center justify-start w-full sm:w-96 h-[22rem] border rounded-lg bg-[#011c3c] p-4">
          <div className="flex gap-3 items-center">
            <Image src={Icon1} alt="card" className="w-14 h-14" />
          </div>
          <h3 className="text-white text-[1.1rem] font-semibold mt-3">
            Full-Spectrum Evaluation
          </h3>

          <p className="text-[#a39d9d] text-lg font-light leading-normal mt-3 mb-2">
            Ensure comprehensive security across all operational aspects of the
            API to prevent unauthorized access and data breaches.
          </p>
        </div>

        <div className="flex flex-col items-center justify-start w-full sm:w-96 h-[22rem] border rounded-lg bg-[#011c3c] p-4">
          <div className="flex gap-3 items-center">
            <Image src={Applications} alt="card" className="w-12 h-12" />
          </div>
          <h3 className="text-white text-[1.1rem] font-semibold mt-3">
            Detailed Analysis Report
          </h3>
          <p className="text-[#a39d9d] text-lg font-light leading-normal mt-3 mb-2">
            Provide developers with a developer-friendly report that details
            each vulnerability, its potential impact, and suggested
            remediations.
          </p>
        </div>

        <div className="flex flex-col items-center justify-start w-full sm:w-96 h-[22rem] border rounded-lg bg-[#011c3c] p-4">
          <div className="flex gap-3 items-center">
            <Image src={IAM} alt="card" className="w-12 h-12" />
          </div>
          <h3 className="text-white text-[1.1rem] font-semibold mt-3">
            Leadership Summary
          </h3>
          <p className="text-[#a39d9d] text-lg font-light leading-normal mt-3 mb-2">
            Enable executives to understand how the application stands against
            real-time attackers and highlight key areas needing attention.
          </p>
        </div>

        <div className="flex flex-col items-center justify-start w-full sm:w-96 h-[22rem] border rounded-lg bg-[#011c3c] p-4">
          <div className="flex gap-3 items-center">
            <Image src={group} alt="card" className="w-12 h-12" />
          </div>

          <h3 className="text-white text-[1.1rem] font-semibold mt-3">
            Ongoing Assistance
          </h3>
          <p className="text-[#a39d9d] text-lg font-light leading-normal mt-3 mb-2">
            Assist the development team in fixing vulnerabilities and
            implementing best coding practices to prevent future security
            issues.
          </p>
        </div>
      </div>


    </div>
  );
}
