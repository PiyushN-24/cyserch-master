import Image from "next/image";
import ModelIntegrity from "../../../../../public/icons/identity-access-management.svg";
import AdversarialResilience from "../../../../../public/icons/Mask-Group.svg";
import DataPipelineSecurity from "../../../../../public/icons/Cyber Security.png";

export default function WhyAIMLSecurity() {
  return (
    <div className="px-4 sm:px-[9rem] py-4 sm:py-[3rem]">
      <h2 className="text-white text-[2.18rem] font-semibold mt-3 sm:mb-[1rem]">
        Everything is taken care of for your AI-ML application.
      </h2>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 p-4 sm:p-[3rem]">
        <div className="flex flex-col items-center justify-start w-full sm:w-1/3 h-[25rem] sm:h-[22rem] rounded-lg bg-[#011c3c] p-4">
          <div className="flex gap-3 items-center">
            <Image src={ModelIntegrity} alt="Model Integrity" className="w-12 h-12" />
          </div>
          <h3 className="text-white text-[1.1rem] font-semibold mt-3">
            Model Integrity Testing
          </h3>
          <p className="text-[#a39d9d] text-lg font-light leading-normal mt-3 mb-2">
            Ensure the robustness of your AI-ML models with our Model Integrity Testing. Our experts analyze your models architecture and data pipelines, identifying and mitigating vulnerabilities such as data poisoning, adversarial inputs, or biased decision-making.
          </p>
        </div>

        <div className="flex flex-col items-center justify-start w-full sm:w-1/3 h-[25rem] sm:h-[22rem] rounded-lg bg-[#011c3c] p-4">
          <div className="flex gap-3 items-center">
            <Image src={AdversarialResilience} alt="Adversarial Resilience" className="w-12 h-12" />
          </div>
          <h3 className="text-white text-[1.1rem] font-semibold mt-3">
            Adversarial Resilience Assessment
          </h3>
          <p className="text-[#a39d9d] text-lg font-light leading-normal mt-3 mb-2">
            Strengthen your AI-ML systems against potential threats with our Adversarial Resilience Assessment. By simulating various attack scenarios, we evaluate your models ability to withstand adversarial attempts to manipulate outcomes or expose sensitive data.
          </p>
        </div>

        <div className="flex flex-col items-center justify-start w-full sm:w-1/3 h-[25rem] sm:h-[22rem] rounded-lg bg-[#011c3c] p-4">
          <div className="flex gap-3 items-center">
            <Image src={DataPipelineSecurity} alt="Data Pipeline Security" className="w-12 h-12" />
          </div>

          <h3 className="text-white text-[1.1rem] font-semibold mt-3">
            Data Pipeline Security Evaluation
          </h3>
          <p className="text-[#a39d9d] text-lg font-light leading-normal mt-3 mb-2">
            Protect the lifeblood of your AI-ML applications with our Data Pipeline Security Evaluation. We rigorously examine the flow of data into your models, identifying weaknesses that could be exploited to corrupt training data or infer private information, ensuring end-to-end security of your AI-ML environment.
          </p>
        </div>
      </div>
    </div>
  );
}
