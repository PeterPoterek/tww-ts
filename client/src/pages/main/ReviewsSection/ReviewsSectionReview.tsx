import starIcon from "../../../assets/review-star.svg";

interface ReviewsSectionReviewProps {
  name: string;
  starsCount: number;
  description: string;
}

const ReviewsSectionReview = ({ name, description, starsCount }: ReviewsSectionReviewProps) => {
  return (
    <div className="max-w-[864px] flex flex-col gap-2 m-auto pt-5 pb-5">
      <h3 className="text-lg font-bold">{name}</h3>
      <div className="flex gap-2">
        {Array.from({ length: starsCount }).map((_, index) => (
          <img key={index} src={starIcon} alt="Star icon" />
        ))}
      </div>
      <p className="text-base">{description}</p>
    </div>
  );
};

export default ReviewsSectionReview;
