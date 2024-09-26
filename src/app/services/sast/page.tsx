import Hero from "@/app/components/services/SAST/hero";
import Overview from "@/app/components/services/SAST/overview";
import WhyCloudPentesting from "@/app/components/services/SAST/whySecurity";
import Methodology from "@/app/components/services/SAST/methodology";
import Offers from "@/app/components/services/SAST/offers";
import EndBox from "@/app/components/services/SAST/EndBox";
import ClinetTestimonials from "@/app/components/services/SAST/ClinetTestimonials";
import CaseStudy from "@/app/components/services/SAST/casestudies";
import ClientsCount from "@/app/components/services/SAST/clientsCount";

export const metadata = {
  title: "Cyserch | Expert SAST for Comprehensive Application Security",
  description: "Enhance your application security with Cyserch's SAST services. Detect vulnerabilities in your code, fix issues early, and ensure robust protection with our expert solutions."
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
