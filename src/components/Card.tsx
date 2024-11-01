// components/Card.tsx

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
  ctaText: string;
}

const Card: React.FC<CardProps> = ({
  imageSrc,
  title,
  description,
  ctaText,
}) => {
  return (
    <div className="max-w-md bg-white rounded-lg shadow-md p-2 md:p-4 hover:shadow-lg transition-shadow duration-300">
      <img
        src={imageSrc}
        alt={title}
        className="rounded-md"
        width={400}
        height={300}
      />
      <h3 className="text-md font-semibold mt-2">{title}</h3>
      <div
        className="text-gray-600 mt-1 min-h-[80px] overflow-hidden"
        dangerouslySetInnerHTML={{ __html: description }}
      />
      <button className="w-full md:px-6 py-2 md:py-3 border-2 border-gray-400 text-gray-600 font-semibold rounded-md hover:bg-gray-100 transition duration-300">
        {ctaText} →
      </button>
    </div>
  );
};

export default Card;
