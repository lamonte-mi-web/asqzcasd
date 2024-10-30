// components/TitleRouter.tsx
import { useRouter } from "next/router";
import Link from "next/link";
import React from "react";

// Function to dynamically get the title based on the current path
const getTitleFromPath = (path: string): string => {
  switch (path) {
    case "/contact":
      return "Kontak Kami";
    case "/about":
      return "Tentang Kami";
    case "/campaigns":
      return "CrowdFunding";
    case "/blog":
      return "Blog";
    default:
      return "Halaman";
  }
};

const TitleRouter: React.FC = () => {
  const router = useRouter();

  const currentPath = router.pathname;

  const pageTitle = getTitleFromPath(currentPath);

  return (
    <div className="relative">
      <img
        src="/assets/overlay bg.png"
        alt="Background"
        className="w-full h-[400px] object-cover opacity-50"
      />

      {/* Overlay Content */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start p-8">
        {/* Breadcrumb */}
        <div className="text-sm text-pink-500 mb-2">
          <Link href="/" passHref>
            Beranda
          </Link>{" "}
          {">"} <span>{pageTitle}</span>
        </div>

        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-black">
          {pageTitle}
        </h1>
      </div>
    </div>
  );
};

export default TitleRouter;
