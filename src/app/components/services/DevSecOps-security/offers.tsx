import Image from "next/image";
import SecurityPlan from "../../../../../public/icons/analyze.svg";
import ToolsRecommendations from "../../../../../public/icons/applications.svg";
import DevOpsRoadmap from "../../../../../public/icons/IAM.svg";
import DedicatedSupport from "../../../../../public/icons/Mask-Group.svg";
import HolisticAssessment from "../../../../../public/icons/analyze.svg";
import MetricsReport from "../../../../../public/icons/applications.svg";
import ExecutiveSummary from "../../../../../public/icons/IAM.svg";
import ContinuousSupport from "../../../../../public/icons/Mask-Group.svg";

export default function DevSecOpsOffers() {
  return (
    <div className="px-4 sm:px-[9rem] py-4 sm:py-[3rem]">
      <h2 className="text-white text-[2.18rem] font-semibold mt-3 mb-[-5rem] sm:mb-[1rem]">
        Our Deliverables
      </h2>
      <div className="cards flex flex-col sm:flex-row gap-4 sm:gap-8 p-4 sm:p-[3rem]">
        <div className="flex flex-col items-center justify-start w-full sm:w-1/4 h-[27rem] border rounded-lg bg-[#011c3c] p-4">
          <div className="flex gap-3 items-center">
            <Image src={SecurityPlan} alt="card" className="w-14 h-14" />
          </div>
          <h3 className="text-white text-[1.1rem] font-semibold mt-3">
            Comprehensive Security Integration Plan
          </h3>
          <p className="text-[#a39d9d] text-lg font-light leading-normal mt-3 mb-2">
            Receive a detailed plan for integrating security into your DevSecOps pipeline, outlining best practices and tools for continuous security throughout the development lifecycle.
          </p>
        </div>

        <div className="flex flex-col items-center justify-start w-full sm:w-1/4 h-[27rem] border rounded-lg bg-[#011c3c] p-4">
          <div className="flex gap-3 items-center">
            <Image src={ToolsRecommendations} alt="card" className="w-12 h-12" />
          </div>
          <h3 className="text-white text-[1.1rem] font-semibold mt-3">
            Automated Security Tools Recommendations
          </h3>
          <p className="text-[#a39d9d] text-lg font-light leading-normal mt-3 mb-2">
            Get tailored recommendations for implementing automated security tools that fit your development and deployment processes, ensuring continuous scanning.
          </p>
        </div>

        <div className="flex flex-col items-center justify-start w-full sm:w-1/4 h-[27rem] border rounded-lg bg-[#011c3c] p-4">
          <div className="flex gap-3 items-center">
            <Image src={DevOpsRoadmap} alt="card" className="w-12 h-12" />
          </div>
          <h3 className="text-white text-[1.1rem] font-semibold mt-3">
            Custom DevSecOps Roadmap
          </h3>
          <p className="text-[#a39d9d] text-lg font-light leading-normal mt-3 mb-2">
            Choose from various roadmap options designed to align with your organizations specific needs and budget, ensuring a strategic approach to embedding security into your DevOps practices.
          </p>
        </div>

        <div className="flex flex-col items-center justify-start w-full sm:w-1/4 h-[27rem] border rounded-lg bg-[#011c3c] p-4">
          <div className="flex gap-3 items-center">
            <Image src={DedicatedSupport} alt="card" className="w-12 h-12" />
          </div>
          <h3 className="text-white text-[1.1rem] font-semibold mt-3">
            Dedicated DevSecOps Support
          </h3>
          <p className="text-[#a39d9d] text-lg font-light leading-normal mt-3 mb-2">
            Access a team of DevSecOps experts for ongoing support and guidance, including assistance with tool integration, process optimization, and resolving any security-related challenges.
          </p>
        </div>
      </div>

      <div className="cards flex flex-col sm:flex-row gap-4 sm:gap-8 p-4 sm:p-[3rem]">
        <div className="flex flex-col items-center justify-start w-full sm:w-96 h-[22rem] border rounded-lg bg-[#011c3c] p-4">
          <div className="flex gap-3 items-center">
            <Image src={HolisticAssessment} alt="card" className="w-12 h-12" />
          </div>
          <h3 className="text-white text-[1.1rem] font-semibold mt-3">
            Holistic Security Assessment
          </h3>
          <p className="text-[#a39d9d] text-lg font-light leading-normal mt-3 mb-2">
            Ensure a thorough evaluation of your DevSecOps pipeline, identifying potential security gaps across all stages of development.
          </p>
        </div>

        <div className="flex flex-col items-center justify-start w-full sm:w-96 h-[22rem] border rounded-lg bg-[#011c3c] p-4">
          <div className="flex gap-3 items-center">
            <Image src={MetricsReport} alt="card" className="w-12 h-12" />
          </div>
          <h3 className="text-white text-[1.1rem] font-semibold mt-3">
            In-Depth Security Metrics Report
          </h3>
          <p className="text-[#a39d9d] text-lg font-light leading-normal mt-3 mb-2">
            Provide detailed metrics and analysis on your security posture, including vulnerability statistics, threat detection rates, and recommendations.
          </p>
        </div>

        <div className="flex flex-col items-center justify-start w-full sm:w-96 h-[22rem] border rounded-lg bg-[#011c3c] p-4">
          <div className="flex gap-3 items-center">
            <Image src={ExecutiveSummary} alt="card" className="w-12 h-12" />
          </div>
          <h3 className="text-white text-[1.1rem] font-semibold mt-3">
            Executive Summary
          </h3>
          <p className="text-[#a39d9d] text-lg font-light leading-normal mt-3 mb-2">
            Deliver a high-level overview for executives, highlighting the security performance of your DevSecOps practices, key areas of concern, and strategic.
          </p>
        </div>

        <div className="flex flex-col items-center justify-start w-full sm:w-96 h-[22rem] border rounded-lg bg-[#011c3c] p-4">
          <div className="flex gap-3 items-center">
            <Image src={ContinuousSupport} alt="card" className="w-12 h-12" />
          </div>
          <h3 className="text-white text-[1.1rem] font-semibold mt-3">
            Continuous Improvement Support
          </h3>
          <p className="text-[#a39d9d] text-lg font-light leading-normal mt-3 mb-2">
            Assist your team in refining DevSecOps practices, implementing security improvements, and adapting to emerging threats to maintain a security.
          </p>
        </div>
      </div>
    </div>
  );
}
