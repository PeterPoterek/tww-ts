import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  id: string;
  p?: string;
  pt?: string;
  pb?: string;
}

const Section = ({ children, id, p = "5", pt = "10", pb = "10" }: SectionProps) => {
  return (
    <section id={id} className={`p-${p} pt-${pt} pb-${pb}`}>
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
};

export default Section;
