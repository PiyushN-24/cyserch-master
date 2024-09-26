import Hero from "@/app/components/services/DevSecOps-security/hero";
import Overview from "@/app/components/services/DevSecOps-security/overview";
import WhyCloudPentesting from "@/app/components/services/DevSecOps-security/whySecurity";
import Methodology from "@/app/components/services/DevSecOps-security/methodology";
import Offers from "@/app/components/services/DevSecOps-security/offers";
import EndBox from "@/app/components/services/DevSecOps-security/EndBox";
import ClinetTestimonials from "@/app/components/services/DevSecOps-security/ClinetTestimonials";
import CaseStudy from "@/app/components/services/DevSecOps-security/casestudies";
import Features from "@/app/components/services/DevSecOps-security/Industrys";
import TechStackIntegration from "@/app/components/services/DevSecOps-security/TechStackIntegration";


export const metadata = {
  title: "Cyserch | DevSecOps Solutions for Secure CI/CD Pipelines",
  description: "Integrate security into your DevOps with Cyserch's DevSecOps services. Automate security checks, identify vulnerabilities early, and enhance your CI/CD pipeline security."
  };

export default function CloudSecurityPage() {

   
  return (
    <>
      <Hero />
      <Overview />
      <WhyCloudPentesting />
      <Features />
      <Methodology />
      <Offers />
      <TechStackIntegration />
      <EndBox />
      <ClinetTestimonials />
      <CaseStudy />
    </>
  );
}
