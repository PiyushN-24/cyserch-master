import Image from "next/image";
import secureCoding from "../../../../../public/images/what-is-cyber-security.jpg";

export default function SASTMethodology() {
  return (
    <div className="bg-[#011c3c] flex flex-col md:flex-row items-start justify-start w-full px-6 md:px-12 lg:px-36 py-12 mt-16 sm:mt-0">
      <div className="div-1 fadeLeft w-full md:w-3/5">
        <span className="text-teal-400 text-lg md:text-xl font-medium">
          HOW IT WORKS?
        </span>
        <h3 className="text-white text-2xl md:text-4xl font-semibold mt-2 md:mt-4">
          SAST Methodology
        </h3>
        <p className="text-gray-400 text-base md:text-lg font-light mt-6">
          Our Static Application Security Testing (SAST) methodology ensures that your code is analyzed thoroughly for vulnerabilities before it is deployed. We utilize a mix of automated tools and manual reviews to uncover and address security issues early in the development lifecycle.
        </p>
        <ul className="mt-6">
          <li className="flex items-center text-gray-400 text-base md:text-lg font-light">
            1. Code Analysis
          </li>
          <li className="flex items-center text-gray-400 text-base md:text-lg font-light">
            2. Vulnerability Identification
          </li>
          <li className="flex items-center text-gray-400 text-base md:text-lg font-light">
            3. Risk Assessment
          </li>
          <li className="flex items-center text-gray-400 text-base md:text-lg font-light">
            4. Remediation Guidance
          </li>
          <li className="flex items-center text-gray-400 text-base md:text-lg font-light">
            5. Continuous Monitoring
          </li>
        </ul>
      </div>

      <div className="w-full md:w-2/5 flex items-center justify-center fadeRight mt-12 md:mt-12">
        <Image
          src={secureCoding}
          alt="secure coding"
          className="rounded-lg object-contain"
        />
      </div>
    </div>
  );
}
