import landingPageImage from "../../assets/landing-page-image.svg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const MainPage = () => {
  return (
    <>
      <section className="pt-[8rem]">
        <div className="flex flex-col gap-5 justify-center items-center">
          <h1 className="text-center text-5xl font-bold">Technologia Wykonania Wnętrz</h1>
          <div className="flex justify-center items-center gap-5">
            <div className="max-w-[920px] flex flex-col gap-4">
              <p className="font-bold text-2xl">Profesjonalne remonty, doskonała jakość, zadowoleni klienci.</p>
              <p className="max-w-[596px] text-lg">
                Nasza firma remontowa zapewnia profesjonalne usługi remontowe o najwyższej jakości. Dzięki naszemu doświadczeniu i zaangażowaniu,
                dostarczamy doskonałe rezultaty, które spełniają oczekiwania naszych klientów. Zadowolenie klienta jest naszym priorytetem, dlatego
                dbamy o każdy detal i zapewniamy satysfakcję z wykonanych prac. Dołącz do grona zadowolonych klientów i skorzystaj z naszych usług
                remontowych już dziś.
              </p>
            </div>
            <img src={landingPageImage} alt="" />
          </div>

          <Link to={"/#contact"}>
            <Button variant="outline" className="max-w-[500px] text-xl p-7 uppercase font-bold border-[3px] hover:bg-zinc-200">
              Kontakt
            </Button>
          </Link>
        </div>
      </section>
      <div className="flex flex-col gap-[100rem]">
        <div id="about">
          <h2>About</h2>
        </div>
        <div id="reviews">
          <h2>Reviews</h2>
        </div>
        <div id="contact">
          <h2>Contact</h2>
        </div>
      </div>
    </>
  );
};

export default MainPage;
