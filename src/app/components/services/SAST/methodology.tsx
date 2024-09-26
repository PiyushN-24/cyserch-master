import Image from "next/image";
import sastImage from "../../../../../public/images/static_application_security_testing.png"; // Adjust path as needed

export default function SASTMethodology() {
  return (
    <div className="bg-gray-300 flex flex-col md:flex-row items-center justify-between w-full px-6 md:px-12 lg:px-36 py-12 mt-16 sm:mt-0">
      <div className="w-full md:w-3/5 fadeLeft">
        <span className="text-teal-500 text-lg md:text-xl font-medium">
          HOW IT WORKS?
        </span>
        <h3 className="text-black text-2xl md:text-4xl font-semibold mt-2 md:mt-4">
          Static Application Security Testing (SAST) Methodology
        </h3>
        <p className="text-black text-base md:text-lg font-light mt-6">
          Our Static Application Security Testing (SAST) process focuses on analyzing your applications source code and configuration to identify vulnerabilities before deployment. This proactive approach helps secure your application by detecting and addressing issues early in the development cycle.
        </p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:pr-12">
          {[
            { title: "Code Review", description: "Examine the source code for security vulnerabilities and adherence to best coding practices." },
            { title: "Configuration Analysis", description: "Analyze configuration files and settings for potential security misconfigurations." },
            { title: "Dependency Checking", description: "Identify and assess risks associated with third-party libraries and dependencies." },
            { title: "Static Code Analysis", description: "Utilize automated tools to scan the codebase for known security issues and vulnerabilities." },
            { title: "Threat Modeling", description: "Identify potential threats and attack vectors based on the application's architecture and code." },
            { title: "Compliance Verification", description: "Ensure the application adheres to relevant security standards and compliance requirements." },
            { title: "Report Generation", description: "Produce comprehensive reports detailing identified vulnerabilities, their impact, and suggested remediation steps." },
            { title: "Remediation Validation", description: "Reassess the application to confirm that identified issues have been addressed and resolved." }
          ].map((item, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg text-gray-200 hover:bg-cyan-500 transition-colors duration-300 lg:col-span-2">
              <h4 className="text-xl md:text-2xl font-semibold text-white mb-2">{item.title}:</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full md:w-2/5 flex items-center rounded-lg justify-center mt-12 md:mt-0 h-full">
        <Image
          src={sastImage}
          alt="Static Application Security Testing Methodology Image"
          className="rounded-lg object-cover w-auto h-auto max-w-full max-h-[500px]" // Ensures image size adjusts automatically while limiting its height
        />
      </div>
    </div>
  );
}
