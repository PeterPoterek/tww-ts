interface ServicesListProps {
  label: string;
  services: string[];
}

const ServicesList = ({ label, services }: ServicesListProps) => {
  return (
    <div className="flex shadow-lg">
      <div className="flex flex-col bg-neutral-200 p-5 rounded-md gap-2">
        <h3 className="text-xl font-bold">{label}:</h3>
        <ul className="flex flex-col gap-1">
          {services.map((service) => {
            return <li className="text-base">- {service}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default ServicesList;
