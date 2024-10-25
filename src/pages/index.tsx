// import Image from "next/image";
// import localFont from "next/font/local";
import CampaignContent from "../components/CampaignContent";
import Campaigns from "../components/Campaigns";
import CardContent from "../components/CardContent";
import Content from "../components/Content";
import Hero from "../components/Hero";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export default function Home() {
  return (
    <>
      <Hero />
      <Content />
      <Campaigns />
      <CampaignContent campaignId="2" />
      <CardContent />
    </>
  );
}
