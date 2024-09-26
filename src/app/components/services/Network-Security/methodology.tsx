import Image from "next/image";
import networkPenTest from "../../../../../public/images/network_penetration_testing.png";

export default function NetworkPenTestMethodology() {
  return (
    <div className="bg-gray-300 flex flex-col md:flex-row items-center justify-between w-full px-6 md:px-12 lg:px-36 py-12 mt-16 sm:mt-0">
      <div className="w-full md:w-2/5 flex items-center rounded-lg justify-center mt-12 md:mt-0 h-full">
        <Image
          src={networkPenTest}
          alt="Network Penetration Testing Methodology Image"
          className="rounded-lg object-cover w-auto h-auto max-w-full max-h-[500px]" // Ensures image size adjusts automatically while limiting its height
        />
      </div>
      <div className="w-full md:w-3/5 fadeRight">
        <span className="text-teal-500 text-lg md:text-xl font-medium">
          HOW IT WORKS?
        </span>
        <h3 className="text-black text-2xl md:text-4xl font-semibold mt-2 md:mt-4">
          Network Penetration Testing Methodology
        </h3>
        <p className="text-black text-base md:text-lg font-light mt-6">
          Our Network Penetration Testing process focuses on identifying and exploiting vulnerabilities in your network infrastructure. This ensures that your network is secure against potential cyber-attacks and unauthorized access.
        </p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:pr-12">
          {[
            { title: "Reconnaissance", description: "Gather information about the network infrastructure and assets to be tested." },
            { title: "Scanning", description: "Identify active hosts, services, and potential vulnerabilities through automated and manual scans." },
            { title: "Vulnerability Analysis", description: "Analyze identified vulnerabilities to assess potential risks and their severity." },
            { title: "Exploitation", description: "Attempt to exploit vulnerabilities to gain unauthorized access to network resources." },
            { title: "Privilege Escalation", description: "Explore ways to escalate privileges and gain deeper access within the network." },
            { title: "Post-Exploitation", description: "Maintain access and explore further attack vectors within compromised systems." },
            { title: "Reporting", description: "Generate detailed reports with identified vulnerabilities, their impact, and recommended remediation." },
            { title: "Remediation Verification", description: "Conduct follow-up testing to ensure vulnerabilities have been properly mitigated." }
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
