interface FooterProps {
  title: string;
  items: Array<{ name: string; details: string }>;
}

const FooterDataContainer = ({ title, items }: FooterProps) => {
  return (
    <div className="flex flex-col gap-1">
      <h4 className="font-bold text-lg mb-2">{title}</h4>
      {items.map((item, index) => (
        <div key={index} className="flex gap-5 justify-between text-sm">
          <span>{item.name}</span>
          <span>{item.details}</span>
        </div>
      ))}
    </div>
  );
};

export default FooterDataContainer;
