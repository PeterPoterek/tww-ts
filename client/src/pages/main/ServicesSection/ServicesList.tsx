interface ServicesListProps {
  label: string;
  services: string[];
}

const ServicesList = ({ label, services }: ServicesListProps) => {
  return (
    <div className="w-[220px] sm:w-[270px] h-[180px] flex flex-col bg-neutral-200 p-5 rounded-md gap-2">
      <h3 className="font-bold">{label}:</h3>
      <ul className="flex flex-col gap-1">
        {services.map((service) => {
          return <li className="">- {service}</li>;
        })}
      </ul>
    </div>
  );
};

export default ServicesList;
