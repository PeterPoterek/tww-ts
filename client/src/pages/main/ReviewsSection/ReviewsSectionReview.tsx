interface ReviewsSectionReviewProps {
  name: string;
  starsCount: number;
  description: string;
}

const ReviewsSectionReview = ({ name, description, starsCount }: ReviewsSectionReviewProps) => {
  return (
    <div>
      <h3>{name}</h3>

      <p>{description}</p>
    </div>
  );
};

export default ReviewsSectionReview;
