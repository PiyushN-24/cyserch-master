import Image from "next/image";
import Icon1 from "../../../../../public/icons/analyze.svg";
import Applications from "../../../../../public/icons/applications.svg";
import IAM from "../../../../../public/icons/IAM.svg";
import group from "../../../../../public/icons/Mask-Group.svg";

export default function SASTOffers() {
  return (
    <div className="px-4 sm:px-[9rem] py-4 sm:py-[3rem]">
      <h2 className="text-white text-[2.18rem] font-semibold mt-3 mb-[-5rem] sm:mb-[1rem]">
        Our SAST Deliverables
      </h2>
      <div className="cards flex flex-col sm:flex-row gap-4 sm:gap-8 p-4 sm:p-[3rem]">
        <div className="flex flex-col items-center justify-start w-full sm:w-1/4 h-[27rem] border rounded-lg bg-[#011c3c] p-4">
          <div className="flex gap-3 items-center">
            <Image src={Icon1} alt="card" className="w-14 h-14" />
          </div>
          <h3 className="text-white text-[1.1rem] font-semibold mt-3">
            Comprehensive Code Review
          </h3>
          <p className="text-[#a39d9d] text-lg font-light leading-normal mt-3 mb-2">
            Receive an in-depth analysis of your source code to identify and address security flaws, ensuring robust protection against potential vulnerabilities.
          </p>
        </div>

        <div className="flex flex-col items-center justify-start w-full sm:w-1/4 h-[27rem] border rounded-lg bg-[#011c3c] p-4">
          <div className="flex gap-3 items-center">
            <Image src={Applications} alt="card" className="w-12 h-12" />
          </div>
          <h3 className="text-white text-[1.1rem] font-semibold mt-3">
            Automated Static Analysis
          </h3>
          <p className="text-[#a39d9d] text-lg font-light leading-normal mt-3 mb-2">
            Utilize automated tools to scan your code for known vulnerabilities and coding errors, providing rapid and consistent security analysis.
          </p>
        </div>

        <div className="flex flex-col items-center justify-start w-full sm:w-1/4 h-[27rem] border rounded-lg bg-[#011c3c] p-4">
          <div className="flex gap-3 items-center">
            <Image src={IAM} alt="card" className="w-12 h-12" />
          </div>
          <h3 className="text-white text-[1.1rem] font-semibold mt-3">
            Custom Security Rules
          </h3>
          <p className="text-[#a39d9d] text-lg font-light leading-normal mt-3 mb-2">
            Implement custom security rules tailored to your application's specific needs, ensuring a more precise and effective security assessment.
          </p>
        </div>

        <div className="flex flex-col items-center justify-start w-full sm:w-1/4 h-[27rem] border rounded-lg bg-[#011c3c] p-4">
          <div className="flex gap-3 items-center">
            <Image src={group} alt="card" className="w-12 h-12" />
          </div>
          <h3 className="text-white text-[1.1rem] font-semibold mt-3">
            Expert Remediation Support
          </h3>
          <p className="text-[#a39d9d] text-lg font-light leading-normal mt-3 mb-2">
            Access expert guidance on how to remediate identified vulnerabilities, with actionable recommendations and support throughout the implementation process.
          </p>
        </div>
      </div>

      <div className="cards flex flex-col sm:flex-row gap-4 sm:gap-8 p-4 sm:p-[3rem]">
        <div className="flex flex-col items-center justify-start w-full sm:w-96 h-[22rem] border rounded-lg bg-[#011c3c] p-4">
          <div className="flex gap-3 items-center">
            <Image src={Icon1} alt="card" className="w-14 h-14" />
          </div>
          <h3 className="text-white text-[1.1rem] font-semibold mt-3">
            Full Codebase Evaluation
          </h3>
          <p className="text-[#a39d9d] text-lg font-light leading-normal mt-3 mb-2">
            Conduct a thorough evaluation of your entire codebase to uncover security issues across all components and layers of the application.
          </p>
        </div>

        <div className="flex flex-col items-center justify-start w-full sm:w-96 h-[22rem] border rounded-lg bg-[#011c3c] p-4">
          <div className="flex gap-3 items-center">
            <Image src={Applications} alt="card" className="w-12 h-12" />
          </div>
          <h3 className="text-white text-[1.1rem] font-semibold mt-3">
            Detailed Findings Report
          </h3>
          <p className="text-[#a39d9d] text-lg font-light leading-normal mt-3 mb-2">
            Provide a comprehensive report detailing each identified vulnerability, its impact, and recommendations for remediation, making it easier for developers to address issues.
          </p>
        </div>

        <div className="flex flex-col items-center justify-start w-full sm:w-96 h-[22rem] border rounded-lg bg-[#011c3c] p-4">
          <div className="flex gap-3 items-center">
            <Image src={IAM} alt="card" className="w-12 h-12" />
          </div>
          <h3 className="text-white text-[1.1rem] font-semibold mt-3">
            Executive Summary
          </h3>
          <p className="text-[#a39d9d] text-lg font-light leading-normal mt-3 mb-2">
            Present a high-level summary of findings to executives, highlighting critical issues and overall security posture, ensuring they are informed about key risks and remediation efforts.
          </p>
        </div>

        <div className="flex flex-col items-center justify-start w-full sm:w-96 h-[22rem] border rounded-lg bg-[#011c3c] p-4">
          <div className="flex gap-3 items-center">
            <Image src={group} alt="card" className="w-12 h-12" />
          </div>
          <h3 className="text-white text-[1.1rem] font-semibold mt-3">
            Ongoing Security Guidance
          </h3>
          <p className="text-[#a39d9d] text-lg font-light leading-normal mt-3 mb-2">
            Receive continuous support and guidance on integrating security best practices into your development workflow, ensuring long-term protection and code quality.
          </p>
        </div>
      </div>
    </div>
  );
}
