import Hero from "@/app/components/services/AI-ML-Security/hero";
import Overview from "@/app/components/services/AI-ML-Security/overview";
import WhyCloudPentesting from "@/app/components/services/AI-ML-Security/whySecurity";
import Methodology from "@/app/components/services/AI-ML-Security/methodology";
import Offers from "@/app/components/services/AI-ML-Security/offers";
import EndBox from "@/app/components/services/AI-ML-Security/EndBox";
import ClinetTestimonials from "@/app/components/services/AI-ML-Security/ClinetTestimonials";
import CaseStudy from "@/app/components/services/AI-ML-Security/casestudies"
import ClientsCount from "@/app/components/services/AI-ML-Security/clientsCount"

export const metadata = {
  title: "Cyserch | Secure AI/ML Solutions for Advanced Data Protection",
  description: "Protect your AI/ML models with Cyserch's advanced security solutions. We identify risks, strengthen defenses, and ensure secure data handling. Learn more today!"
  };

export default function CloudSecurityPage() {

   
  return (
    <>
      <Hero />
      <Overview />
      <WhyCloudPentesting />
      <Methodology />
      <ClientsCount />
      <Offers />
      <EndBox />
      <ClinetTestimonials />
      <CaseStudy />
    </>
  );
}
