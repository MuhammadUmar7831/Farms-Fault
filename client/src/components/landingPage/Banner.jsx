import React from "react";
import Arrow from "../../svgs/home/Arrow";

export default function Banner() {
  return (
    <section
      className="flex justify-between px-[50px] h-screen overflow-y-hidden"
      id="banner"
    >
      <div className="flex flex-col justify-center w-[540px] gap-[10px]">
        <h1 className="promoTest leading-[52px] font-bold text-[60px]">
          Spot the Errors.
          <br />
          Reap the Rewards!
        </h1>
        <p className="promoTest font-semibold text-[20px] leading-[24px]">
          Turn your farming insights into points and help cultivate a smarter,
          healthier harvest.
        </p>
        <button className="promoTest mt-[20px] flex gap-[8px] items-center rounded-[12px] bg-tertiary/90 text-primary w-fit font-bold py-[9px] px-[24px]">
          Get Started
          <Arrow />
        </button>
      </div>
      <div className="flex gap-[10px] h-[680px]s ">
        <div className="space-y-[10px]">
          <div className="w-[242px] h-[203px] landingPageImageShaddow">
            <img
              src="/images/landingPage/farm2.png"
              alt="farm"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-[242px] h-[291px] landingPageImageShaddow">
            <img
              src="/images/landingPage/farm3.png"
              alt="farm"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-[242px] h-[203px] landingPageImageShaddow">
            <img
              src="/images/landingPage/farm5.png"
              alt="farm"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="space-y-[10px]">
          <div className="w-[242px] h-[291px] landingPageImageShaddow">
            <img
              src="/images/landingPage/farm1.png"
              alt="farm"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-[242px] h-[291px] landingPageImageShaddow">
            <img
              src="/images/landingPage/farm4.png"
              alt="farm"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-[242px] h-[291px] landingPageImageShaddow">
            <img
              src="/images/landingPage/farm6.png"
              alt="farm"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
