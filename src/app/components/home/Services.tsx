import Image from "next/image";
import NetworkSecurity from "../../../../public/icons/net.png";
import WebSecurity from "../../../../public/icons/web.png";
import CloudSecurity from "../../../../public/icons/cloud.png";
import APISecurity from "../../../../public/icons/APISecurity.png";
import MobileSecurity from "../../../../public/icons/MobileSecurity.png";
import Link from "next/link";

export default function Services() {
  return (
    <div className="Services">
      <span className="text-[#19FFDB] text-[1.37rem] font-medium mb-8">
        Our Services
      </span>
      <h3 className="text-white text-[2.18rem] font-semibold mb-4">
        What We Offer
      </h3>
      <div className="Services-cards">
        <div className="services-card">
          <Image width={73} height={73} src={CloudSecurity} alt="Protection" />
          <h3 className="text-white text-[2.18rem] font-semibold mt-3">
            Cloud Security
          </h3>
          <p className="text-[#A39D9D] text-[1.2rem] font-light mt-4">
            Defend your cloud environment and data with our extensive cloud
            security services. We provide comprehensive tools including identity
            and access management, encryption, data loss prevention, and ongoing
            security monitoring to maintain the security and compliance of your
            cloud infrastructure.
          </p>
          <span className="text-[#19FFDB] text-[0.9rem] font-medium mt-4 read-more">
            <Link href="/services/cloud-security">READ MORE {"->"}</Link>
          </span>
        </div>

        <div className="services-card">
          <Image width={73} height={73} src={WebSecurity} alt="Protection" />
          <h3 className="text-white text-[2.18rem] font-semibold mt-3">
            Web Security
          </h3>
          <p className="text-[#A39D9D] text-[1.2rem] font-light mt-4">
            Protect your websites and web applications from cyber threats using
            our sophisticated web security solutions. Our services range from
            vulnerability assessments and penetration testing to secure coding
            practices and web application firewalls, ensuring your online assets
            are safe and sound.
          </p>
          <span className="text-[#19FFDB] text-[0.9rem] font-medium mt-4 read-more">
            <Link href="/services/web-security">READ MORE {"->"}</Link>
          </span>
        </div>

        <div className="services-card">
          <Image width={73} height={73} src={APISecurity} alt="Protection" />
          <h3 className="text-white text-[2.18rem] font-semibold mt-3">
            Training
          </h3>
          <p className="text-[#A39D9D] text-[1.2rem] font-light mt-4">
            Strengthen your team with our detailed cybersecurity training
            programs. Covering topics from threat awareness to secure coding,
            incident response, and compliance, our tailored training enhances
            your cybersecurity capabilities in today’s digital world.
          </p>
          <span className="text-[#19FFDB] text-[0.9rem] font-medium mt-4 read-more">
            <Link href="/training">READ MORE {"->"}</Link>
          </span>
        </div>

        <div className="services-card">
          <Image width={73} height={73} src={APISecurity} alt="Protection" />
          <h3 className="text-white text-[2.18rem] font-semibold mt-3">
            API Security
          </h3>
          <p className="text-[#A39D9D] text-[1.2rem] font-light mt-4">
            Ensure the integrity and safety of your APIs with our targeted API
            security solutions. We offer comprehensive API vulnerability
            assessments, robust authentication and authorization processes, and
            real-time threat intelligence to prevent API exploitation.
          </p>
          <span className="text-[#19FFDB] text-[0.9rem] font-medium mt-4 read-more">
            <Link href="/services/api-security">READ MORE {"->"}</Link>
          </span>
        </div>

        <div className="services-card">
          <Image width={73} height={73} src={MobileSecurity} alt="Protection" />
          <h3 className="text-white text-[2.18rem] font-semibold mt-3">
            Mobile Security
          </h3>
          <p className="text-[#A39D9D] text-[1.2rem] font-light mt-4">
            Secure your mobile applications and devices against cyber threats
            with our all-encompassing mobile security strategies. From secure
            development practices for mobile apps and mobile device management
            to threat detection and response, we safeguard your mobile
            environment against malware and breaches.
          </p>
          <span className="text-[#19FFDB] text-[0.9rem] font-medium mt-4 read-more">
            <Link href="/services/mobile-security">READ MORE {"->"}</Link>
          </span>
        </div>

        <div className="services-card">
          <Image
            width={73}
            height={73}
            src={NetworkSecurity}
            alt="Protection"
          />
          <h3 className="text-white text-[2.18rem] font-semibold mt-3">
            Network Security
          </h3>
          <p className="text-[#A39D9D] text-[1.2rem] font-light mt-4">
            Defend your organization’s digital infrastructure with our thorough
            network security services. Featuring advanced firewall setups,
            intrusion detection systems, and continuous network monitoring, we
            keep your network secure from unauthorized access and harmful
            attacks.
          </p>
          <span className="text-[#19FFDB] text-[0.9rem] font-medium mt-4 read-more">
            <Link href="/services/network-security">READ MORE {"->"}</Link>
          </span>
        </div>
      </div>
    </div>
  );
}
