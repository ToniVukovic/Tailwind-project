import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto px-2 text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-4">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold md:py-6">
          Grow with data
        </h1>
        <div className="text-xl sm:text-4xl md:text-5xl font-bold flex justify-center ">
          <p className="mr-4">
            Fast, flexible financing for{" "}
            <span>
              <Typed
                strings={["BTB", "BTC", "SASS"]}
                typeSpeed={120}
                backSpeed={140}
                loop
              />
            </span>
          </p>
        </div>
        <p className="text-l md:text-2xl pt-4 font-bold text-gray-500">
          Monitor your data analytics to increase revenue for BTB, BTC & SASS
          platforms.
        </p>
        <button className="border border-transparent box-border bg-[#00df9a] hover:bg-[#000300] hover:text-[#00df9a] hover:border hover:border-[#00df9a] w-[200px] rounded-md mx-auto font-semibold my-6 py-3 text-lg text-[#000300] hover:scale-110 transition-transform">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
