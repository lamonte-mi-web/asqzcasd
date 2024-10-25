import Image from "next/image";

export default function Content() {
  return (
    <div>
      <div className="flex lg:flex-row gap-8 items-center justify-center space-x-16 bg-white absolute left-[5%] w-[90%] py-8 mt-[-104px]">
        <div className="flex items-center">
          <Image src="/assets/IconOne.png" width={78} height={78} alt="Icon" />
          <div className="flex flex-col">
            <div className="flex">
              <p className="text-3xl font-extrabold">10,000 </p>
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.3013 16.896H16.9493V25.44H9.17332V16.896H0.821319V9.552H9.17332V0.959999H16.9493V9.552H25.3013V16.896Z"
                  fill="#D391B0"
                />
              </svg>
            </div>
            <p className="text-sm">Lives impacted</p>
          </div>
        </div>
        <div className="flex items-center">
          <Image src="/assets/IconTwo.png" width={78} height={78} alt="Icon" />
          <div className="flex flex-col">
            <div className="flex">
              <p className="text-3xl font-extrabold">500 </p>
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.3013 16.896H16.9493V25.44H9.17332V16.896H0.821319V9.552H9.17332V0.959999H16.9493V9.552H25.3013V16.896Z"
                  fill="#D391B0"
                />
              </svg>
            </div>
            <p className="text-sm">Volunteers Engaged</p>
          </div>
        </div>
        <div className="flex items-center">
          <Image
            src="/assets/IconThree.png"
            width={78}
            height={78}
            alt="Icon"
          />
          <div className="flex flex-col">
            <p className="text-3xl font-extrabold">1 Million</p>
            <p className="text-sm">Raised for Causes</p>
          </div>
        </div>
      </div>
      <div className="flex items-center mt-36 bg-mkspurple bg-opacity-[0.06]">
        <div className="order-1 w-[40%]">
          <Image
            src="/assets/Content.png"
            alt="Children holding books"
            width={844}
            height={844}
            className=""
          />
        </div>

        <div className="order-2 flex flex-col w-[40%] justify-center ml-36 space-y-6 text-center lg:text-left">
          <h2 className="text-5xl font-bold text-mksdarkpurple">
            Membangun Harapan Baru
          </h2>
          <p className="text-lg text-mksdarkgray">
            Kami hadir untuk menjadi harapan dan uluran tangan bagi yang
            membutuhkan. Melalui aksi kolaboratif dan transparan, kami
            menggerakkan bantuan yang tepat sasaran dan memberikan dampak jangka
            panjang.
          </p>

          <div>
            <a
              href="#"
              className="inline-block bg-mkspurple text-white py-3 px-6 text-lg font-semibold rounded-lg hover:bg-mkspurplehover transition-colors"
            >
              Bergabung Sekarang →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
