import Image from "next/image";
import Education from "../../../../../public/icons/icons8-education-50.png";
import Idea from "../../../../../public/icons/icons8-idea-64.png";
import Online from "../../../../../public/icons/icons8-online-learning-64.png";

export default function TrainingCards() {
  return (
    <div className="cards fadeInUp">
      <div className="card">
        <div className="flex gap-6 items-center">
          <Image src={Education} width={50} height={50} alt="card" />
          <h3 className="text-white text-[1.4rem] font-semibold">
            Exclusive Coaching
          </h3>
        </div>
        <p className="card-description text-white">
          Receive tailored security training aimed at enhancing your digital defenses. Our expert coaches create customized solutions, ensuring your infrastructure is protected against the latest cyber threats.
        </p>
      </div>

      <div className="card">
        <div className="flex gap-6 items-center">
          <Image src={Idea} width={50} height={50} alt="card" />
          <h3 className="text-white text-[1.4rem] font-semibold">
            Innovative Strategies
          </h3>
        </div>
        <p className="card-description text-white">
          Master the art of data protection with our cutting-edge privacy measures and compliance techniques. Our courses guide you in securing sensitive information with the expertise of seasoned professionals.
        </p>
      </div>

      <div className="card">
        <div className="flex gap-6 items-center">
          <Image src={Online} width={50} height={50} alt="card" />
          <h3 className="text-white text-[1.4rem] font-semibold">
            Video Tutorials
          </h3>
        </div>
        <p className="card-description text-white">
          Access detailed video tutorials from certified experts. Our sessions are designed to boost your defensive skills and help you comply with regulatory requirements, ensuring thorough understanding and application.
        </p>
      </div>
    </div>
  );
}
