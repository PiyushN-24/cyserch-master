import Image from "next/image";
import mobilePenTest from "../../../../../public/images/mobile_penetration_testing.png";

export default function MobilePenTestMethodology() {
  return (
    <div className="bg-gray-300 flex flex-col md:flex-row items-center justify-between w-full px-6 md:px-12 lg:px-36 py-12 mt-16 sm:mt-0">
      <div className="w-full md:w-3/5 fadeLeft">
        <span className="text-teal-500 text-lg md:text-xl font-medium">
          HOW IT WORKS?
        </span>
        <h3 className="text-black text-2xl md:text-4xl font-semibold mt-2 md:mt-4">
          Mobile Penetration Testing Methodology
        </h3>
        <p className="text-black text-base md:text-lg font-light mt-6">
          Our Mobile Penetration Testing process follows a comprehensive approach to identify vulnerabilities in mobile applications and their associated backend infrastructure. This ensures that your mobile apps are secure from various threats.
        </p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:pr-12">
          {[
            { title: "Planning", description: "Define the scope, objectives, and the mobile app environment to be tested." },
            { title: "Enumeration", description: "Identify mobile app functionalities and backend services to map the attack surface." },
            { title: "Data Storage Testing", description: "Check for insecure data storage vulnerabilities, ensuring sensitive data is protected." },
            { title: "Authentication Testing", description: "Assess the security of authentication mechanisms to prevent unauthorized access." },
            { title: "Network Communication", description: "Ensure secure communication between the mobile app and backend services." },
            { title: "Reverse Engineering", description: "Evaluate the app for vulnerabilities by decompiling and analyzing the code." },
            { title: "Dynamic Analysis", description: "Perform real-time analysis to identify runtime security issues like tampering." },
            { title: "Reporting", description: "Generate a comprehensive report highlighting the vulnerabilities found, their impact, and suggested mitigations." }
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
          src={mobilePenTest}
          alt="Mobile Penetration Testing Methodology Image"
          className="rounded-lg object-cover w-auto h-auto max-w-full max-h-[500px]" // Ensures image size adjusts automatically while limiting its height
        />
      </div>
    </div>
  );
}
