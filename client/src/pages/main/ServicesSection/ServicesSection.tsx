import { MdHomeRepairService, MdOutlineAir } from "react-icons/md";
import { FaPaintRoller, FaTools } from "react-icons/fa";
import ServicesList from "./ServicesList";
import Section from "@/pages/shared/Section";

const ServicesSection = () => {
  const servicesData = [
    {
      label: "Remonty mieszkań",
      icon: <MdHomeRepairService size={32} className="text-slate-200" />,
      services: ["Remonty mieszkań", "Remont łazienki", "Wykończenia łazienek"],
    },
    {
      label: "Wykończenia wnętrz",
      icon: <FaPaintRoller size={32} className="text-slate-200" />,
      services: ["Tapetowanie"],
    },
    {
      label: "Prace wykończeniowe",
      icon: <FaTools size={32} className="text-slate-200" />,
      services: ["Glazurnik", "Płyta karton gips", "Malowanie mieszkań", "Malowanie biur"],
    },
    {
      label: "Klimatyzacja i wentylacja",
      icon: <MdOutlineAir size={32} className="text-slate-200" />,
      services: ["Rekuperacja"],
    },
  ];

  return (
    <Section id="services">
      <div className="flex flex-col justify-center gap-5">
        <h2 className="text-center xl:text-left text-2xl md:text-2xl xl:text-3xl font-bold">Usługi</h2>

        <div className="flex gap-5 justify-center flex-wrap lg:flex-nowrap">
          {servicesData.map((service) => (
            <ServicesList key={service.label} label={service.label} icon={service.icon} services={service.services} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ServicesSection;
