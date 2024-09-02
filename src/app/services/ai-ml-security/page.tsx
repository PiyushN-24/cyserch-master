import Hero from "@/app/components/services/AI-ML-Security/hero";
import Overview from "@/app/components/services/AI-ML-Security/overview";
import WhyCloudPentesting from "@/app/components/services/AI-ML-Security/whySecurity";
import Methodology from "@/app/components/services/AI-ML-Security/methodology";
import Offers from "@/app/components/services/AI-ML-Security/offers";
import EndBox from "@/app/components/services/AI-ML-Security/EndBox";
import ClinetTestimonials from "@/app/components/services/AI-ML-Security/ClinetTestimonials";


export const metadata = {
  title: "Cyserch | Trusted Web Penetration Testing Partner ",
  description: "Identify website vulnerabilities with Cyserch's web penetration testing. Our experts simulate attacks to uncover weaknesses, providing actionable recommendations. Learn more and strengthen your cybersecurity today!"
  };

export default function CloudSecurityPage() {

   
  return (
    <>
      <Hero />
      <Overview />
      <WhyCloudPentesting />
      <Methodology />
      <Offers />
      <EndBox />
      <ClinetTestimonials />
    </>
  );
}
