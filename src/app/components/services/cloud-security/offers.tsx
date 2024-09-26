import Image from "next/image";
import Icon1 from "../../../../../public/icons/analyze.svg";
import Applications from "../../../../../public/icons/applications.svg";
import IAM from "../../../../../public/icons/IAM.svg";
import group from "../../../../../public/icons/Mask-Group.svg";

export default function Icon5CloudPenetrationTesting() {
  return (
    <div className="bg-[#011C3C] px-4 sm:px-8 lg:px-16 py-4 sm:py-8">
      <h2 className="text-white text-xl sm:text-2xl lg:text-3xl font-semibold mt-3 mb-6 sm:mb-8">
        Our Cloud Penetration Testing Deliverables
      </h2>
      <div className="cards flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 p-4 sm:p-6 lg:p-8">
        <div className="flex flex-col items-center justify-start w-full sm:w-1/2 md:w-1/3 lg:w-1/4 min-h-[24rem] border rounded-lg bg-[#011c3c] p-4">
          <div className="flex gap-3 items-center">
            <Image src={Icon1} alt="Comprehensive Vulnerability Assessment" className="w-12 h-12 sm:w-14 sm:h-14" />
          </div>
          <h3 className="text-white text-lg sm:text-xl font-semibold mt-3">
            Comprehensive Vulnerability Assessment
          </h3>
          <p className="text-[#a39d9d] text-base sm:text-lg font-light leading-relaxed mt-3">
            Receive a thorough assessment of your cloud infrastructure, identifying vulnerabilities and providing actionable recommendations for remediation to ensure robust security.
          </p>
        </div>

        <div className="flex flex-col items-center justify-start w-full sm:w-1/2 md:w-1/3 lg:w-1/4 min-h-[24rem] border rounded-lg bg-[#011c3c] p-4">
          <div className="flex gap-3 items-center">
            <Image src={Applications} alt="Cost-Effective Solutions" className="w-12 h-12 sm:w-14 sm:h-14" />
          </div>
          <h3 className="text-white text-lg sm:text-xl font-semibold mt-3">
            Cost-Effective Solutions
          </h3>
          <p className="text-[#a39d9d] text-base sm:text-lg font-light leading-relaxed mt-3">
            Receive tailored recommendations that align with your budget while enhancing your cloud security posture and protecting against emerging threats.
          </p>
        </div>

        <div className="flex flex-col items-center justify-start w-full sm:w-1/2 md:w-1/3 lg:w-1/4 min-h-[24rem] border rounded-lg bg-[#011c3c] p-4">
          <div className="flex gap-3 items-center">
            <Image src={IAM} alt="Customized Service Packages" className="w-12 h-12 sm:w-14 sm:h-14" />
          </div>
          <h3 className="text-white text-lg sm:text-xl font-semibold mt-3">
            Customized Service Packages
          </h3>
          <p className="text-[#a39d9d] text-base sm:text-lg font-light leading-relaxed mt-3">
            Select from various service packages specifically designed for cloud environments, ensuring that the solutions meet your organization’s unique needs.
          </p>
        </div>

        <div className="flex flex-col items-center justify-start w-full sm:w-1/2 md:w-1/3 lg:w-1/4 min-h-[24rem] border rounded-lg bg-[#011c3c] p-4">
          <div className="flex gap-3 items-center">
            <Image src={group} alt="Dedicated Support Team" className="w-12 h-12 sm:w-14 sm:h-14" />
          </div>
          <h3 className="text-white text-lg sm:text-xl font-semibold mt-3">
            Dedicated Support Team
          </h3>
          <p className="text-[#a39d9d] text-base sm:text-lg font-light leading-relaxed mt-3">
            Access a dedicated team of cloud security experts for continuous support, helping with implementation, troubleshooting, and addressing any security concerns post-assessment.
          </p>
        </div>
      </div>

      <div className="cards flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 p-4 sm:p-6 lg:p-8">
        <div className="flex flex-col items-center justify-start w-full sm:w-1/2 md:w-1/3 lg:w-1/4 min-h-[22rem] border rounded-lg bg-[#011c3c] p-4">
          <div className="flex gap-3 items-center">
            <Image src={Icon1} alt="Full-Spectrum Cloud Evaluation" className="w-12 h-12 sm:w-14 sm:h-14" />
          </div>
          <h3 className="text-white text-lg sm:text-xl font-semibold mt-3">
            Full-Spectrum Cloud Evaluation
          </h3>
          <p className="text-[#a39d9d] text-base sm:text-lg font-light leading-relaxed mt-3">
            Comprehensive evaluation of all aspects of your cloud environment to prevent unauthorized access and data breaches.
          </p>
        </div>

        <div className="flex flex-col items-center justify-start w-full sm:w-1/2 md:w-1/3 lg:w-1/4 min-h-[22rem] border rounded-lg bg-[#011c3c] p-4">
          <div className="flex gap-3 items-center">
            <Image src={Applications} alt="Detailed Cloud Analysis Report" className="w-12 h-12 sm:w-14 sm:h-14" />
          </div>
          <h3 className="text-white text-lg sm:text-xl font-semibold mt-3">
            Detailed Cloud Analysis Report
          </h3>
          <p className="text-[#a39d9d] text-base sm:text-lg font-light leading-relaxed mt-3">
            A developer-friendly report detailing each vulnerability found in your cloud infrastructure, its potential impact, and recommended remediations.
          </p>
        </div>

        <div className="flex flex-col items-center justify-start w-full sm:w-1/2 md:w-1/3 lg:w-1/4 min-h-[22rem] border rounded-lg bg-[#011c3c] p-4">
          <div className="flex gap-3 items-center">
            <Image src={IAM} alt="Leadership Summary" className="w-12 h-12 sm:w-14 sm:h-14" />
          </div>
          <h3 className="text-white text-lg sm:text-xl font-semibold mt-3">
            Leadership Summary
          </h3>
          <p className="text-[#a39d9d] text-base sm:text-lg font-light leading-relaxed mt-3">
            A summary for executives highlighting the cloud security posture and key areas needing attention based on the assessment.
          </p>
        </div>

        <div className="flex flex-col items-center justify-start w-full sm:w-1/2 md:w-1/3 lg:w-1/4 min-h-[22rem] border rounded-lg bg-[#011c3c] p-4">
          <div className="flex gap-3 items-center">
            <Image src={group} alt="Ongoing Cloud Security Assistance" className="w-12 h-12 sm:w-14 sm:h-14" />
          </div>
          <h3 className="text-white text-lg sm:text-xl font-semibold mt-3">
            Ongoing Cloud Security Assistance
          </h3>
          <p className="text-[#a39d9d] text-base sm:text-lg font-light leading-relaxed mt-3">
            Support your team in addressing vulnerabilities and implementing best practices for maintaining robust cloud security.
          </p>
        </div>
      </div>
    </div>
  );
}
