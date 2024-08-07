import Hero from "@/app/components/services/Mobile-Security/hero";
import Overview from "@/app/components/services/Mobile-Security/overview";
import WhyCloudPentesting from "@/app/components/services/Mobile-Security/whySecurity";
import Methodology from "@/app/components/services/Mobile-Security/methodology";
// import Offers from "@/app/components/services/Mobile-Security/offers";
import EndBox from "@/app/components/services/Mobile-Security/EndBox";
import ClinetTestimonials from "@/app/components/services/Mobile-Security/ClinetTestimonials";


export const metadata = {
  title: "Cyserch | Trusted Mobile Security Experts",
  description: "Safeguard your mobile devices and apps with Cyserch's expert security services. Our mobile security solutions identify vulnerabilities, prevent cyber attacks, and protect your data on-the-go."
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
