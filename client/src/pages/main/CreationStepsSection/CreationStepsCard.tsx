interface CreationStepsCardProps {
  src: string;
  cardText: string;
}

const CreationStepsCard = ({ src, cardText }: CreationStepsCardProps) => {
  return (
    <div className="w-[220px] flex flex-col justify-center items-center sm:w-1/2 md:w-1/3 lg:w-1/4">
      <img src={src} alt="Stock image" className="w-full" />

      <p className="text-sm md:text-base rounded-b-md p-5 w-full bg-slate-900 text-slate-200 text-center tracking-wider font-bold">{cardText}</p>
    </div>
  );
};

export default CreationStepsCard;
