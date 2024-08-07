import Hero from "@/app/components/services/API-Security/hero";
import Overview from "@/app/components/services/API-Security/overview";
import WhyCloudPentesting from "@/app/components/services/API-Security/whySecurity";
import Methodology from "@/app/components/services/API-Security/methodology";
import EndBox from "@/app/components/services/API-Security/EndBox";
import ClinetTestimonials from "@/app/components/services/API-Security/ClinetTestimonials";

export const metadata = {
  title: "Cyserch | API Penetration Testing Experts",
  description: "Safeguard your APIs with Cyserch's expert penetration testing. Identify vulnerabilities and strengthen your security with our simulated attacks and actionable recommendations."
  };

export default function CloudSecurityPage() {
  return (
    <>
      <Hero />
      <Overview />
      <Methodology />
      <WhyCloudPentesting />
      <ClinetTestimonials />
      <EndBox />
    </>
  );
}
