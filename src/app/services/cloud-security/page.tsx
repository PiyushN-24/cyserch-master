import Hero from "@/app/components/services/Cloud-Security/hero";
import Overview from "@/app/components/services/Cloud-Security/overview";
import WhyCloudPentesting from "@/app/components/services/Cloud-Security/whySecurity";
import Methodology from "@/app/components/services/Cloud-Security/methodology";
import Offers from "@/app/components/services/Cloud-Security/offers";
import EndBox from "@/app/components/services/Cloud-Security/EndBox";
import ClinetTestimonials from "@/app/components/services/Cloud-Security/ClinetTestimonials";

// import Benefits from "@/app/components/services/cloud-security/benefits";
// import Awards from "@/app/components/services/cloud-security/awards";
//import ClientsCount from "@/app/components/services/cloud-security/clientsCount";

export const metadata = {
  title: "Cyserch | Trusted Cloud Security Experts",
  description: "Protect your cloud infrastructure with Cyserch's expert security services. Our cloud security solutions identify vulnerabilities, ensure compliance, and safeguard your data from cyber threats."
  };

export default function CloudSecurityPage() {
  return (
    <>
      <Hero />
      <Overview />
      <WhyCloudPentesting />
      <Offers />
      <Methodology />
      <EndBox />
      <ClinetTestimonials />
      {/*
      <Awards/>
      <Benefits /> */}
    </>
  );
}
