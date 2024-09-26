import Hero from "@/app/components/services/DAST/hero";
import Overview from "@/app/components/services/DAST/overview";
import WhyCloudPentesting from "@/app/components/services/DAST/whySecurity";
import Methodology from "@/app/components/services/DAST/methodology";
import Offers from "@/app/components/services/DAST/offers";
import EndBox from "@/app/components/services/DAST/EndBox";
import ClinetTestimonials from "@/app/components/services/DAST/ClinetTestimonials";
import CaseStudy from "@/app/components/services/DAST/casestudies";
import ClientsCount from "@/app/components/services/DAST/clientsCount";

export const metadata = {
  title: "Cyserch | DAST Experts for Comprehensive Web Application Security",
  description: "Strengthen your web applications with Cyserch's DAST services. Identify vulnerabilities in real-time, simulate attacks, and receive actionable security recommendations."
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
