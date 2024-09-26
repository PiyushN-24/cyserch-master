import Image from "next/image";
import apiPenTest from "../../../../../public/images/what_is_cloud_penetration.png";

export default function Methodology() {
  return (
    <div className="bg-gray-300 flex flex-col md:flex-row items-center justify-between w-full px-6 md:px-12 lg:px-36 py-12 mt-16 sm:mt-0">
      <div className="w-full md:w-2/5 flex items-center rounded-lg justify-center mt-12 md:mt-0 h-full">
        <Image
          src={apiPenTest} 
          alt="API Penetration Testing Methodology Image" 
          className="rounded-lg object-cover w-auto h-auto max-w-full max-h-[500px]" // Ensures image size adjusts automatically while limiting its height
        />
      </div>
      <div className="w-full md:w-3/5 fadeRight">
        <span className="text-teal-500 text-lg md:text-xl font-medium">
          HOW IT WORKS?
        </span>
        <h3 className="text-black text-2xl md:text-4xl font-semibold mt-2 md:mt-4">
          API Penetration Testing Methodology
        </h3>
        <p className="text-black text-base md:text-lg font-light mt-6">
          Our API Penetration Testing process follows a structured methodology to uncover vulnerabilities and security gaps in your APIs. This process ensures that APIs are secure and resistant to potential threats.
        </p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:pr-12">
          {[
            { title: "Planning", description: "Define the scope, objectives, and testing parameters for the APIs." },
            { title: "Enumeration", description: "Identify all API endpoints and methods to understand the attack surface." },
            { title: "Authentication Testing", description: "Assess the security of authentication mechanisms to prevent unauthorized access." },
            { title: "Authorization Testing", description: "Verify that users have appropriate access permissions and cannot access unauthorized data." },
            { title: "Input Validation", description: "Test how well the API validates and sanitizes user input to prevent injection attacks." },
            { title: "Rate Limiting", description: "Evaluate rate limiting and throttling mechanisms to protect against abuse and denial-of-service attacks." },
            { title: "Error Handling", description: "Examine how the API handles errors and whether sensitive information is exposed through error messages." },
            { title: "Reporting", description: "Generate a detailed report outlining discovered vulnerabilities, their impact, and recommendations for remediation." }
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
