import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

const Cards = () => {
  return (
    <div className="w-full bg-white py-[10rem] px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Single}
            alt="Single"
          />
          <h3 className="text-2xl font-bold text-center py-8">Single User</h3>
          <p className="text-center font-bold text-4xl">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 user allowed</p>
            <p className="py-2 border-b mx-8">Send up to 2 GB</p>
          </div>
          <button className="border border-transparent box-border bg-[#00df9a] hover:bg-white mx-auto hover:text-[#00df9a] hover:border hover:border-[#00df9a] w-[200px] rounded-md font-semibold my-6 py-3 text-lg text-[#000300] hover:scale-110 transition-transform">
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-xl  bg-gradient-to-t from-gray-100 to-white flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 mt-6 md:mt-0">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-transparent"
            src={Double}
            alt="Double"
          />
          <h3 className="text-2xl font-bold text-center py-8">Single User</h3>
          <p className="text-center font-bold text-4xl">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">1TB Storage</p>
            <p className="py-2 border-b mx-8">3 Users allowed</p>
            <p className="py-2 border-b mx-8">Send up to 10 GB</p>
          </div>
          <button className="border border-transparent box-border bg-[#00df9a] hover:bg-white mx-auto hover:text-[#00df9a] hover:border hover:border-[#00df9a] w-[200px] rounded-md font-semibold my-6 py-3 text-lg text-[#000300] hover:scale-110 transition-transform">
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 mt-6 md:mt-0">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Triple}
            alt="Triple"
          />
          <h3 className="text-2xl font-bold text-center py-8">Single User</h3>
          <p className="text-center font-bold text-4xl">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">5TB Storage</p>
            <p className="py-2 border-b mx-8">10 Granted user</p>
            <p className="py-2 border-b mx-8">Send up to 2 GB</p>
          </div>
          <button className="border border-transparent box-border bg-[#00df9a] hover:bg-white mx-auto hover:text-[#00df9a] hover:border hover:border-[#00df9a] w-[200px] rounded-md font-semibold my-6 py-3 text-lg text-[#000300] hover:scale-110 transition-transform">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
