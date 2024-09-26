import { AiFillDatabase, AiOutlineBug, AiFillCode, AiOutlineTeam } from "react-icons/ai";

export default function AIPenetrationTesting() {
  return (
    <div className="px-4 bg-[#011c3c] sm:px-[9rem] py-4 sm:py-[3rem]">
      <h2 className="text-white text-[2.18rem] font-semibold mt-3 mb-[-5rem] sm:mb-[1rem]">
        AI/ML Penetration Testing Deliverables
      </h2>
      <div className="cards flex flex-col sm:flex-row gap-4 sm:gap-8 p-4 sm:p-[3rem]">
        <div className="flex flex-col items-center justify-start w-full sm:w-96 h-[22rem] border rounded-lg bg-[#011c3c] p-4">
          <div className="flex gap-3 items-center">
            <AiFillDatabase className="text-white w-14 h-14" />
          </div>
          <h3 className="text-white text-[1.1rem] font-semibold mt-3">
            Comprehensive Model Testing
          </h3>
          <p className="text-[#a39d9d] text-lg font-light leading-normal mt-3 mb-2">
            Perform in-depth testing of AI/ML models, identifying vulnerabilities in data inputs, algorithms, and overall system architecture.
          </p>
        </div>

        <div className="flex flex-col items-center justify-start w-full sm:w-96 h-[22rem] border rounded-lg bg-[#011c3c] p-4">
          <div className="flex gap-3 items-center">
            <AiOutlineBug className="text-white w-12 h-12" />
          </div>
          <h3 className="text-white text-[1.1rem] font-semibold mt-3">
            AI/ML-Specific Threats
          </h3>
          <p className="text-[#a39d9d] text-lg font-light leading-normal mt-3 mb-2">
            Identify AI/ML-specific threats, such as adversarial attacks, data poisoning, and model inversion, ensuring robust protection.
          </p>
        </div>

        <div className="flex flex-col items-center justify-start w-full sm:w-96 h-[22rem] border rounded-lg bg-[#011c3c] p-4">
          <div className="flex gap-3 items-center">
            <AiFillCode className="text-white w-12 h-12" />
          </div>
          <h3 className="text-white text-[1.1rem] font-semibold mt-3">
            Custom Mitigation Strategies
          </h3>
          <p className="text-[#a39d9d] text-lg font-light leading-normal mt-3 mb-2">
            Provide tailored mitigation strategies for AI/ML vulnerabilities, including defensive techniques to safeguard algorithms and data.
          </p>
        </div>

        <div className="flex flex-col items-center justify-start w-full sm:w-96 h-[22rem] border rounded-lg bg-[#011c3c] p-4">
          <div className="flex gap-3 items-center">
            <AiOutlineTeam className="text-white w-12 h-12" />
          </div>
          <h3 className="text-white text-[1.1rem] font-semibold mt-3">
            Expert Consultation
          </h3>
          <p className="text-[#a39d9d] text-lg font-light leading-normal mt-3 mb-2">
            Access a dedicated team of AI/ML security experts for guidance on model security best practices and ongoing support post-assessment.
          </p>
        </div>
      </div>

      <div className="cards flex flex-col sm:flex-row gap-4 sm:gap-8 p-4 sm:p-[3rem]">
        <div className="flex flex-col items-center justify-start w-full sm:w-96 h-[22rem] border rounded-lg bg-[#011c3c] p-4">
          <div className="flex gap-3 items-center">
            <AiFillDatabase className="text-white w-14 h-14" />
          </div>
          <h3 className="text-white text-[1.1rem] font-semibold mt-3">
            Full Lifecycle Testing
          </h3>
          <p className="text-[#a39d9d] text-lg font-light leading-normal mt-3 mb-2">
            Evaluate security risks throughout the AI/ML lifecycle, from data collection and model training to deployment and maintenance.
          </p>
        </div>

        <div className="flex flex-col items-center justify-start w-full sm:w-96 h-[22rem] border rounded-lg bg-[#011c3c] p-4">
          <div className="flex gap-3 items-center">
            <AiOutlineBug className="text-white w-12 h-12" />
          </div>
          <h3 className="text-white text-[1.1rem] font-semibold mt-3">
            Model Exploitation Scenarios
          </h3>
          <p className="text-[#a39d9d] text-lg font-light leading-normal mt-3 mb-2">
            Simulate real-world model exploitation scenarios to test the AI/ML systems robustness against adversarial attacks and data manipulation.
          </p>
        </div>

        <div className="flex flex-col items-center justify-start w-full sm:w-96 h-[22rem] border rounded-lg bg-[#011c3c] p-4">
          <div className="flex gap-3 items-center">
            <AiFillCode className="text-white w-12 h-12" />
          </div>
          <h3 className="text-white text-[1.1rem] font-semibold mt-3">
            Developer-Friendly Reporting
          </h3>
          <p className="text-[#a39d9d] text-lg font-light leading-normal mt-3 mb-2">
            Provide detailed reports designed for developers, outlining vulnerabilities, their impact, and step-by-step remediation guidance.
          </p>
        </div>

        <div className="flex flex-col items-center justify-start w-full sm:w-96 h-[22rem] border rounded-lg bg-[#011c3c] p-4">
          <div className="flex gap-3 items-center">
            <AiOutlineTeam className="text-white w-12 h-12" />
          </div>
          <h3 className="text-white text-[1.1rem] font-semibold mt-3">
            Continuous Improvement Support
          </h3>
          <p className="text-[#a39d9d] text-lg font-light leading-normal mt-3 mb-2">
            Partner with our team for continuous support to help improve AI/ML model security and prevent emerging threats in evolving environments.
          </p>
        </div>
      </div>
    </div>
  );
}
