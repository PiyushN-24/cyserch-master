import Image from "next/image";
import dastImage from "../../../../../public/images/dynamic_application_security_testing.png"; // Adjust path as needed

export default function DASTMethodology() {
  return (
    <div className="bg-gray-300 flex flex-col md:flex-row items-center justify-between w-full px-6 md:px-12 lg:px-36 py-12 mt-16 sm:mt-0">
      <div className="w-full md:w-2/5 flex items-center rounded-lg justify-center mt-12 md:mt-0 h-full md:mr-12"> {/* Added margin-right */}
        <Image
          src={dastImage}
          alt="Dynamic Application Security Testing Methodology Image"
          className="rounded-lg object-cover w-auto h-auto max-w-full max-h-[500px]" // Ensures image size adjusts automatically while limiting its height
        />
      </div>
      <div className="w-full md:w-3/5 fadeRight md:ml-6"> {/* Added margin-left */}
        <span className="text-teal-500 text-lg md:text-xl font-medium">
          HOW IT WORKS?
        </span>
        <h3 className="text-black text-2xl md:text-4xl font-semibold mt-2 md:mt-4">
          Dynamic Application Security Testing (DAST) Methodology
        </h3>
        <p className="text-black text-base md:text-lg font-light mt-6">
          Our Dynamic Application Security Testing (DAST) process focuses on analyzing your applications runtime behavior to detect vulnerabilities in real-time. This allows us to identify potential security issues that manifest during the applications execution, providing an extra layer of defense.
        </p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:pr-12">
          {[
            { title: "Initial Reconnaissance", description: "Gather information about the application's functionality and architecture to identify potential entry points." },
            { title: "Vulnerability Scanning", description: "Automatically scan the application for known vulnerabilities such as SQL injection, XSS, and others." },
            { title: "Input Validation Testing", description: "Test input fields to ensure they are properly sanitized and do not expose security risks." },
            { title: "Session Management Testing", description: "Analyze how the application handles user sessions to detect weaknesses like session fixation or hijacking." },
            { title: "Authentication & Authorization", description: "Ensure that the application properly implements authentication and authorization mechanisms to prevent unauthorized access." },
            { title: "Error Handling & Logging", description: "Examine how the application handles errors and logs events to ensure that sensitive data is not exposed." },
            { title: "Report Generation", description: "Produce detailed reports outlining the vulnerabilities found, their severity, and suggested remediation steps." },
            { title: "Remediation Validation", description: "Re-test the application to ensure that identified vulnerabilities have been effectively addressed." }
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