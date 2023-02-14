import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 place-items-center">
        <div className="lg:col-span-2">
          <h2 className="text-xl sm:text-3xl md:text-4xl font-bold py-2">
            Want tips & tricks to optimize your flow?
          </h2>
          <p>Sign up to out Newsletter and stay up to date.</p>
        </div>
        <div className="my-4">
          <div className="max-w-[800px] mr-4 flex flex-col sm:flex-row items-center justify-between">
            <input
              className="p-3 flex w-full rounded text-[#000300] mx-4"
              type={"email"}
              placeholder="Enter Email."
            />
            <button className="border border-transparent box-border bg-[#00df9a] hover:bg-[#000300] hover:text-[#00df9a] hover:border hover:border-[#00df9a] w-[200px] rounded-md mx-auto font-semibold my-6 py-3 text-lg text-[#000300] hover:scale-110 transition-transform ml-4">
              Notify me
            </button>
          </div>
          <p className="ml-4">
            We care about the protection of your data. Read our{" "}
            <span className="text-[#00df9a] underline">Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
