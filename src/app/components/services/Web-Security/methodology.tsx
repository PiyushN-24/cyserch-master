import Image from "next/image";
import webImage from "../../../../../public/images/web_pentest_lifecycle.png"; // Adjust path as needed

export default function WebTestingPage() {
  return (
    <div className="bg-gray-300 flex flex-col md:flex-row items-center justify-between w-full px-6 md:px-12 lg:px-36 py-12 mt-16 sm:mt-0">
      <div className="w-full md:w-3/5 fadeRight md:ml-6"> {/* Added margin-left */}
        <span className="text-teal-500 text-lg md:text-xl font-medium">
          HOW IT WORKS?
        </span>
        <h3 className="text-black text-2xl md:text-4xl font-semibold mt-2 md:mt-4">
          Web Penetration Testing Methodology
        </h3>
        <p className="text-black text-base md:text-lg font-light mt-6">
          Our Web Penetration Testing methodology helps organizations identify and mitigate vulnerabilities within their web applications. We conduct a thorough analysis of your web infrastructure, ensuring comprehensive security for web services and applications.
        </p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:pr-12">
          {[
            { title: "Input Validation Testing", description: "Identify and fix vulnerabilities caused by improper validation of user input." },
            { title: "Authentication & Authorization", description: "Test the authentication mechanisms to ensure strong access control and protection." },
            { title: "Session Management", description: "Evaluate session handling and management to prevent session hijacking attacks." },
            { title: "Cross-Site Scripting (XSS)", description: "Check for vulnerabilities that could allow attackers to inject malicious scripts." },
            { title: "SQL Injection Testing", description: "Ensure that your web applications are safe from SQL injection attacks." },
            { title: "File Upload Security", description: "Analyze the security of file upload mechanisms to prevent malicious file uploads." },
            { title: "Web Application Firewall Testing", description: "Assess the effectiveness of your web application firewall in blocking potential attacks." },
            { title: "Remediation Testing", description: "Re-test your web applications to ensure vulnerabilities have been properly mitigated." }
          ].map((item, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg text-gray-200 hover:bg-cyan-500 transition-colors duration-300 lg:col-span-2">
              <h4 className="text-xl md:text-2xl font-semibold text-white mb-2">{item.title}:</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full md:w-2/5 flex items-center rounded-lg justify-center mt-12 md:mt-0 h-full md:mr-12"> {/* Added margin-right */}
        <Image
          src={webImage}
          alt="Web Penetration Testing Methodology Image"
          className="rounded-lg object-cover w-auto h-auto max-w-full max-h-[500px]" // Ensures image size adjusts automatically while limiting its height
        />
      </div>
    </div>
  );
}
