import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/assets/Mahakarya Semesta.png",
  "/assets/Mahakarya Semesta.png",
  "/assets/Mahakarya Semesta.png",
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState("next");

  const nextSlide = () => {
    setIsAnimating(true);
    setDirection("next");
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setIsAnimating(false);
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex justify-center rounded-xl mb-48">
      {/* <Image
        src={images[currentIndex]}
        width={1253}
        height={800}
        alt="Hero Section"
        layout="responsive"
        className={`rounded-xl transition-transform duration-500 ease-in-out transform px-8 sm:px-32 ${
          isAnimating
            ? direction === "next"
              ? "translate-x-full opacity-0"
              : "-translate-x-full opacity-0"
            : "translate-x-0 opacity-100"
        } object-cover`}
      /> */}

      <div className="absolute top-[-15%] sm:left-6 sm:p-2 z-10 left-0">
        <Image
          width={192}
          height={192}
          src="/assets/Element.png"
          alt="Small Overlay"
          className="h-20 w-auto sm:h-auto"
        />
      </div>

      {/* <div className="flex flex-col md:flex-row absolute bottom-0 right-[8.45%] bg-black bg-opacity-50 text-white max-w-[617px] min-h-[213px] rounded-xl">
        <div className="py-8 md:py-16 max-w-[400px] px-4 bg-mksblur bg-opacity-[0.5] backdrop-blur-sm rounded-tl-md border border-white border-opacity-30">
          <h3 className="text-lg md:text-xl font-semibold">
            Pendidikan Berkualitas Untuk Anak Kurang Mampu
          </h3>
          <p className="text-sm md:text-md">
            Berkontribusilah dan Wujudkan Pendidikan bagi anak kurang mampu
          </p>
        </div>
        <a
          href="#"
          className="bg-mkspurple text-white font-semibold hover:bg-mkspurplehover transition duration-300 min-w-[100px] items-center flex justify-center text-4xl md:text-5xl lg:text-7xl rounded-br-md"
        >
          <svg
            width="43"
            height="35"
            viewBox="0 0 43 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M42.0989 18.8911L28.523 34.0578C28.1572 34.4525 27.6673 34.6709 27.1588 34.6659C26.6503 34.661 26.1639 34.4331 25.8043 34.0314C25.4447 33.6297 25.2408 33.0863 25.2363 32.5182C25.2319 31.9501 25.4274 31.4028 25.7807 30.9941L36.046 19.526H1.93947C1.42511 19.526 0.931812 19.2977 0.568102 18.8914C0.204391 18.485 6.10352e-05 17.9339 6.10352e-05 17.3593C6.10352e-05 16.7847 0.204391 16.2336 0.568102 15.8272C0.931812 15.4209 1.42511 15.1926 1.93947 15.1926H36.046L25.7807 3.72447C25.5954 3.5246 25.4477 3.28552 25.3461 3.02118C25.2444 2.75684 25.1909 2.47253 25.1887 2.18484C25.1864 1.89715 25.2355 1.61185 25.333 1.34557C25.4305 1.0793 25.5745 0.837383 25.7566 0.633949C25.9387 0.430515 26.1553 0.26963 26.3936 0.16069C26.632 0.0517464 26.8873 -0.00307083 27.1449 -0.000572205C27.4024 0.00192642 27.6569 0.0616989 27.8935 0.175255C28.1301 0.288807 28.3441 0.453865 28.523 0.660805L42.0989 15.8275C42.4625 16.2338 42.6667 16.7848 42.6667 17.3593C42.6667 17.9338 42.4625 18.4848 42.0989 18.8911Z"
              fill="white"
            />
          </svg>
        </a>
      </div> */}

      <div className="relative">
        <Image
          src={images[currentIndex]}
          width={1253}
          height={800}
          alt="Hero Section"
          layout="responsive"
          className={`rounded-xl transition-transform duration-500 ease-in-out transform ${
            isAnimating
              ? direction === "next"
                ? "translate-x-full opacity-0"
                : "-translate-x-full opacity-0"
              : "translate-x-0 opacity-100"
          } object-cover`}
        />
        <div className="flex flex-row absolute bottom-[-9.3rem] right-0 md:bottom-0 bg-black bg-opacity-50 text-white max-w-[400px] min-h-[150px] rounded-xl ">
          <div className="py-4 md:py-8 max-w-full px-4 bg-mksblur bg-opacity-[0.5] backdrop-blur-sm rounded-tl-md border border-white border-opacity-30">
            <h3 className="text-sm md:text-lg font-semibold">
              Pendidikan Berkualitas Untuk Anak Kurang Mampu
            </h3>
            <p className="text-xs md:text-sm">
              Berkontribusilah dan Wujudkan Pendidikan bagi anak kurang mampu
            </p>
          </div>
          <a
            href="#"
            className="bg-mkspurple text-white font-semibold hover:bg-mkspurplehover transition duration-300 min-w-[80px] items-center flex justify-center text-3xl md:text-4xl lg:text-5xl rounded-br-md"
          >
            <svg
              width="30" // Menyesuaikan ukuran SVG
              height="25" // Menyesuaikan ukuran SVG
              viewBox="0 0 43 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M42.0989 18.8911L28.523 34.0578C28.1572 34.4525 27.6673 34.6709 27.1588 34.6659C26.6503 34.661 26.1639 34.4331 25.8043 34.0314C25.4447 33.6297 25.2408 33.0863 25.2363 32.5182C25.2319 31.9501 25.4274 31.4028 25.7807 30.9941L36.046 19.526H1.93947C1.42511 19.526 0.931812 19.2977 0.568102 18.8914C0.204391 18.485 6.10352e-05 17.9339 6.10352e-05 17.3593C6.10352e-05 16.7847 0.204391 16.2336 0.568102 15.8272C0.931812 15.4209 1.42511 15.1926 1.93947 15.1926H36.046L25.7807 3.72447C25.5954 3.5246 25.4477 3.28552 25.3461 3.02118C25.2444 2.75684 25.1909 2.47253 25.1887 2.18484C25.1864 1.89715 25.2355 1.61185 25.333 1.34557C25.4305 1.0793 25.5745 0.837383 25.7566 0.633949C25.9387 0.430515 26.1553 0.26963 26.3936 0.16069C26.632 0.0517464 26.8873 -0.00307083 27.1449 -0.000572205C27.4024 0.00192642 27.6569 0.0616989 27.8935 0.175255C28.1301 0.288807 28.3441 0.453865 28.523 0.660805L42.0989 15.8275C42.4625 16.2338 42.6667 16.7848 42.6667 17.3593C42.6667 17.9338 42.4625 18.4848 42.0989 18.8911Z"
                fill="white"
              />
            </svg>
          </a>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => {
              setIsAnimating(true);
              setDirection(index > currentIndex ? "next" : "prev");
              setTimeout(() => {
                setCurrentIndex(index);
                setIsAnimating(false);
              }, 500);
            }}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
