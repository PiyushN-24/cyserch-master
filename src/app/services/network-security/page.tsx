import Hero from "@/app/components/services/Network-Security/hero";
import Overview from "@/app/components/services/Network-Security/overview";
import WhyCloudPentesting from "@/app/components/services/Network-Security/whySecurity";
import Methodology from "@/app/components/services/Network-Security/methodology";
import EndBox from "@/app/components/services/Network-Security/EndBox";
import ClinetTestimonials from "@/app/components/services/Network-Security/ClinetTestimonials";

export const metadata = {
  title: "Cyserch | Trusted Network VAPT Experts",
  description: "Identify network vulnerabilities and strengthen your security with Cyserch's expert VAPT services. Our simulated attacks and penetration testing ensure your network is secure and compliant."
  };

export default function CloudSecurityPage() {
  return (
    <>
      <Hero />
      <Overview />
      <Methodology />
      <WhyCloudPentesting />
      {/* <Offers /> */}
      <ClinetTestimonials />
      <EndBox />
    </>
  );
}
