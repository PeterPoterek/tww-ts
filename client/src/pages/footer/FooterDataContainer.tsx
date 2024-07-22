interface FooterProps {
  title: string;
  items: Array<{ name: string; details: string }>;
}

const FooterDataContainer = ({ title, items }: FooterProps) => {
  return (
    <div>
      <h4>{title}</h4>
      {items.map((item, index) => (
        <div key={index}>
          <span>{item.name}</span>
          <span>{item.details}</span>
        </div>
      ))}
    </div>
  );
};

export default FooterDataContainer;
