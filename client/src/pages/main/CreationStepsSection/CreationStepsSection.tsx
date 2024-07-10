import CreationStepsCard from "./CreationStepsCard";

import creation1 from "../../../assets/creation1.png";
import creation2 from "../../../assets/creation2.png";
import creation3 from "../../../assets/creation3.png";

const CreationStepsSection = () => {
  return (
    <section id="services" className="p-5 pt-10 pb-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col justify-center gap-5">
          <h2 className="text-center  text-2xl md:text-2xl xl:text-3xl font-bold">ETAPY TWORZENIA</h2>

          <div className="flex gap-[2rem] justify-center">
            <CreationStepsCard src={creation1} cardText="KONSULTACJA I PLANOWANIE" />
            <CreationStepsCard src={creation2} cardText="WYKONANIE PRAC REMONTOWYCH" />
            <CreationStepsCard src={creation3} cardText="ZAKOŃCZENIE I KONTROLA JAKOŚCI" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreationStepsSection;
