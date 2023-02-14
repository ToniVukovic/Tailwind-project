import React from "react";
import Laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="laptop" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold py-2">
            Manage Data Analytics Centrally
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            commodo enim in tristique vestibulum. In ante metus, consectetur sed
            imperdiet vel, vehicula non nisi. Nulla laoreet at nibh ac pretium.
            Proin rutrum neque quis pharetra molestie. Sed et turpis pretium,
            lacinia odio eget, placerat arcu. Pellentesque ut elementum purus.
            Integer eget pellentesque est. Morbi viverra elementum diam ut
            eleifend.
          </p>
          <button className="border border-transparent box-border bg-[#00df9a] hover:bg-white mx-auto md:mx-0 hover:text-[#00df9a] hover:border hover:border-[#00df9a] w-[200px] rounded-md font-semibold my-6 py-3 text-lg text-[#000300] hover:scale-110 transition-transform">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
