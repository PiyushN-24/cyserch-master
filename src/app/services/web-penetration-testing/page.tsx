import Hero from "@/app/components/services/Web-Security/hero";
import Overview from "@/app/components/services/Web-Security/overview";
import WhyCloudPentesting from "@/app/components/services/Web-Security/whySecurity";
import Methodology from "@/app/components/services/Web-Security/methodology";
import Offers from "@/app/components/services/Web-Security/offers";
import EndBox from "@/app/components/services/Web-Security/EndBox";
import ClinetTestimonials from "@/app/components/services/Web-Security/ClinetTestimonials";
import CaseStudy from "@/app/components/services/Web-Security/casestudies";
import ClientCount from "@/app/components/services/Web-Security/clientsCount";

export const metadata = {
  title: "Cyserch | Expert Web Penetration Testing for Enhanced Security",
  description: "Uncover vulnerabilities in your website with Cyserch's web penetration testing. Our experts simulate attacks to identify weaknesses and provide actionable security recommendations."
  };

export default function CloudSecurityPage() {

   
  return (
    <>
      <Hero />
      <Overview />
      <WhyCloudPentesting />
      <Methodology />
      <ClientCount />
      <Offers />
      <EndBox />
      <ClinetTestimonials />
      <CaseStudy />
    </>
  );
}
