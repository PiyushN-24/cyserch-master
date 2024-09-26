import Hero from "@/app/components/services/cloud-security/hero";
import Overview from "@/app/components/services/cloud-security/overview";
import WhyCloudPentesting from "@/app/components/services/cloud-security/whySecurity";
import Methodology from "@/app/components/services/cloud-security/methodology";
import Offers from "@/app/components/services/cloud-security/offers";
import EndBox from "@/app/components/services/cloud-security/EndBox";
import ClinetTestimonials from "@/app/components/services/cloud-security/ClinetTestimonials";
import CaseStudy from "@/app/components/services/cloud-security/casestudies"
import Benefits from "@/app/components/services/cloud-security/benefits";
//import Awards from "@/app/components/services/cloud-security/awards";
import ClientsCount from "@/app/components/services/cloud-security/clientsCount";
import Platforms from "@/app/components/services/cloud-security/Platforms";

export const metadata = {
  title: "Cyserch | Cloud Penetration Testing to Secure Your Cloud Infrastructure",
  description: "Ensure the security of your cloud with Cyserch's cloud penetration testing. Identify vulnerabilities, simulate attacks, and protect your cloud infrastructure from cyber threats."
  };

export default function CloudSecurityPage() {
  return (
    <>
      <Hero />
      <Overview />
      <WhyCloudPentesting />
      <Methodology />
      <ClientsCount />
      <Benefits />
      <Offers />
      <Platforms />
      <EndBox />
      <ClinetTestimonials />
      <CaseStudy />
    </>
  );
}
