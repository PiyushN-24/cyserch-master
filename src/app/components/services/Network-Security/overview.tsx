"use client"; // Ensures this is a Client Component

import { useEffect, useState } from "react";

export default function NetworkPenetrationOverview() {
  const [tools, setTools] = useState<{ src: string; name: string }[]>([]);

  useEffect(() => {
    const networkPenTestingTools: { src: string; name: string }[] = [
      { src: "/icons/Nmap.png", name: "Nmap" },
      { src: "/icons/Metasploit.png", name: "Metasploit" },
      { src: "/icons/Nessus.png", name: "Nessus" },
      { src: "/icons/Wireshark.png", name: "Wireshark" },
      { src: "/icons/Netcat.svg", name: "Netcat" },
      { src: "/icons/Burpsuite.png", name: "Burp Suite" },
    ];
    setTools(networkPenTestingTools);
  }, []);

  return (
    <div className="bg-gray-300 text-left px-4 sm:px-6 md:px-8 lg:px-[9rem] py-6 sm:py-8 md:py-10 max-h-[150vh] overflow-auto">
      {/* Heading for Tools */}
      <h2 className="text-lg sm:text-xl md:text-[1.8rem] font-semibold mt-6 flex flex-col items-center">
        <span className="text-black">Tools used in</span>
        <span className="text-teal-600">Network Penetration Testing</span>
      </h2>

      {/* Sliding animation for Network PenTesting tools */}
      <div className="overflow-hidden mt-6">
        <div className="animate-slide text-black flex space-x-8 md:space-x-12 lg:space-x-20">
          {tools.map((tool, index) => (
            <div key={index} className="flex flex-col items-center transform transition-transform duration-300 hover:scale-110">
              <img
                src={tool.src}
                alt={`Network Penetration Testing Tool ${index}`}
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
            src="/images/what_is_network_penetration.png" // Make sure this path is correct
            alt="Network Penetration Testing"
            className="w-full max-w-[500px] h-auto rounded-md object-cover" // Responsive width and automatic height
          />
          <p className="text-black text-base sm:text-lg md:text-[1.2rem] font-light mb-6">
            For more details on Network Penetration Testing and its significance, you can explore our comprehensive blog post on <a href="/blog/Common-Vulnerabilities-in-Networks-:-A-Comprehensive-Guide" target="_blank" className="text-blue-500 hover:underline">Common Vulnerabilities in Networks: A Comprehensive Guide</a>.
          </p>
        </div>
        {/* Information Section */}
        <div className="w-full flex flex-col justify-start space-y-8 p-6 bg-gray-100 rounded-lg shadow-lg">
          <h2 className="text-black text-lg sm:text-xl md:text-[1.8rem] font-semibold mb-4 border-b-2 border-teal-600 pb-2">
            What is Network Penetration Testing?
          </h2>

          {/* Brief Answer */}
          <p className="text-black text-base sm:text-lg md:text-[1.2rem] font-light mb-6">
            Network Penetration Testing involves simulating attacks on a network to identify and exploit vulnerabilities. This process helps in assessing the security posture of your network infrastructure, ensuring that it can withstand potential cyber threats.
            <br />
            Network Penetration Testing typically includes:
            <ul className="list-disc list-inside ml-6">
              <li><strong>Network Scanning:</strong> Identifying active devices, services, and potential vulnerabilities within the network.</li>
              <li><strong>Vulnerability Assessment:</strong> Evaluating vulnerabilities in network services and configurations.</li>
              <li><strong>Exploitation:</strong> Attempting to exploit vulnerabilities to gain unauthorized access or escalate privileges.</li>
              <li><strong>Post-Exploitation:</strong> Exploring further attack vectors and maintaining access to compromised systems.</li>
              <li><strong>Reporting:</strong> Documenting findings, their impact, and providing recommendations for remediation.</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}
