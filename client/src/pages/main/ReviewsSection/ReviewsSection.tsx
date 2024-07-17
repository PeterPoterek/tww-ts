import Section from "@/pages/shared/Section";
import ReviewsSectionReview from "./ReviewsSectionReview";

const ReviewsSection = () => {
  const reviewsData = [
    {
      name: "Beata B.",
      starCout: 5,
      description:
        "Super fachowcy, punktualni, odpowiedzialni, rzeczowi i bardzo profesjonalni. Wykonawcy bardzo dokładni, rzetelni i solidni. Panowie Piotr i Paweł to zgrany zespół. Terminowo i kompleksowo wykończyli mieszkanie. Są bezkonfliktowi, służą doświadczeniem i doradztwem. Dla mnie super! Polecam na 120%.",
    },
    {
      name: "Michał M",
      starCout: 5,
      description:
        "Dokładni, terminowi, doświadczeni i profesjonalni. Lepszej ekipy ze świecą szukać :) jesteśmy stałymi klientami, Piotrek i Paweł zrobili dla nas remont 2 łazienek, przedpokoju, wydzielili pralnie z części salonu, wykonali ścianę z cegieł i wyremontowali drugie mieszkanie dla mojej mamy. Dla nich nie ma rzeczy niemożliwych - zrobią wszystko. Nie było potrzeby żadnych poprawek i zawsze byliśmy mega zadowoleni. Z czystym sumieniem polecamy!!!",
    },
    {
      name: "Regina K.",
      starCout: 5,
      description: "Świetne wykonanie projektu oraz profesjonalne doradztwo, serdecznie polecam",
    },
  ];
  return (
    <Section id="reviews">
      <h2 className="text-center  text-2xl md:text-2xl xl:text-3xl font-bold">Opinie</h2>

      <div>
        {reviewsData.map((review) => (
          <ReviewsSectionReview name={review.name} starsCount={review.starCout} description={review.description} />
        ))}
      </div>
    </Section>
  );
};

export default ReviewsSection;
