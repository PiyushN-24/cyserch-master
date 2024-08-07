import Image from "next/image";
import Education from "../../../../../public/icons/icons8-education-50.png";
import idea from "../../../../../public/icons/icons8-idea-64.png";
import online from "../../../../../public/icons/icons8-online-learning-64.png";

export default function TrainingCards() {
  return (
    <div className="cards fadeInUp">
      <div className="card">
        <div className="flex gap-6 items-center">
          <Image src={Education} width={50} height={50} alt="card" />
          <h3 className="text-white text-[1.4rem] font-semibold">
            Exclusive Coach
          </h3>
        </div>
        <p className="card-discription">
          Receive customized security training designed to strengthen your
          digital infrastructure and protect against the latest cyber threats.
          Our expert coaches tailor solutions specifically for your needs,
          ensuring robust defense
        </p>
      </div>

      <div className="card">
        <div className="flex gap-6 items-center">
          <Image src={idea} width={50} height={50} alt="card" />
          <h3 className="text-white text-[1.4rem] font-semibold">
            Creative Minds
          </h3>
        </div>
        <p className="card-discription">
          Learn to protect sensitive data with cutting-edge privacy measures and
          compliance strategies. Our courses focus on ensuring your information
          remains secure and private, under the guidance of seasoned
          professionals.
        </p>
      </div>

      <div className="card h-[21rem]">
        <div className="flex gap-6 items-center">
          <Image src={online} width={50} height={50} alt="card" />
          <h3 className="text-white text-[1.4rem] font-semibold">
            Video Tutorials
          </h3>
        </div>
        <p className="card-discription">
          Engage with our comprehensive video tutorials led by
          industry-certified experts. These sessions are crafted to build your
          defensive capabilities and ensure you meet all regulatory requirements
          with confidence.
        </p>
      </div>
    </div>
  );
}
