import Image from "next/image";
import security from "../../../../public/icons/security.png";
import privacy from "../../../../public/icons/privacy.png";
import certified from "../../../../public/icons/certified-industry.png";

export default function SecondCards() {
  return (
    <div className="cards fadeInUp">
      <div className="card">
        <div className="flex gap-6 items-center">
          <Image src={security} alt="card" />
          <h3 className="text-white text-[1.4rem] font-semibold">
            Customized Security Strategies
          </h3>
        </div>
        <p className="card-discription">
          Enhance your digital defenses with our personalized security services
          designed to shield your infrastructure from the latest cyber threats
        </p>
      </div>

      <div className="card">
        <div className="flex gap-6 items-center">
          <Image src={privacy} alt="card" />
          <h3 className="text-white text-[1.4rem] font-semibold">
            Advanced Data Protection
          </h3>
        </div>
        <p className="card-discription">
          Keep your sensitive data secure with our robust privacy protocols and
          compliance solutions. Your information is safe with us.
        </p>
      </div>

      <div className="card">
        <div className="flex gap-6 items-center">
          <Image src={certified} alt="card" />
          <h3 className="text-white text-[1.4rem] font-semibold">
            Certified Security Excellence
          </h3>
        </div>
        <p className="card-discription">
          Rely on our certified security professionals to strengthen your
          defenses and ensure compliance with regulatory standards effortlessly.
          Your safety, guaranteed.
        </p>
      </div>
    </div>
  );
}
