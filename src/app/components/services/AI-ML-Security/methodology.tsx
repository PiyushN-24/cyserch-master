import Image from "next/image";
import aimlImage from "../../../../../public/images/ai_ml_penetration_testing.png"; // Adjust path as needed

export default function AIMLTestingPage() {
  return (
    <div className="bg-gray-300 flex flex-col md:flex-row items-center justify-between w-full px-6 md:px-12 lg:px-36 py-12 mt-16 sm:mt-0">
      <div className="w-full md:w-2/5 flex items-center rounded-lg justify-center mt-12 md:mt-0 h-full md:mr-12"> {/* Added margin-right */}
        <Image
          src={aimlImage}
          alt="AI/ML Penetration Testing Methodology Image"
          className="rounded-lg object-cover w-auto h-auto max-w-full max-h-[500px]" // Ensures image size adjusts automatically while limiting its height
        />
      </div>
      <div className="w-full md:w-3/5 fadeRight md:ml-6"> {/* Added margin-left */}
        <span className="text-teal-500 text-lg md:text-xl font-medium">
          HOW IT WORKS?
        </span>
        <h3 className="text-black text-2xl md:text-4xl font-semibold mt-2 md:mt-4">
          AI/ML Penetration Testing Methodology
        </h3>
        <p className="text-black text-base md:text-lg font-light mt-6">
          Our AI/ML Penetration Testing methodology focuses on assessing the security of machine learning models and AI systems. This process includes analyzing the algorithms, data integrity, and overall system behavior to uncover potential vulnerabilities that could compromise the model’s effectiveness or security.
        </p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:pr-12">
          {[
            { title: "Model Attacks", description: "Evaluate how machine learning models withstand adversarial attacks and manipulations." },
            { title: "Data Security Testing", description: "Ensure that data used in training and inference processes is secure and properly managed." },
            { title: "Algorithm Analysis", description: "Examine algorithms for weaknesses that could lead to biased or incorrect outputs." },
            { title: "Access Control", description: "Verify that access controls are properly implemented to protect sensitive AI resources." },
            { title: "Compliance Checks", description: "Ensure AI systems adhere to relevant regulations and industry standards." },
            { title: "Input Validation", description: "Test input fields to confirm they are properly sanitized and do not expose security risks." },
            { title: "Error Handling", description: "Analyze how the system handles errors and logs events to ensure sensitive information is not exposed." },
            { title: "Remediation Validation", description: "Re-test the system to verify that vulnerabilities identified during testing have been effectively mitigated." }
          ].map((item, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg text-gray-200 hover:bg-cyan-500 transition-colors duration-300 lg:col-span-2">
              <h4 className="text-xl md:text-2xl font-semibold text-white mb-2">{item.title}:</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
