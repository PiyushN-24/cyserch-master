export default function OurAlumni() {
  return (
    <div className="flex flex-col bg-[#011C3C] text-white py-12 px-4 sm:px-28">
      <h2 className="text-[1.5rem] sm:text-[2rem] font-semibold text-center">
        Our Alumni
      </h2>
      <p className="text-[#A39D9D] text-[1.2rem] font-light mt-4 text-center">
        Our alumni have been placed in top companies across the globe. They are
        leading the cybersecurity industry with their expertise and knowledge.
      </p>
      <div className="flex flex-col sm:flex-row justify-between mt-8 gap-4 sm:gap-0">
        <div className="flex flex-col items-center">
          <img
            src="https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg"
            className="w-[10rem] h-[10rem] object-cover rounded-full"
            alt="alumni"
          />
          <h2 className="text-[1.5rem] font-semibold mt-4">John Doe</h2>
          <p className="text-[#A39D9D] text-[1rem] font-light mt-2">
            Cybersecurity Analyst, Google
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
            className="w-[10rem] h-[10rem] object-cover rounded-full"
            alt="alumni"
          />
          <h2 className="text-[1.5rem] font-semibold mt-4">Jane Doe</h2>
          <p className="text-[#A39D9D] text-[1rem] font-light mt-2">
            Cybersecurity Engineer, Microsoft
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="https://t3.ftcdn.net/jpg/03/02/88/46/360_F_302884605_actpipOdPOQHDTnFtp4zg4RtlWzhOASp.jpg"
            className="w-[10rem] h-[10rem] object-cover rounded-full"
            alt="alumni"
          />
          <h2 className="text-[1.5rem] font-semibold mt-4">John Doe</h2>
          <p className="text-[#A39D9D] text-[1rem] font-light mt-2">
            Cybersecurity Analyst, Google
          </p>
        </div>
      </div>
    </div>
  );
}