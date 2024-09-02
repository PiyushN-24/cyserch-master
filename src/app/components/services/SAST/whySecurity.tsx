import Image from "next/image";
import CodeReview from "../../../../../public/icons/Code.png";
import SecurityScan from "../../../../../public/icons/application-security.svg";
import VulnerabilityAssessment from "../../../../../public/icons/governance-risk-compliance.svg";

export default function WhySASTServices() {
  return (
    <div className="px-4 sm:px-[9rem] py-4 sm:py-[3rem]">
      <h2 className="text-white text-[2.18rem] font-semibold mt-3 sm:mb-[1rem]">
        Secure Your Code from the Ground Up.
      </h2>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 p-4 sm:p-[3rem]">
        <div className="flex flex-col items-center justify-start w-full sm:w-1/3 h-[25rem] sm:h-[22rem] rounded-lg bg-[#011c3c] p-4">
          <div className="flex gap-3 items-center">
            <Image src={CodeReview} alt="Code Review" className="w-12 h-12" />
          </div>
          <h3 className="text-white text-[1.1rem] font-semibold mt-3">
            Code Review
          </h3>
          <p className="text-[#a39d9d] text-lg font-light leading-normal mt-3 mb-2">
            Ensure your code is free from security flaws with our thorough code
            review process. Our experts meticulously analyze your source code to
            identify and address potential vulnerabilities before they become
            threats.
          </p>
        </div>

        <div className="flex flex-col items-center justify-start w-full sm:w-1/3 h-[25rem] sm:h-[22rem] rounded-lg bg-[#011c3c] p-4">
          <div className="flex gap-3 items-center">
            <Image src={SecurityScan} alt="Security Scan" className="w-12 h-12" />
          </div>
          <h3 className="text-white text-[1.1rem] font-semibold mt-3">
            Security Scanning
          </h3>
          <p className="text-[#a39d9d] text-lg font-light leading-normal mt-3 mb-2">
            Identify vulnerabilities early in your development lifecycle with
            our automated security scanning tools. We help you detect issues
            such as SQL injection, XSS, and other common security flaws in your
            code.
          </p>
        </div>

        <div className="flex flex-col items-center justify-start w-full sm:w-1/3 h-[25rem] sm:h-[22rem] rounded-lg bg-[#011c3c] p-4">
          <div className="flex gap-3 items-center">
            <Image src={VulnerabilityAssessment} alt="Vulnerability Assessment" className="w-12 h-12" />
          </div>
          <h3 className="text-white text-[1.1rem] font-semibold mt-3">
            Vulnerability Assessment
          </h3>
          <p className="text-[#a39d9d] text-lg font-light leading-normal mt-3 mb-2">
            Conduct comprehensive vulnerability assessments on your application
            code to identify weaknesses that could be exploited by attackers.
            Our detailed reports provide actionable insights to strengthen your
            security posture.
          </p>
        </div>
      </div>
    </div>
  );
}
