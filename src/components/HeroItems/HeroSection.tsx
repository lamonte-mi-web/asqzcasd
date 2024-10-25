import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative flex justify-center rounded-full">
      <Image
        src="/assets/Mahakarya Semesta.png"
        width={1253}
        height={800}
        alt="Hero Section"
        className="h-auto"
      />

      <div className="absolute top-[-15%] left-5 p-2">
        <Image
          width={192}
          height={192}
          src="/assets/Element.png"
          alt="Small Overlay"
          className=""
        />
      </div>

      <div className="flex flex-row absolute bottom-0 right-[8.76%] bg-black bg-opacity-50 text-white max-w-[617px] min-h-[213px] rounded-full">
        <div className="py-16 max-w-[400px] px-4 bg-mksblur bg-opacity-[0.5] backdrop-blur-sm rounded-tl-md border border-white border-opacity-30">
          <h3 className="text-xl font-semibold">
            Pendidikan Berkualitas Untuk Anak Kurang Mampu
          </h3>
          <p className="text-md">
            Berkontribusilah dan Wujudkan Pendidikan bagi anak kurang mampu
          </p>
        </div>
        <a
          href="#"
          className="bg-mkspurple text-white font-semibold hover:bg-mkspurplehover transition duration-300 min-w-[100px] items-center flex justify-center text-7xl rounded-br-md"
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
      </div>
    </div>
  );
}
