import Hero from "@/app/components/services/DAST/hero";
import Overview from "@/app/components/services/DAST/overview";
import WhyCloudPentesting from "@/app/components/services/DAST/whySecurity";
import Methodology from "@/app/components/services/DAST/methodology";
import Offers from "@/app/components/services/DAST/offers";
import EndBox from "@/app/components/services/DAST/EndBox";
import ClinetTestimonials from "@/app/components/services/DAST/ClinetTestimonials";


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
