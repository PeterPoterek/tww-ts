import Section from "@/pages/shared/Section";

const AboutSection = () => {
  return (
    <Section id="about">
      <div className="flex flex-col justify-center gap-3">
        <h2 className="text-2xl md:text-2xl xl:text-3xl font-bold">O nas</h2>
        <p className="max-w-[904px] text-sm md:text-base">
          Jesteśmy doświadczoną firmą remontową, oferującą kompleksowe wykończenie mieszkań i łazienek. Nasze usługi obejmują biały montaż, malowanie,
          malowanie natryskowe, montaż paneli, drzwi, kominki oraz kamień ozdobny Stegu i Stone. Doradzamy w wyborze materiałów, a nasze doświadczenie
          w budownictwie sięga <b className="font-bold">1991 roku.</b> Terminowość i porządek to nasze główne cechy, a po zakończonym remoncie dbamy o
          czystość. Zapraszamy do kontaktu, chętnie przyjedziemy niezobowiązująco omówić zakres remontu.
        </p>
      </div>
    </Section>
  );
};

export default AboutSection;
