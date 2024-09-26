import Hero from "@/app/components/services/Network-Security/hero";
import Overview from "@/app/components/services/Network-Security/overview";
import WhyCloudPentesting from "@/app/components/services/Network-Security/whySecurity";
import Methodology from "@/app/components/services/Network-Security/methodology";
import EndBox from "@/app/components/services/Network-Security/EndBox";
import ClinetTestimonials from "@/app/components/services/Network-Security/ClinetTestimonials";
import CaseStudy from "@/app/components/services/Network-Security/casestudies";
import Features from "@/app/components/services/Network-Security/feature";
import ClientsCount from "@/app/components/services/Network-Security/clientsCount";

export const metadata = {
  title: "Cyserch | Expert Network Penetration Testing & VAPT Solutions",
  description: "Secure your network with Cyserch's VAPT services. Identify vulnerabilities, simulate real-world attacks, and strengthen your defenses to ensure compliance and security."
  };

export default function CloudSecurityPage() {
  return (
    <>
      <Hero />
      <Overview />
      <Features />
      <Methodology />
      <ClientsCount />
      <WhyCloudPentesting />
      <EndBox />
      <ClinetTestimonials />
      <CaseStudy />
    </>
  );
}
