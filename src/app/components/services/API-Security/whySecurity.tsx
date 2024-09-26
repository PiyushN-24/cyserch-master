import Image from "next/image";
import Icon1 from "../../../../../public/icons/analyze.svg";
import Applications from "../../../../../public/icons/applications.svg";
import IAM from "../../../../../public/icons/IAM.svg";
import group from "../../../../../public/icons/Mask-Group.svg";

export default function WhyCloudSecurity() {
  return (
    <div className="bg-[#011C3C] px-4 sm:px-6 md:px-8 lg:px-[4rem] xl:px-[6rem] py-4 sm:py-6 lg:py-[3rem]  overflow-hidden">
      <h2 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-3 mb-6 sm:mb-4 lg:mb-6">
        Our API Penetration Testing Deliverables
      </h2>
      <div className="cards flex flex-col gap-4 sm:gap-6 md:flex-row md:gap-6 lg:gap-8 p-4 sm:p-6 lg:p-[3rem] overflow-hidden">
        {/* Card 1 */}
        <div className="flex flex-col items-center text-center justify-start w-full md:w-1/2 lg:w-1/4 h-[26rem] border rounded-lg bg-[#011c3c] p-4">
          <div className="flex gap-3 items-center">
            <Image src={Icon1} alt="card" className="w-12 h-12 sm:w-14 sm:h-14" />
          </div>
          <h3 className="text-white text-base sm:text-lg md:text-xl font-semibold mt-3">
            Comprehensive Vulnerability Assessment
          </h3>
          <p className="text-[#a39d9d] text-sm sm:text-base md:text-lg font-light leading-normal mt-3 mb-2 text-center">
            Receive an in-depth assessment of your APIs vulnerabilities, including a detailed categorization by severity and actionable recommendations for remediation.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center text-center justify-start w-full md:w-1/2 lg:w-1/4 h-[26rem] border rounded-lg bg-[#011c3c] p-4">
          <div className="flex gap-3 items-center">
            <Image src={Applications} alt="card" className="w-12 h-12 sm:w-12 sm:h-12" />
          </div>
          <h3 className="text-white text-base sm:text-lg md:text-xl font-semibold mt-3">
            Targeted Security Recommendations
          </h3>
          <p className="text-[#a39d9d] text-sm sm:text-base md:text-lg font-light leading-normal mt-3 mb-2 text-center">
            Obtain specific recommendations to address the vulnerabilities identified in your APIs, ensuring effective security measures are implemented.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center text-center justify-start w-full md:w-1/2 lg:w-1/4 h-[26rem] border rounded-lg bg-[#011c3c] p-4">
          <div className="flex gap-3 items-center">
            <Image src={IAM} alt="card" className="w-12 h-12 sm:w-12 sm:h-12" />
          </div>
          <h3 className="text-white text-base sm:text-lg md:text-xl font-semibold mt-3">
            Custom Security Testing Packages
          </h3>
          <p className="text-[#a39d9d] text-sm sm:text-base md:text-lg font-light leading-normal mt-3 mb-2 text-center">
            Choose from customized testing packages designed to meet your specific API security needs and budget, ensuring a tailored approach to security.
          </p>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col items-center text-center justify-start w-full md:w-1/2 lg:w-1/4 h-[26rem] border rounded-lg bg-[#011c3c] p-4">
          <div className="flex gap-3 items-center">
            <Image src={group} alt="card" className="w-12 h-12 sm:w-12 sm:h-12" />
          </div>
          <h3 className="text-white text-base sm:text-lg md:text-xl font-semibold mt-3">
            Expert Support and Guidance
          </h3>
          <p className="text-[#a39d9d] text-sm sm:text-base md:text-lg font-light leading-normal mt-3 mb-2 text-center">
            Benefit from ongoing support and expert guidance throughout the testing process, including help with implementation and troubleshooting.
          </p>
        </div>
      </div>

      <div className="cards flex flex-col gap-4 sm:gap-6 md:flex-row md:gap-6 lg:gap-8 p-4 sm:p-6 lg:p-[3rem] overflow-hidden">
        {/* Card 5 */}
        <div className="flex flex-col items-center text-center justify-start w-full md:w-1/2 lg:w-1/4 h-[20rem] border rounded-lg bg-[#011c3c] p-4">
          <div className="flex gap-3 items-center">
            <Image src={Icon1} alt="card" className="w-12 h-12 sm:w-14 sm:h-14" />
          </div>
          <h3 className="text-white text-base sm:text-lg md:text-xl font-semibold mt-3">
            Full-Spectrum API Testing
          </h3>
          <p className="text-[#a39d9d] text-sm sm:text-base md:text-lg font-light leading-normal mt-3 mb-2 text-center">
            Conduct a thorough security evaluation across all aspects of your API, including endpoint security, authentication, and data protection.
          </p>
        </div>

        {/* Card 6 */}
        <div className="flex flex-col items-center text-center justify-start w-full md:w-1/2 lg:w-1/4 h-[20rem] border rounded-lg bg-[#011c3c] p-4">
          <div className="flex gap-3 items-center">
            <Image src={Applications} alt="card" className="w-12 h-12 sm:w-12 sm:h-12" />
          </div>
          <h3 className="text-white text-base sm:text-lg md:text-xl font-semibold mt-3">
            Detailed Vulnerability Report
          </h3>
          <p className="text-[#a39d9d] text-sm sm:text-base md:text-lg font-light leading-normal mt-3 mb-2 text-center">
            Receive a comprehensive report detailing each vulnerability found, its potential impact, and suggested remediations for developers.
          </p>
        </div>

        {/* Card 7 */}
        <div className="flex flex-col items-center text-center justify-start w-full md:w-1/2 lg:w-1/4 h-[20rem] border rounded-lg bg-[#011c3c] p-4">
          <div className="flex gap-3 items-center">
            <Image src={IAM} alt="card" className="w-12 h-12 sm:w-12 sm:h-12" />
          </div>
          <h3 className="text-white text-base sm:text-lg md:text-xl font-semibold mt-3">
            Executive Summary
          </h3>
          <p className="text-[#a39d9d] text-sm sm:text-base md:text-lg font-light leading-normal mt-3 mb-2 text-center">
            Provide executives with a clear summary of how the API stands against potential threats and highlight critical areas that need attention.
          </p>
        </div>

        {/* Card 8 */}
        <div className="flex flex-col items-center text-center justify-start w-full md:w-1/2 lg:w-1/4 h-[20rem] border rounded-lg bg-[#011c3c] p-4">
          <div className="flex gap-3 items-center">
            <Image src={group} alt="card" className="w-12 h-12 sm:w-12 sm:h-12" />
          </div>
          <h3 className="text-white text-base sm:text-lg md:text-xl font-semibold mt-3">
            Post-Assessment Support
          </h3>
          <p className="text-[#a39d9d] text-sm sm:text-base md:text-lg font-light leading-normal mt-3 mb-2 text-center">
            Receive support to address vulnerabilities and implement best practices to enhance API security and prevent future issues.
          </p>
        </div>
      </div>
    </div>
  );
}
