import Hero from "@/app/components/services/Web-Security/hero";
import Overview from "@/app/components/services/Web-Security/overview";
import WhyCloudPentesting from "@/app/components/services/Web-Security/whySecurity";
import Methodology from "@/app/components/services/Web-Security/methodology";
import Offers from "@/app/components/services/Web-Security/offers";
import EndBox from "@/app/components/services/Web-Security/EndBox";
import ClinetTestimonials from "@/app/components/services/Web-Security/ClinetTestimonials";


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
