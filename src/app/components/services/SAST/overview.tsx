"use client"; // Ensures this is a Client Component

import { useEffect, useState } from "react";

export default function SASTOverview() {
  const [tools, setTools] = useState<{ src: string; name: string }[]>([]);

  useEffect(() => {
    const sastTools: { src: string; name: string }[] = [
      { src: "/icons/Checkmarx.png", name: "Checkmarx" },
      { src: "/icons/Sonarqube.png", name: "SonarQube" },
      { src: "/icons/veracode.svg", name: "Veracode" },
      { src: "/icons/fortify.svg", name: "Fortify" },
      { src: "/icons/Snyk.png", name: "Snyk" },
      { src: "/icons/codeql.svg", name: "CodeQL" },
    ];
    setTools(sastTools);
  }, []);

  return (
    <div className="bg-gray-300 text-left px-4 sm:px-6 md:px-8 lg:px-[9rem] py-6 sm:py-8 md:py-10 max-h-[150vh] overflow-auto">
      {/* Heading for Tools */}
      <h2 className="text-lg sm:text-xl md:text-[1.8rem] font-semibold mt-6 flex flex-col items-center">
        <span className="text-black">Tools used in</span>
        <span className="text-teal-600">Static Application Security Testing (SAST)</span>
      </h2>

      {/* Sliding animation for SAST tools */}
      <div className="overflow-hidden mt-6">
        <div className="animate-slide text-black flex space-x-8 md:space-x-12 lg:space-x-20">
          {tools.map((tool, index) => (
            <div key={index} className="flex flex-col items-center transform transition-transform duration-300 hover:scale-110">
              <img
                src={tool.src}
                alt={`SAST Tool ${index}`}
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
            src="/images/what_is_sast.png" // Make sure this path is correct
            alt="Static Application Security Testing"
            className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] h-auto rounded-md object-cover" // Responsive width and automatic height
          />
          <p className="text-black text-base sm:text-lg md:text-[1.2rem] font-light mb-6">
            For more details on Static Application Security Testing and its importance, you can explore our comprehensive blog post on <a href="/blog/Top-10-SAST-Tools-Ensuring-Code-Security-in-2024" target="_blank" className="text-blue-500 hover:underline">Top 10 SAST Tools Ensuring Code Security in 2024</a>.
          </p>
        </div>
        {/* Information Section */}
        <div className="w-full flex flex-col justify-start space-y-8 p-6 bg-gray-100 rounded-lg shadow-lg">
          <h2 className="text-black text-lg sm:text-xl md:text-[1.8rem] font-semibold mb-4 border-b-2 border-teal-600 pb-2">
            What is Static Application Security Testing (SAST)?
          </h2>

          {/* Brief Answer */}
          <p className="text-black text-base sm:text-lg md:text-[1.2rem] font-light mb-6">
            Static Application Security Testing (SAST) involves analyzing an applications source code, bytecode, or binary code to identify vulnerabilities and security flaws before the application is deployed. This process helps developers to detect and address potential security issues early in the development lifecycle.
            <br />
            Static Application Security Testing typically includes:
            <ul className="list-disc list-inside ml-6">
              <li><strong>Code Analysis:</strong> Reviewing the application code for vulnerabilities such as insecure coding practices and potential security flaws.</li>
              <li><strong>Configuration Review:</strong> Assessing application and system configurations for security misconfigurations.</li>
              <li><strong>Compliance Checking:</strong> Ensuring that the application adheres to relevant security standards and regulations.</li>
              <li><strong>Integration Testing:</strong> Testing how the application integrates with other systems and components to identify potential security issues.</li>
              <li><strong>Reporting:</strong> Documenting findings, their impact, and providing recommendations for remediation.</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}
