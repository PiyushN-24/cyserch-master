"use client"; // Ensures this is a Client Component

import { useEffect, useState } from "react";

export default function CloudSecurityOverview() {
  const [tools, setTools] = useState<{ src: string; name: string }[]>([]);

  useEffect(() => {
    const devSecOpsTools: { src: string; name: string }[] = [
      { src: "/icons/Ansible.png", name: "Ansible" },
      { src: "/icons/Docker.png", name: "Docker" },
      { src: "/icons/K8s.png", name: "Kubernetes" },
      { src: "/icons/Sonarqube.png", name: "SonarQube" },
      { src: "/icons/Grafana.png", name: "Grafana" },
      { src: "/icons/GitLab CICD.png", name: "GitLab CI/CD" },
      { src: "/icons/Splunk.png", name: "Splunk" },
    ];
    setTools(devSecOpsTools);
  }, []);

  return (
    <div className="bg-gray-300 text-left px-4 sm:px-6 md:px-8 lg:px-[9rem] py-6 sm:py-8 md:py-10 max-h-[150vh] overflow-auto">
      {/* Heading for Tools */}
      <h2 className="text-lg sm:text-xl md:text-[1.8rem] font-semibold mt-6 flex flex-col items-center">
        <span className="text-black">Tools used in</span>
        <span className="text-teal-600">DevSecOps Penetration Testing</span>
      </h2>

      {/* Sliding animation for DevSecOps tools */}
      <div className="overflow-hidden mt-6">
        <div className="animate-slide text-black flex space-x-8 md:space-x-12 lg:space-x-20">
          {tools.map((tool, index) => (
            <div key={index} className="flex flex-col items-center transform transition-transform duration-300 hover:scale-110">
              <img
                src={tool.src}
                alt={`DevSecOps Tool ${index}`}
                className="w-32 h-32 md:w-36 md:h-36 object-contain mb-2 shadow-lg rounded-md"
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
            src="/images/what_is_devsecops.png" // Make sure this path is correct
            alt="DevSecOps Testing"
            className="max-w-full h-auto rounded-md"
          />
          <p className="text-black text-base sm:text-lg md:text-[1.2rem] font-light mb-6">
            For a deeper dive into DevSecOps and its role in penetration testing, you can refer to the detailed blog on <a href="/blog/Implement-DevSecOps-Seamlessly-in-Your-Organization-in-2024" target="_blank" className="text-blue-500 hover:underline">Implement DevSecOps Seamlessly in your Organization</a>.
          </p>
        </div>

        {/* Information Section */}
        <div className="w-full flex flex-col justify-start space-y-8 p-6 bg-gray-100 rounded-lg shadow-lg">
          <h2 className="text-black text-lg sm:text-xl md:text-[1.8rem] font-semibold mb-4 border-b-2 border-teal-600 pb-2">
            What is meant by DevSecOps Penetration Testing?
          </h2>

          {/* Brief Answer */}
          <p className="text-black text-base sm:text-lg md:text-[1.2rem] font-light mb-6">
            DevSecOps Penetration Testing is a comprehensive approach that integrates security testing into the DevOps process. This integration ensures that security is not an afterthought but a core component of the development and deployment lifecycle. By incorporating security testing early in the development cycle, organizations can proactively identify and mitigate vulnerabilities before they can be exploited by malicious actors. This approach fosters a culture of security awareness and continuous improvement, enabling teams to address security issues in real time rather than reactively.
            <br />
            Key aspects of DevSecOps Penetration Testing include:
            <ul className="list-disc list-inside ml-6">
              <li><strong>Continuous Security:</strong> Security is embedded throughout the development pipeline, from code writing to deployment.</li>
              <li><strong>Early Detection:</strong> Vulnerabilities are identified and addressed during the development phase, reducing the risk of security breaches.</li>
              <li><strong>Automated Testing:</strong> Automated tools and scripts are used to perform security assessments efficiently and consistently.</li>
              <li><strong>Collaboration:</strong> DevSecOps fosters collaboration between development, security, and operations teams to address security concerns proactively.</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}
