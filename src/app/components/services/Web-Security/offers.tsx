import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FaUserShield, FaWrench } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";

export default function WebPenTestOffers() {
  return (
    <div className="bg-[#011C3C] px-4 sm:px-[6rem] lg:px-[9rem] py-4 sm:py-[3rem]">
      <h2 className="text-white text-2xl sm:text-[2.18rem] font-semibold mt-3 mb-6 text-center sm:mb-8">
        Our Web Penetration Testing Deliverables
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 sm:p-[3rem]">
        {/** First Row of Cards */}
        <div className="flex flex-col items-center justify-start w-full h-full border rounded-lg bg-[#011C3C] p-6">
          <AiOutlineFundProjectionScreen className="w-14 h-14 text-white" />
          <h3 className="text-white text-lg font-semibold mt-4 text-center">
            Comprehensive Web Vulnerability Report
          </h3>
          <p className="text-[#a39d9d] text-base font-light leading-normal mt-4 text-center">
            Receive a detailed assessment report categorizing web vulnerabilities like SQL Injection, Cross-Site Scripting (XSS), and CSRF, along with remediation steps to secure your web applications.
          </p>
        </div>

        <div className="flex flex-col items-center justify-start w-full h-full border rounded-lg bg-[#011C3C] p-6">
          <FaUserShield className="w-12 h-12 text-white" />
          <h3 className="text-white text-lg font-semibold mt-4 text-center">
            Custom Exploit Scenarios
          </h3>
          <p className="text-[#a39d9d] text-base font-light leading-normal mt-4 text-center">
            Identify how attackers could exploit your web application, testing various attack vectors like broken authentication and insecure direct object references (IDOR) to reveal the impact of vulnerabilities.
          </p>
        </div>

        <div className="flex flex-col items-center justify-start w-full h-full border rounded-lg bg-[#011C3C] p-6">
          <FaWrench className="w-12 h-12 text-white" />
          <h3 className="text-white text-lg font-semibold mt-4 text-center">
            Security Best Practices
          </h3>
          <p className="text-[#a39d9d] text-base font-light leading-normal mt-4 text-center">
            Get actionable recommendations to implement security best practices such as secure session management, proper input validation, and strengthening access control mechanisms.
          </p>
        </div>

        <div className="flex flex-col items-center justify-start w-full h-full border rounded-lg bg-[#011C3C] p-6">
          <MdSupportAgent className="w-12 h-12 text-white" />
          <h3 className="text-white text-lg font-semibold mt-4 text-center">
            Continuous Support
          </h3>
          <p className="text-[#a39d9d] text-base font-light leading-normal mt-4 text-center">
            Access ongoing support from our security experts to help implement fixes and secure your web applications against evolving threats in the long term.
          </p>
        </div>
      </div>

      {/** Second Row of Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 sm:p-[3rem]">
        <div className="flex flex-col items-center justify-start w-full h-full border rounded-lg bg-[#011C3C] p-6">
          <AiOutlineFundProjectionScreen className="w-14 h-14 text-white" />
          <h3 className="text-white text-lg font-semibold mt-4 text-center">
            Attack Simulation Report
          </h3>
          <p className="text-[#a39d9d] text-base font-light leading-normal mt-4 text-center">
            Understand how your web application would perform under real-world attacks, with detailed simulation results showing potential damage and vulnerabilities.
          </p>
        </div>

        <div className="flex flex-col items-center justify-start w-full h-full border rounded-lg bg-[#011C3C] p-6">
          <FaUserShield className="w-12 h-12 text-white" />
          <h3 className="text-white text-lg font-semibold mt-4 text-center">
            Technical Analysis for Developers
          </h3>
          <p className="text-[#a39d9d] text-base font-light leading-normal mt-4 text-center">
            Deliver a report customized for developers with an in-depth analysis of each vulnerability, its potential impact, and recommendations for code-level remediations.
          </p>
        </div>

        <div className="flex flex-col items-center justify-start w-full h-full border rounded-lg bg-[#011C3C] p-6">
          <FaWrench className="w-12 h-12 text-white" />
          <h3 className="text-white text-lg font-semibold mt-4 text-center">
            Executive Summary
          </h3>
          <p className="text-[#a39d9d] text-base font-light leading-normal mt-4 text-center">
            Present an easy-to-understand summary for leadership teams, highlighting key vulnerabilities, their business impact, and strategic solutions.
          </p>
        </div>

        <div className="flex flex-col items-center justify-start w-full h-full border rounded-lg bg-[#011C3C] p-6">
          <MdSupportAgent className="w-12 h-12 text-white" />
          <h3 className="text-white text-lg font-semibold mt-4 text-center">
            Remediation Assistance
          </h3>
          <p className="text-[#a39d9d] text-base font-light leading-normal mt-4 text-center">
            Offer hands-on assistance in fixing vulnerabilities and improving overall web application security, ensuring your application remains secure in the future.
          </p>
        </div>
      </div>
    </div>
  );
}
