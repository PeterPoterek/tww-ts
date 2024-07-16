import { Separator } from "@/components/ui/separator";

interface ServicesListProps {
  label: string;
  services: string[];
  icon: JSX.Element;
}

const ServicesList = ({ label, services, icon }: ServicesListProps) => {
  return (
    <div className="sm:w-[290px] md:w-[330px] w-[220px] h-[220px] flex flex-col bg-slate-900 p-3 rounded-md gap-2">
      <div className="flex gap-3 justify-center items-center p-1">
        {icon}
        <h3 className="text-slate-200  font-bold">{label}</h3>
      </div>

      <Separator />
      <ul className="flex flex-col gap-1">
        {services.map((service) => {
          return (
            <li key={service} className="text-slate-200 ">
              - {service}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ServicesList;
