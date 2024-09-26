import { FaSearch, FaMobileAlt, FaLock, FaBug, FaFileAlt, FaChartBar, FaTools, FaShieldAlt } from "react-icons/fa";

export default function MobilePenetrationTesting() {
  return (
    <div className="bg-[#011C3C] px-4 sm:px-[9rem] py-4 sm:py-[3rem]">
      <h2 className="text-white text-[2.18rem] font-semibold mt-3 mb-[-5rem] sm:mb-[1rem]">
        Mobile Penetration Testing Deliverables
      </h2>
      <div className="cards flex flex-col sm:flex-row gap-4 sm:gap-8 p-4 sm:p-[3rem]">
        <div className="flex flex-col items-center justify-start w-full sm:w-96 h-[22rem] border rounded-lg  p-4">
          <div className="flex gap-3 items-center">
            <FaSearch className="text-cyan-500 text-4xl" />
          </div>
          <h3 className="text-white text-[1.1rem] font-semibold mt-3">
            Comprehensive Vulnerability Assessment
          </h3>
          <p className="text-[#CCCCCC] text-lg font-light leading-normal mt-3 mb-2">
            Conduct a thorough assessment, identifying vulnerabilities across mobile platforms and applications with actionable remediation steps.
          </p>
        </div>

        <div className="flex flex-col items-center justify-start w-full sm:w-96 h-[22rem] border rounded-lg  p-4">
          <div className="flex gap-3 items-center">
            <FaMobileAlt className="text-cyan-500 text-4xl" />
          </div>
          <h3 className="text-white text-[1.1rem] font-semibold mt-3">
            Mobile-Specific Exploitation
          </h3>
          <p className="text-[#CCCCCC] text-lg font-light leading-normal mt-3 mb-2">
            Tailored testing targeting mobile-specific issues like insecure data storage, weak server-side controls, and improper session handling.
          </p>
        </div>

        <div className="flex flex-col items-center justify-start w-full sm:w-96 h-[22rem] border rounded-lg  p-4">
          <div className="flex gap-3 items-center">
            <FaLock className="text-cyan-500 text-4xl" />
          </div>
          <h3 className="text-white text-[1.1rem] font-semibold mt-3">
            Secure Authentication Testing
          </h3>
          <p className="text-[#CCCCCC] text-lg font-light leading-normal mt-3 mb-2">
            Ensure that secure authentication mechanisms are enforced, preventing unauthorized access to sensitive data and services.
          </p>
        </div>

        <div className="flex flex-col items-center justify-start w-full sm:w-96 h-[22rem] border rounded-lg  p-4">
          <div className="flex gap-3 items-center">
            <FaBug className="text-cyan-500 text-4xl" />
          </div>
          <h3 className="text-white text-[1.1rem] font-semibold mt-3">
            Vulnerability Exploitation
          </h3>
          <p className="text-[#CCCCCC] text-lg font-light leading-normal mt-3 mb-2">
            Exploit discovered vulnerabilities to validate their severity and understand their real-world impact on your mobile applications.
          </p>
        </div>
      </div>

      <div className="cards flex flex-col sm:flex-row gap-4 sm:gap-8 p-4 sm:p-[3rem]">
        <div className="flex flex-col items-center justify-start w-full sm:w-96 h-[22rem] border rounded-lg  p-4">
          <div className="flex gap-3 items-center">
            <FaFileAlt className="text-cyan-500 text-4xl" />
          </div>
          <h3 className="text-white text-[1.1rem] font-semibold mt-3">
            Detailed Report
          </h3>
          <p className="text-[#CCCCCC] text-lg font-light leading-normal mt-3 mb-2">
            Receive a comprehensive report with in-depth vulnerability analysis, potential impacts, and step-by-step recommendations for remediation.
          </p>
        </div>

        <div className="flex flex-col items-center justify-start w-full sm:w-96 h-[22rem] border rounded-lg  p-4">
          <div className="flex gap-3 items-center">
            <FaChartBar className="text-cyan-500 text-4xl" />
          </div>
          <h3 className="text-white text-[1.1rem] font-semibold mt-3">
            Risk-Based Prioritization
          </h3>
          <p className="text-[#CCCCCC] text-lg font-light leading-normal mt-3 mb-2">
            Identify and prioritize the most critical vulnerabilities based on the potential impact to your organizations mobile security posture.
          </p>
        </div>

        <div className="flex flex-col items-center justify-start w-full sm:w-96 h-[22rem] border rounded-lg  p-4">
          <div className="flex gap-3 items-center">
            <FaTools className="text-cyan-500 text-4xl" />
          </div>
          <h3 className="text-white text-[1.1rem] font-semibold mt-3">
            Post-Test Support
          </h3>
          <p className="text-[#CCCCCC] text-lg font-light leading-normal mt-3 mb-2">
            Benefit from ongoing support to resolve identified vulnerabilities and implement long-term mobile security strategies.
          </p>
        </div>

        <div className="flex flex-col items-center justify-start w-full sm:w-96 h-[22rem] border rounded-lg  p-4">
          <div className="flex gap-3 items-center">
            <FaShieldAlt className="text-cyan-500 text-4xl" />
          </div>
          <h3 className="text-white text-[1.1rem] font-semibold mt-3">
            Continuous Monitoring
          </h3>
          <p className="text-[#CCCCCC] text-lg font-light leading-normal mt-3 mb-2">
            Ensure your mobile applications remain secure through continuous monitoring and proactive threat detection post-assessment.
          </p>
        </div>
      </div>
    </div>
  );
}
