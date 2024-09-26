"use client"; // Ensures this is a Client Component

import { useEffect, useState } from "react";

export default function WebPenetrationOverview() {
  const [tools, setTools] = useState<{ src: string; name: string }[]>([]);

  useEffect(() => {
    const webPenTestingTools: { src: string; name: string }[] = [
      { src: "/icons/Burpsuite.png", name: "Burp Suite" },
      { src: "/icons/OWASPZAP.png", name: "OWASP ZAP" },
      { src: "/icons/Arachni.png", name: "Arachni" },
      { src: "/icons/Acunetix.png", name: "Acunetix" },
      { src: "/icons/Qualys.png", name: "Qualys" },
      { src: "/icons/OWASPDependencyCheck.png", name: "OWASP Dependency Check" },
    ];
    setTools(webPenTestingTools);
  }, []);

  return (
    <div className="bg-gray-300 text-left px-4 sm:px-6 md:px-8 lg:px-[9rem] py-6 sm:py-8 md:py-10 max-h-[150vh] overflow-auto">
      {/* Heading for Tools */}
      <h2 className="text-lg sm:text-xl md:text-[1.8rem] font-semibold mt-6 flex flex-col items-center">
        <span className="text-black">Tools used in</span>
        <span className="text-teal-600">Web Penetration Testing</span>
      </h2>

      {/* Sliding animation for Web PenTesting tools */}
      <div className="overflow-hidden mt-6">
        <div className="animate-slide text-black flex space-x-8 md:space-x-12 lg:space-x-20">
          {tools.map((tool, index) => (
            <div key={index} className="flex flex-col items-center transform transition-transform duration-300 hover:scale-110 max-w-[150px]">
              <img
                src={tool.src}
                alt={`Web Penetration Testing Tool ${index}`}
                className="w-32 h-32 object-contain mb-2 bg-gray-200 shadow-2xl rounded-md"
                style={{ width: '128px', height: '128px' }} // Fixed size for consistency
              />
              <span className="text-lg sm:text-xl md:text-2xl font-semibold text-center break-words">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Image and Information Section */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        {/* Image Section with Text Below */}
        <div className="w-full flex flex-col justify-start items-center space-y-6">
          <img
            src="/images/what_is_web_penetration.png" // Make sure this path is correct
            alt="Web Penetration Testing"
            className="w-[800px] h-[800px] rounded-md object-cover" // Increased size for consistency
            style={{ width: '550px', height: '550px' }} // Increased size for consistency
          />
          <p className="text-black text-base sm:text-lg md:text-[1.2rem] font-light mb-6">
            For more details on Web Penetration Testing and its importance, you can explore our detailed blog post on <a href="/blog/Free-Website-Scanning-Tool:-How-to-Protect-Your-Website-from-Vulnerabilities" target="_blank" className="text-blue-500 hover:underline">Free Website Scanning Tool: How to Protect Your Website from Vulnerabilities</a>.
          </p>
        </div>

        {/* Information Section */}
        <div className="w-full flex flex-col justify-start space-y-8 p-6 bg-gray-100 rounded-lg shadow-lg">
          <h2 className="text-black text-lg sm:text-xl md:text-[1.8rem] font-semibold mb-4 border-b-2 border-teal-600 pb-2">
            What is Web Penetration Testing?
          </h2>

          {/* Brief Answer */}
          <p className="text-black text-base sm:text-lg md:text-[1.2rem] font-light mb-6">
            Web Penetration Testing is a security assessment method focused on identifying vulnerabilities in web applications and services. As web applications become critical to business operations, ensuring their security is paramount to protect against data breaches, unauthorized access, and other cyber threats.
            <br />
            Web Penetration Testing typically involves:
            <ul className="list-disc list-inside ml-6">
              <li><strong>Vulnerability Scanning:</strong> Automated tools to scan for known vulnerabilities in web applications.</li>
              <li><strong>Manual Testing:</strong> Manual examination of the application to identify security weaknesses not detected by automated tools.</li>
              <li><strong>Authentication Testing:</strong> Assessing the effectiveness of authentication mechanisms and session management.</li>
              <li><strong>Input Validation Testing:</strong> Ensuring that the application correctly handles and sanitizes user inputs to prevent injection attacks.</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}
