import { FaShieldAlt, FaCode, FaUserLock } from 'react-icons/fa'; // Importing icons from react-icons

export default function WhyWebPenTesting() {
  return (
    <div className="px-4 sm:px-[9rem] py-4 sm:py-[3rem]">
      <h2 className="text-white text-[2.18rem] font-semibold mt-3 sm:mb-[1rem]">
        Comprehensive Web Penetration Testing for Your Application
      </h2>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 p-4 sm:p-[3rem]">
        <div className="flex flex-col items-center justify-start w-full sm:w-1/3 h-[25rem] sm:h-[22rem] rounded-lg bg-[#011c3c] p-4">
          <div className="flex gap-3 items-center">
            <FaShieldAlt className="text-white w-12 h-12" />
          </div>
          <h3 className="text-white text-[1.1rem] font-semibold mt-3">
            Vulnerability Scanning
          </h3>
          <p className="text-white text-lg font-light leading-normal mt-3 mb-2">
            Our comprehensive vulnerability scanning identifies known vulnerabilities in your web application. Using advanced tools and techniques, we assess your application for common and critical security issues, ensuring timely remediation to safeguard your data and users.
          </p>
        </div>

        <div className="flex flex-col items-center justify-start w-full sm:w-1/3 h-[25rem] sm:h-[22rem] rounded-lg bg-[#011c3c] p-4">
          <div className="flex gap-3 items-center">
            <FaCode className="text-white w-12 h-12" />
          </div>
          <h3 className="text-white text-[1.1rem] font-semibold mt-3">
            Manual Testing
          </h3>
          <p className="text-white text-lg font-light leading-normal mt-3 mb-2">
            Beyond automated scanning, our manual testing involves a detailed examination of your application. Our experts look for security weaknesses that automated tools might miss, including complex logic flaws and vulnerabilities related to business logic.
          </p>
        </div>

        <div className="flex flex-col items-center justify-start w-full sm:w-1/3 h-[25rem] sm:h-[22rem] rounded-lg bg-[#011c3c] p-4">
          <div className="flex gap-3 items-center">
            <FaUserLock className="text-white w-12 h-12" />
          </div>

          <h3 className="text-white text-[1.1rem] font-semibold mt-3">
            Authentication & Session Testing
          </h3>
          <p className="text-white text-lg font-light leading-normal mt-3 mb-2">
            Test the robustness of your authentication mechanisms and session management. We simulate attacks to evaluate the strength of login processes, session handling, and the overall security of user accounts, ensuring that sensitive information remains protected.
          </p>
        </div>
      </div>
    </div>
  );
}
