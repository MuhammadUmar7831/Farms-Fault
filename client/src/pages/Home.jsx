import React from "react";
import Banner from "../components/landingPage/Banner";
import HowItWorks from "../components/landingPage/HowItWorks";

export default function Home() {
  return (
    <main className="promoTest bg-primary">
      <Banner />
      <p className="promoTest text-[32px] font-medium text-center leading-[38px] px-[100px] py-[100px] bg-secondary">
        Welcome to the Farmer's Error-Finding Game—empower your community by
        spotting and reporting farming errors. Earn points, improve practices,
        and drive smarter, more efficient agriculture.
      </p>
      <HowItWorks />
    </main>
  );
}
