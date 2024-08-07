import Hero from "@/app/components/services/cloud-security/hero";
import Overview from "@/app/components/services/cloud-security/overview";
import WhyCloudPentesting from "@/app/components/services/cloud-security/whySecurity";
import Methodology from "@/app/components/services/cloud-security/methodology";
import Offers from "@/app/components/services/cloud-security/offers";
import EndBox from "@/app/components/services/cloud-security/EndBox";
import ClinetTestimonials from "@/app/components/services/cloud-security/ClinetTestimonials";

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
