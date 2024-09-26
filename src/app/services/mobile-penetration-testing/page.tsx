import Hero from "@/app/components/services/Mobile-Security/hero";
import Overview from "@/app/components/services/Mobile-Security/overview";
import WhySecurity from "@/app/components/services/Mobile-Security/whySecurity";
import Methodology from "@/app/components/services/Mobile-Security/methodology";
import EndBox from "@/app/components/services/Mobile-Security/EndBox";
import ClinetTestimonials from "@/app/components/services/Mobile-Security/ClinetTestimonials";
import CaseStudy from "@/app/components/services/Mobile-Security/casestudies";
import Feature from "@/app/components/services/Mobile-Security/feature";
import ClientsCount from "@/app/components/services/Mobile-Security/clientsCount";

export const metadata = {
  title: "Cyserch | Mobile Security Solutions to Protect Apps and Devices",
  description: "Secure your mobile apps and devices with Cyserch's mobile security services. Identify vulnerabilities, prevent cyber attacks, and protect sensitive data on-the-go."
  };

export default function CloudSecurityPage() {
  return (
    <>
      <Hero />
      <Overview />
      <Feature />
      <Methodology />
      <ClientsCount />
      <WhySecurity />
      <EndBox />
      <ClinetTestimonials />
      <CaseStudy />
    </>
  );
}
