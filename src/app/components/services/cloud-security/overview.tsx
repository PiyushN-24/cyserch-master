"use client"; // Ensures this is a Client Component

import { useEffect, useState } from "react";

export default function CloudPenetrationOverview() {
  const [tools, setTools] = useState<{ src: string; name: string }[]>([]);

  useEffect(() => {
    const cloudPenTestingTools: { src: string; name: string }[] = [
      { src: "/icons/Inspector.png", name: "AWS Inspector" },
      { src: "/icons/Nmap.png", name: "Nmap" },
      { src: "/icons/Burpsuite.png", name: "Burp Suite" },
      { src: "/icons/Wireshark.png", name: "Wireshark" },
      { src: "/icons/Nessus.png", name: "Nessus" },
      { src: "/icons/Metasploit.png", name: "Metasploit" },
    ];
    setTools(cloudPenTestingTools);
  }, []);

  return (
    <div className="bg-gray-300 text-left px-4 sm:px-6 md:px-8 lg:px-[9rem] py-6 sm:py-8 md:py-10 max-h-[150vh] overflow-auto">
      {/* Heading for Tools */}
      <h2 className="text-lg sm:text-xl md:text-[1.8rem] font-semibold mt-6 flex flex-col items-center">
        <span className="text-black">Tools used in</span>
        <span className="text-teal-600">Cloud Penetration Testing</span>
      </h2>

      {/* Sliding animation for Cloud PenTesting tools */}
      <div className="overflow-hidden mt-6">
        <div className="animate-slide text-black flex space-x-8 md:space-x-12 lg:space-x-20">
          {tools.map((tool, index) => (
            <div key={index} className="flex flex-col items-center transform transition-transform duration-300 hover:scale-110">
              <img
                src={tool.src}
                alt={`Cloud Penetration Testing Tool ${index}`}
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
            src="/images/what_is_cloud_penetration.png" // Make sure this path is correct
            alt="Cloud Penetration Testing"
            className="w-[500px] h-[500px] rounded-md object-cover" // Fixed size for consistency
            style={{ width: '500px', height: '500px' }} // Fixed size for consistency
          />
          <p className="text-black text-base sm:text-lg md:text-[1.2rem] font-light mb-6">
            For more details on Cloud Penetration Testing and its importance, you can explore our detailed blog post on <a href="/blog/Cloud-Security:-Best-Practices-and-Solutions-for-2024" target="_blank" className="text-blue-500 hover:underline">Cloud Security - Best Practices and Solutions for 2024</a>.
          </p>
        </div>

        {/* Information Section */}
        <div className="w-full flex flex-col justify-start space-y-8 p-6 bg-gray-100 rounded-lg shadow-lg">
          <h2 className="text-black text-lg sm:text-xl md:text-[1.8rem] font-semibold mb-4 border-b-2 border-teal-600 pb-2">
            What is Cloud Penetration Testing?
          </h2>

          {/* Brief Answer */}
          <p className="text-black text-base sm:text-lg md:text-[1.2rem] font-light mb-6">
            Cloud Penetration Testing is a methodical security testing process designed to identify vulnerabilities and risks within cloud-based infrastructures and applications. With businesses increasingly moving their critical services to the cloud, penetration testing ensures that these cloud environments are secure from external and internal threats.
            <br />
            Cloud Penetration Testing typically involves:
            <ul className="list-disc list-inside ml-6">
              <li><strong>Infrastructure Security:</strong> Testing the underlying cloud infrastructure, such as virtual machines, storage, and networking, for security flaws.</li>
              <li><strong>Application Security:</strong> Evaluating the security of cloud-hosted applications, APIs, and databases.</li>
              <li><strong>Compliance Validation:</strong> Ensuring that the cloud environment complies with industry regulations and security standards.</li>
              <li><strong>Risk Mitigation:</strong> Proactively identifying vulnerabilities before they can be exploited by malicious actors.</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}
