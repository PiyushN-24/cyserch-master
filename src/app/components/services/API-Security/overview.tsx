"use client"; // Ensures this is a Client Component

import { useEffect, useState } from "react";

export default function APIPenetrationOverview() {
  const [tools, setTools] = useState<{ src: string; name: string }[]>([]);

  useEffect(() => {
    const apiPenTestingTools: { src: string; name: string }[] = [
      { src: "/icons/Postman.png", name: "Postman" },
      { src: "/icons/OWASPZAP.png", name: "OWASP ZAP" },
      { src: "/icons/Burpsuite.png", name: "Burp Suite" },
      { src: "/icons/swagger.svg", name: "Swagger" },
      { src: "/icons/KatalonStudio.png", name: "Katalon Studio" },
      { src: "/icons/SoapUI.png", name: "SoapUI" },
    ];
    setTools(apiPenTestingTools);
  }, []);

  return (
    <div className="bg-gray-300 text-left px-4 sm:px-6 md:px-8 lg:px-[9rem] py-6 sm:py-8 md:py-10 max-h-[150vh] overflow-auto">
      {/* Heading for Tools */}
      <h2 className="text-lg sm:text-xl md:text-[1.8rem] font-semibold mt-6 flex flex-col items-center">
        <span className="text-black">Tools used in</span>
        <span className="text-teal-600">API Penetration Testing</span>
      </h2>

      {/* Sliding animation for API PenTesting tools */}
      <div className="overflow-hidden mt-6">
        <div className="animate-slide text-black flex space-x-8 md:space-x-12 lg:space-x-20">
          {tools.map((tool, index) => (
            <div key={index} className="flex flex-col items-center transform transition-transform duration-300 hover:scale-110">
              <img
                src={tool.src}
                alt={`API Penetration Testing Tool ${index}`}
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
            src="/images/what_is_api_penetration.png" // Make sure this path is correct
            alt="API Penetration Testing"
            className="w-full max-w-[500px] h-auto rounded-md object-cover" // Responsive width and automatic height
          />
          <p className="text-black text-base sm:text-lg md:text-[1.2rem] font-light mb-6">
            For more details on API Penetration Testing and its significance, you can explore our comprehensive blog post on <a href="/blog/Cloud-Security:-Best-Practices-and-Solutions-for-2024" target="_blank" className="text-blue-500 hover:underline">API Security - Best Practices and Solutions for 2024</a>.
          </p>
        </div>
        {/* Information Section */}
        <div className="w-full flex flex-col justify-start space-y-8 p-6 bg-gray-100 rounded-lg shadow-lg">
          <h2 className="text-black text-lg sm:text-xl md:text-[1.8rem] font-semibold mb-4 border-b-2 border-teal-600 pb-2">
            What is API Penetration Testing?
          </h2>

          {/* Brief Answer */}
          <p className="text-black text-base sm:text-lg md:text-[1.2rem] font-light mb-6">
            API Penetration Testing is a critical security assessment designed to discover vulnerabilities and potential exploits in application programming interfaces (APIs). As APIs become integral to modern applications, ensuring their security is crucial to protecting sensitive data and maintaining system integrity.
            <br />
            API Penetration Testing typically involves:
            <ul className="list-disc list-inside ml-6">
              <li><strong>Endpoint Security:</strong> Evaluating the security of API endpoints to identify weaknesses and vulnerabilities.</li>
              <li><strong>Authentication and Authorization:</strong> Testing the API’s authentication mechanisms and access controls to ensure they are robust.</li>
              <li><strong>Data Security:</strong> Assessing how the API handles sensitive data, including encryption and data leakage risks.</li>
              <li><strong>Error Handling:</strong> Examining how the API manages errors and unexpected inputs, ensuring it does not expose sensitive information.</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}
