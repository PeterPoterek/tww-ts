import ServicesList from "./ServicesList";

const ServicesSection = () => {
  const servicesData = [
    {
      label: "Remonty mieszkań i łazienek",
      services: ["Remonty mieszkań", "Remont łazienki", "Wykończenia łazienek"],
    },
    {
      label: "Wykończenia wnętrz",
      services: ["Tapetowanie"],
    },
    {
      label: "Prace wykończeniowe",
      services: ["Glazurnik", "Płyta karton gips", "Malowanie mieszkań", "Malowanie biur"],
    },
    {
      label: "Klimatyzacja i wentylacja",
      services: ["Rekuperacja"],
    },
  ];

  return (
    <section id="services" className="p-5 pt-10 pb-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col justify-center gap-3">
          <h2 className="text-2xl md:text-2xl xl:text-3xl font-bold">Usługi</h2>

          <div className="flex gap-3 justify-between">
            {servicesData.map((service) => (
              <ServicesList key={service.label} label={service.label} services={service.services} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
