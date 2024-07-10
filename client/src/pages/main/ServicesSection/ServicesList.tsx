interface ServicesListProps {
  label: string;
  services: string[];
}
import { Separator } from "@/components/ui/separator";

const ServicesList = ({ label, services }: ServicesListProps) => {
  return (
    <div className="w-[220px] sm:w-[270px] h-[180px] flex flex-col bg-slate-900 p-5 rounded-md gap-2">
      <h3 className="text-slate-200  font-bold">{label}:</h3>

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
