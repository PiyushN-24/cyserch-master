import Image from "next/image";
import CICD from "../../../../../public/icons/Code.png";
import Automation from "../../../../../public/icons/infrastructure.svg";
import Monitering from "../../../../../public/icons/Free access to the PTaaS platform.svg";

export default function WhyCloudSecurity() {
  return (
    <div className="px-4 sm:px-[9rem] py-4 sm:py-[3rem]">
      <h2 className="text-white text-[2.18rem] font-semibold mt-3 sm:mb-[1rem]">
      Everything is taken care of for your development process.
      </h2>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 p-4 sm:p-[3rem]">
        <div className="flex flex-col items-center justify-start w-full sm:w-1/3 h-[25rem] sm:h-[22rem] rounded-lg bg-[#011c3c] p-4">
          <div className="flex gap-3 items-center">
            <Image src={CICD} alt="card" className="w-12 h-12" />
          </div>
          <h3 className="text-white text-[1.1rem] font-semibold mt-3">
          Continuous Integration Security 
          </h3>
          <p className="text-[#a39d9d] text-lg font-light leading-normal mt-3 mb-2">
          Embed security into your CI/CD pipelines with our Continuous Integration Security service. Our experts implement automated security checks, ensuring that vulnerabilities are detected and addressed early in the process, reducing risks.
          </p>
        </div>
        <div className="flex flex-col items-center justify-start w-full sm:w-1/3 h-[25rem] sm:h-[22rem] rounded-lg bg-[#011c3c] p-4">
          <div className="flex gap-3 items-center">
            <Image src={Automation} alt="card" className="w-12 h-12" />
          </div>
          <h3 className="text-white text-[1.1rem] font-semibold mt-3">
          Automated Security Scanning
          </h3>
          <p className="text-[#a39d9d] text-lg font-light leading-normal mt-3 mb-2">
          Utilize Automated Security Scanning to identify vulnerabilities in real-time. Our tools and techniques scan code and dependencies automatically, providing instant feedback and remediation suggestions to secure your applications continuously.
          </p>
        </div>
        <div className="flex flex-col items-center justify-start w-full sm:w-1/3 h-[25rem] sm:h-[22rem] rounded-lg bg-[#011c3c] p-4">
          <div className="flex gap-3 items-center">
            <Image src={Monitering} alt="card" className="w-12 h-12" />
          </div>
          <h3 className="text-white text-[1.1rem] font-semibold mt-3">
          Compliance Monitoring
          </h3>
          <p className="text-[#a39d9d] text-lg font-light leading-normal mt-3 mb-2">
          Stay compliant with industry standards and regulations through our Compliance Monitoring. We continuously review your development practices and deployments to ensure adherence to security policies and compliance requirements.
          </p>
        </div>
      </div>
    </div>
  );
}


