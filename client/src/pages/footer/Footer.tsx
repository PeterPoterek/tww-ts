import FooterDataContainer from "./FooterDataContainer";

const Footer = () => {
  const footerData = [
    {
      title: "Firma",
      items: [
        { name: "Imię", details: "Piotr" },
        { name: "Nazwisko", details: "Poterek" },
        { name: "NIP", details: "9441361022" },
      ],
    },
    {
      title: "Adres",
      items: [
        { name: "Kraj", details: "Polska" },
        { name: "Ulica", details: "Skotnicka 82A" },
        { name: "Miasto", details: "Kraków" },
      ],
    },
    {
      title: "Kontakt",
      items: [
        { name: "Telefon", details: "696075595" },
        { name: "Email", details: "poterpiotr@gmail.com" },
      ],
    },
  ];

  return (
    <div className="bg-slate-900 text-slate-200">
      <div className="max-w-[1264px] flex justify-between p-6 m-auto">
        <div>
          <div className="flex gap-5">
            {footerData.map((section, index) => (
              <FooterDataContainer
                key={index}
                title={section.title}
                items={section.items}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col items-end gap-5">
          <span>Kontakt w dni robocze od</span>
          <span className="font-bold text-xl">9-19</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
