import landingPageImage from "../../assets/landing-page-image.svg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <section id="landing" className="pt-[2rem] md:pt-[4rem] max-w-6xl mx-auto h-screen flex">
      <div className="flex flex-col gap-3 md:gap-5 justify-center items-center p-5">
        <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold uppercase tracking-tighter	">Technologia Wykonania Wnętrz</h1>
        <div className="flex flex-col text-center sm:text-left sm:flex-row justify-center items-center gap-2 md:gap-5">
          <div className="md:max-w-[920px] flex flex-col gap-2 md:gap-4">
            <p className="font-bold text-sm md:text-xl xl:text-2xl">Profesjonalne remonty, doskonała jakość, zadowoleni klienci.</p>
            <p className="md:max-w-[596px] text-sm md:text-base">
              Nasza firma remontowa zapewnia profesjonalne usługi remontowe o najwyższej jakości. Dzięki naszemu doświadczeniu i zaangażowaniu,
              dostarczamy doskonałe rezultaty, które spełniają oczekiwania naszych klientów. Zadowolenie klienta jest naszym priorytetem, dlatego
              dbamy o każdy detal i zapewniamy satysfakcję z wykonanych prac. Dołącz do grona zadowolonych klientów i skorzystaj z naszych usług
              remontowych już dziś.
            </p>
          </div>
          <img src={landingPageImage} alt="Icon of construction man" className="w-[250px] md:w-[300px] xl:w-[440px]" />
        </div>

        <Link to={"/#contact"}>
          <Button variant="outline" className="max-w-[500px] text-xl p-7 uppercase font-bold border-[3px] hover:bg-zinc-200">
            Kontakt
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default LandingPage;
