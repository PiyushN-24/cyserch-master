import Image from "next/image";
import Ansible from "../../../../../public/icons/Ansible.png";
import Docker from "../../../../../public/icons/Docker.png";
import Kubernetes from "../../../../../public/icons/K8s.png";
import SonarQube from "../../../../../public/icons/Sonarqube.png";
import Grafana from "../../../../../public/icons/Grafana.png";
import GitLab from "../../../../../public/icons/GitLab CICD.png";
import Splunk from "../../../../../public/icons/Splunk.png";

export default function DevSecOpsMetrics() {
  return (
    <div className="text-center mt-10 DevSecOpsMetrics">
      <h2 className="text-white text-[2.10rem] font-semibold">
        Key Metrics in <span className="text-[#19FFDB]">DevSecOps Penetration Testing</span>
      </h2>
      <div className="DevSecOpsMetrics-box bg-[#011C3C] p-6 rounded-xl mx-auto mt-10 max-w-screen-lg">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-7 gap-6">
          <div className="DevSecOpsMetrics-card flex flex-col justify-center items-center">
            <Image 
              src={Ansible} 
              alt="Ansible" 
              className="w-32 h-32 md:w-36 md:h-36 object-contain mb-2 shadow-lg rounded-md"
            />
            <span className="text-[white] text-[1.75rem] sm:text-[2rem] font-bold">40+</span>
            <span className="text-[#D9D9D9] text-[0.875rem] sm:text-[1rem] font-light text-center">
              Automated Configurations
            </span>
          </div>

          <div className="DevSecOpsMetrics-card flex flex-col justify-center items-center">
            <Image 
              src={Docker} 
              alt="Docker" 
              className="w-32 h-32 md:w-36 md:h-36 object-contain mb-2 bg-gray-300 shadow-lg rounded-md"
            />
            <span className="text-[white] text-[1.75rem] sm:text-[2rem] font-bold">200+</span>
            <span className="text-[#D9D9D9] text-[0.875rem] sm:text-[1rem] font-light text-center">
              Container Scans
            </span>
          </div>

          <div className="DevSecOpsMetrics-card flex flex-col justify-center items-center">
            <Image 
              src={Kubernetes} 
              alt="Kubernetes" 
              className="w-32 h-32 md:w-36 md:h-36 object-contain mb-2 shadow-lg rounded-md"
            />
            <span className="text-[white] text-[1.75rem] sm:text-[2rem] font-bold">150+</span>
            <span className="text-[#D9D9D9] text-[0.875rem] sm:text-[1rem] font-light text-center">
              Cluster Assessments
            </span>
          </div>

          <div className="DevSecOpsMetrics-card flex flex-col justify-center items-center">
            <Image 
              src={SonarQube} 
              alt="SonarQube" 
              className="w-32 h-32 md:w-36 md:h-36 object-contain mb-2 bg-gray-300 shadow-lg rounded-md"
            />
            <span className="text-[white] text-[1.75rem] sm:text-[2rem] font-bold">300+</span>
            <span className="text-[#D9D9D9] text-[0.875rem] sm:text-[1rem] font-light text-center">
              Code Quality Reviews
            </span>
          </div>

          <div className="DevSecOpsMetrics-card flex flex-col justify-center items-center">
            <Image 
              src={Grafana} 
              alt="Grafana" 
              className="w-32 h-32 md:w-36 md:h-36 object-contain mb-2 shadow-lg rounded-md"
            />
            <span className="text-[white] text-[1.75rem] sm:text-[2rem] font-bold">100+</span>
            <span className="text-[#D9D9D9] text-[0.875rem] sm:text-[1rem] font-light text-center">
              Security Dashboards
            </span>
          </div>

          <div className="DevSecOpsMetrics-card flex flex-col justify-center items-center">
            <Image 
              src={GitLab} 
              alt="GitLab" 
              className="w-32 h-32 md:w-36 md:h-36 object-contain mb-2  shadow-lg rounded-md"
            />
            <span className="text-[white] text-[1.75rem] sm:text-[2rem] font-bold">250+</span>
            <span className="text-[#D9D9D9] text-[0.875rem] sm:text-[1rem] font-light text-center">
              CI/CD Pipelines
            </span>
          </div>

          <div className="DevSecOpsMetrics-card flex flex-col justify-center items-center">
            <Image 
              src={Splunk} 
              alt="Splunk" 
              className="w-32 h-32 md:w-36 md:h-36 object-contain mb-2 shadow-lg rounded-md"
            />
            <span className="text-[white] text-[1.75rem] sm:text-[2rem] font-bold">80+</span>
            <span className="text-[#D9D9D9] text-[0.875rem] sm:text-[1rem] font-light text-center">
              Security Log Analysis
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
