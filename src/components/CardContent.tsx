import React from "react";

interface Card {
  title: string;
  description: string;
  imageUrl: string;
}

const CardContent: React.FC = () => {
  const cards: Card[] = [
    {
      title: "Education for Underprivileged Children",
      description: "",
      imageUrl: "/assets/Card 3.png", // Ganti dengan URL gambar yang sesuai
    },
    {
      title: "Sustainable Environment Initiatives",
      description:
        "Our planet is our shared home, and it's our responsibility to ensure its well-being for the generations to come.",
      imageUrl: "/assets/Card 2.png", // Ganti dengan URL gambar yang sesuai
    },
    {
      title: "Healthcare for Vulnerable Communities",
      description: "",
      imageUrl: "/assets/Card 1.png", // Ganti dengan URL gambar yang sesuai
    },
  ];

  return (
    <div className="mt-24">
      <p className="text-justify text-4xl px-8 md:text-center md:text-6xl font-bold mb-8">
        Membangun Masa Depan Lebih Cerah
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3">
        {cards.map((card, index) => (
          <div key={index} className="relative group">
            <img
              src={card.imageUrl}
              alt={card.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 text-3xl z-10 text-white transition-transform duration-300 group-hover:-translate-y-32 px-8 py-4">
              <h3 className="font-bold">{card.title}</h3>
            </div>
            <div className="absolute bottom-4 left-4 text-lg z-10 text-white transition-transform duration-300 opacity-0 transform translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 p-8">
              <p>{card.description}</p>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <button className="absolute bottom-0 right-0 w-12 h-12 bg-mkspurple text-white">
              <span className="text-4xl group-hover:hidden">+</span>
              <span className="text-3xl hidden group-hover:block">x</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardContent;
