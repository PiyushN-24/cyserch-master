import Hero from "@/app/components/services/API-Security/hero";
import Overview from "@/app/components/services/API-Security/overview";
import WhyCloudPentesting from "@/app/components/services/API-Security/whySecurity";
import Methodology from "@/app/components/services/API-Security/methodology";
import EndBox from "@/app/components/services/API-Security/EndBox";
import ClinetTestimonials from "@/app/components/services/API-Security/ClinetTestimonials";
import CaseStudy from "@/app/components/services/API-Security/casestudies"
import Feature from "@/app/components/services/API-Security/feature"
import ClientCount from "@/app/components/services/API-Security/clientsCount"

export const metadata = {
  title: "Cyserch | Expert API Penetration Testing for Secure Integrations",
  description: "Protect your APIs with Cyserch's expert penetration testing. Uncover vulnerabilities, simulate real-world attacks, and enhance your security with our detailed insights."
  };

export default function CloudSecurityPage() {
  return (
    <>
      <Hero />
      <Overview />
      <Feature />
      <Methodology />
      <ClientCount />
      <WhyCloudPentesting />
      <EndBox />
      <ClinetTestimonials />
      <CaseStudy />
    </>
  );
}
