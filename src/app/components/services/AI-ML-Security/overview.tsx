"use client"; // Ensures this is a Client Component

import { useEffect, useState } from "react";

export default function AIMLTestingOverview() {
  const [tools, setTools] = useState<{ src: string; name: string }[]>([]);

  useEffect(() => {
    const aimlTools: { src: string; name: string }[] = [
      { src: "/icons/Metasploit.png", name: "Metasploit" },
      { src: "/icons/Trustwave.png", name: "Trustwave" },
      { src: "/icons/IBM-Security.png", name: "IBM Security" },
      { src: "/icons/Sonarqube.png", name: "SonarQube" },
      { src: "/icons/Checkmarx.png", name: "Checkmarx" },
      { src: "/icons/Snyk.png", name: "Snyk" },
    ];
    setTools(aimlTools);
  }, []);

  return (
    <div className="bg-gray-300 text-left px-4 sm:px-6 md:px-8 lg:px-[9rem] py-6 sm:py-8 md:py-10 max-h-[150vh] overflow-auto">
      {/* Heading for Tools */}
      <h2 className="text-lg sm:text-xl md:text-[1.8rem] font-semibold mt-6 flex flex-col items-center">
        <span className="text-black">Tools used in</span>
        <span className="text-teal-600">AI/ML Penetration Testing</span>
      </h2>

      {/* Sliding animation for AI/ML tools */}
      <div className="overflow-hidden mt-6">
        <div className="animate-slide text-black flex space-x-8 md:space-x-12 lg:space-x-20">
          {tools.map((tool, index) => (
            <div key={index} className="flex flex-col items-center transform transition-transform duration-300 hover:scale-110">
              <img
                src={tool.src}
                alt={`AI/ML Tool ${index}`}
                className="w-32 h-32 object-contain mb-2 bg-gray-200 shadow-2xl rounded-md"
                style={{ width: '128px', height: '128px' }} // Fixed size for consistency
              />
              <span className="text-lg sm:text-xl md:text-2xl font-semibold">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Image and Information Section */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        {/* Image Section with Text Below */}
        <div className="w-full flex flex-col justify-start items-center space-y-6">
          <img
            src="/images/what_is_aiml_testing.png" // Make sure this path is correct
            alt="AI/ML Penetration Testing"
            className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] h-auto rounded-md object-cover" // Increased max-width for larger screens
          />
          <p className="text-black text-base sm:text-lg md:text-[1.2rem] font-light mb-6">
            For more details on AI/ML Penetration Testing and its significance, you can explore our comprehensive blog post on <a href="/blog/AI-ML-Pentest-Company:-Revolutionizing-Cybersecurity-in-2024" target="_blank" className="text-blue-500 hover:underline">AI/ML Pentest Company: Revolutionizing Cybersecurity</a>.
          </p>
        </div>
        {/* Information Section */}
        <div className="w-full flex flex-col justify-start space-y-8 p-6 bg-gray-100 rounded-lg shadow-lg">
          <h2 className="text-black text-lg sm:text-xl md:text-[1.8rem] font-semibold mb-4 border-b-2 border-teal-600 pb-2">
            What is AI/ML Penetration Testing?
          </h2>

          {/* Brief Answer */}
          <p className="text-black text-base sm:text-lg md:text-[1.2rem] font-light mb-6">
            AI/ML Penetration Testing is a specialized form of security assessment focusing on AI and machine learning systems. This testing method identifies vulnerabilities in algorithms, data handling, and overall system integrity by simulating various attack scenarios. It aims to uncover potential threats that could compromise the accuracy, security, and privacy of AI/ML models.
            <br />
            AI/ML Penetration Testing typically includes:
            <ul className="list-disc list-inside ml-6">
              <li><strong>Model Attacks:</strong> Testing the resilience of machine learning models to adversarial attacks and manipulations.</li>
              <li><strong>Data Security Testing:</strong> Ensuring the security and privacy of the data used to train AI models.</li>
              <li><strong>Algorithm Analysis:</strong> Assessing algorithms for vulnerabilities that could lead to biased or incorrect outcomes.</li>
              <li><strong>Access Control Testing:</strong> Verifying that appropriate access controls are in place to protect sensitive AI/ML resources.</li>
              <li><strong>Compliance Checks:</strong> Ensuring that AI/ML systems adhere to relevant industry standards and regulations.</li>
              <li><strong>Reporting:</strong> Documenting discovered vulnerabilities and providing recommendations for remediation.</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}
