"use client"; // Ensures this is a Client Component

import { useEffect, useState } from "react";

export default function DASTOverview() {
  const [tools, setTools] = useState<{ src: string; name: string }[]>([]);

  useEffect(() => {
    const dastTools: { src: string; name: string }[] = [
      { src: "/icons/Burp-Suite.png", name: "Burp Suite" },
      { src: "/icons/OWASPZAP.png", name: "OWASP ZAP" },
      { src: "/icons/Acunetix.png", name: "Acunetix" },
      { src: "/icons/Invicti.svg", name: "Invicti" },
      { src: "/icons/AppSpider.png", name: "AppSpider" },
      { src: "/icons/Detectify.png", name: "Detectify" },
    ];
    setTools(dastTools);
  }, []);

  return (
    <div className="bg-gray-300 text-left px-4 sm:px-6 md:px-8 lg:px-[9rem] py-6 sm:py-8 md:py-10 max-h-[150vh] overflow-auto">
      {/* Heading for Tools */}
      <h2 className="text-lg sm:text-xl md:text-[1.8rem] font-semibold mt-6 flex flex-col items-center">
        <span className="text-black">Tools used in</span>
        <span className="text-teal-600">Dynamic Application Security Testing (DAST)</span>
      </h2>

      {/* Sliding animation for DAST tools */}
      <div className="overflow-hidden mt-6">
        <div className="animate-slide text-black flex space-x-8 md:space-x-12 lg:space-x-20">
          {tools.map((tool, index) => (
            <div key={index} className="flex flex-col items-center transform transition-transform duration-300 hover:scale-110">
              <img
                src={tool.src}
                alt={`DAST Tool ${index}`}
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
          src="/images/what_is_dast.png" // Make sure this path is correct
          alt="Dynamic Application Security Testing"
          className="w-full max-w-[700px] sm:max-w-[800px] md:max-w-[900px] h-auto rounded-md object-cover" // Increased max-width for larger screens
        />
          <p className="text-black text-base sm:text-lg md:text-[1.2rem] font-light mb-6">
            For more details on Dynamic Application Security Testing and its importance, you can explore our comprehensive blog post on <a href="/blog/Top-10-DAST-Tools-Choosing-the-Best-for-Your-2024-Security-Strategy" target="_blank" className="text-blue-500 hover:underline">Top 10 DAST Tools Choosing the Best for Your 2024 Security Strategy</a>.
          </p>
        </div>
        {/* Information Section */}
        <div className="w-full flex flex-col justify-start space-y-8 p-6 bg-gray-100 rounded-lg shadow-lg">
          <h2 className="text-black text-lg sm:text-xl md:text-[1.8rem] font-semibold mb-4 border-b-2 border-teal-600 pb-2">
            What is Dynamic Application Security Testing (DAST)?
          </h2>

          {/* Brief Answer */}
          <p className="text-black text-base sm:text-lg md:text-[1.2rem] font-light mb-6">
            Dynamic Application Security Testing (DAST) is a security testing method that analyzes an application during runtime, identifying vulnerabilities by simulating external attacks. It is useful for finding issues that only occur while the application is in use.
            <br />
            Dynamic Application Security Testing typically includes:
            <ul className="list-disc list-inside ml-6">
              <li><strong>Penetration Testing:</strong> Simulating attacks to identify security flaws in a running application.</li>
              <li><strong>Input Validation Testing:</strong> Testing how the application handles malicious inputs like SQL injection or cross-site scripting (XSS).</li>
              <li><strong>Session Management Testing:</strong> Verifying the applications ability to handle user sessions securely.</li>
              <li><strong>Compliance Verification:</strong> Ensuring the application meets industry-specific security standards and regulations.</li>
              <li><strong>Reporting:</strong> Documenting vulnerabilities discovered and offering remediation recommendations.</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}
