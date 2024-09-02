import Image from "next/image";
import securityImage from "../../../../../public/images/AI-ML-Security.png";

export default function Methodology() {
  return (
    <div className="bg-[#011c3c] px-6 md:px-12 lg:px-36 py-12 mt-16 sm:mt-0">
      <span className="text-teal-400 text-lg md:text-xl font-medium block mb-4">
        HOW IT WORKS?
      </span>
      <h3 className="text-white text-2xl md:text-4xl font-semibold mt-2 md:mt-4 mb-6">
        Methodology
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        
        <div className="bg-gray-900 p-6 rounded-lg text-gray-200">
          <h4 className="text-xl font-semibold mb-2">1. Threat Modeling</h4>
          <p className="text-base font-light">
            We begin by identifying potential risks to your AI-ML models, such as adversarial attacks, data poisoning, and model inversion, creating a map of vulnerabilities.
          </p>
        </div>
        
        <div className="bg-gray-900 p-6 rounded-lg text-gray-200">
          <h4 className="text-xl font-semibold mb-2">2. Test Case Development</h4>
          <p className="text-base font-light">
            Customized test cases are designed to assess security gaps in your AI-ML infrastructure, algorithms, and datasets based on the identified risks.
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-lg text-gray-200">
          <h4 className="text-xl font-semibold mb-2">3. Automated Vulnerability Scanning</h4>
          <p className="text-base font-light">
            Advanced tools are utilized to scan your AI-ML systems for known vulnerabilities, ensuring consistent and thorough coverage.
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-lg text-gray-200">
          <h4 className="text-xl font-semibold mb-2">4. Manual Adversarial Testing</h4>
          <p className="text-base font-light">
            We perform detailed manual assessments by simulating adversarial attacks and evaluating how your AI models respond to unexpected inputs and manipulations.
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-lg text-gray-200">
          <h4 className="text-xl font-semibold mb-2">5. Comprehensive Reporting</h4>
          <p className="text-base font-light">
            A detailed report is generated, highlighting vulnerabilities, attack simulations, and recommended remediation steps to strengthen the overall security of your AI-ML systems.
          </p>
        </div>
        
      </div>
    </div>
  );
}
