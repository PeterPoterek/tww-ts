interface ServicesListProps {
  label: string;
  services: string[];
  icon: JSX.Element;
}
import { Separator } from "@/components/ui/separator";

const ServicesList = ({ label, services, icon }: ServicesListProps) => {
  return (
    <div className="w-[220px] sm:w-[320px] h-[220px] flex flex-col bg-slate-900 p-5 rounded-md gap-2">
      <div className="flex gap-1 justify-center items-center p-1">
        {icon}
        <h3 className="text-slate-200  font-bold">{label}:</h3>
      </div>

      <Separator />

      <ul className="flex flex-col gap-1">
        {services.map((service) => {
          return <li className="text-slate-200 ">- {service}</li>;
        })}
      </ul>
    </div>
  );
};

export default ServicesList;
