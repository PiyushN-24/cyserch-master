import { FaEye, FaSearch, FaClipboardList } from "react-icons/fa";

export default function DASTServices() {
  return (
    <div className="px-4 sm:px-[9rem] py-4 sm:py-[3rem]">
      <h2 className="text-white text-[2.18rem] font-semibold mt-3 sm:mb-[1rem]">
        Comprehensive DAST Services for Your Application
      </h2>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 p-4 sm:p-[3rem]">
        {/* Continuous Monitoring */}
        <div className="flex flex-col items-center justify-start w-full sm:w-1/3 h-[25rem] sm:h-[22rem] rounded-lg bg-[#011c3c] p-4">
          <div className="flex gap-3 items-center">
            <FaEye className="text-teal-500 w-12 h-12" />
          </div>
          <h3 className="text-white text-[1.1rem] font-semibold mt-3">
            Continuous Monitoring
          </h3>
          <p className="text-[#a39d9d] text-lg font-light leading-normal mt-3 mb-2">
            Keep your application secure with ongoing monitoring of vulnerabilities.
            Our DAST services provide real-time scanning of your web applications
            to detect any new or evolving threats, ensuring continuous protection.
          </p>
        </div>

        {/* Automated Scanning */}
        <div className="flex flex-col items-center justify-start w-full sm:w-1/3 h-[25rem] sm:h-[22rem] rounded-lg bg-[#011c3c] p-4">
          <div className="flex gap-3 items-center">
            <FaSearch className="text-teal-500 w-12 h-12" />
          </div>
          <h3 className="text-white text-[1.1rem] font-semibold mt-3">
            Automated Scanning
          </h3>
          <p className="text-[#a39d9d] text-lg font-light leading-normal mt-3 mb-2">
            Leverage the power of automated tools to scan your applications dynamically.
            Our DAST services detect a wide range of security issues, including SQL injection,
            XSS, and other runtime vulnerabilities, providing actionable insights for remediation.
          </p>
        </div>

        {/* Detailed Reporting */}
        <div className="flex flex-col items-center justify-start w-full sm:w-1/3 h-[25rem] sm:h-[22rem] rounded-lg bg-[#011c3c] p-4">
          <div className="flex gap-3 items-center">
            <FaClipboardList className="text-teal-500 w-12 h-12" />
          </div>

          <h3 className="text-white text-[1.1rem] font-semibold mt-3">
            Detailed Reporting
          </h3>
          <p className="text-[#a39d9d] text-lg font-light leading-normal mt-3 mb-2">
            Receive comprehensive reports detailing vulnerabilities and their impact.
            Our DAST services provide clear, actionable reports that guide your development
            team in resolving issues efficiently, ensuring your application remains secure.
          </p>
        </div>
      </div>
    </div>
  );
}
