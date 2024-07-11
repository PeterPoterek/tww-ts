import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  id: string;
}

const Section = ({ children, id }: SectionProps) => {
  return (
    <section id={id} className="p-5 pt-[5rem] pb-[5rem]">
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
};

export default Section;
