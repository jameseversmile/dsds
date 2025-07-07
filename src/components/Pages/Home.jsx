import React from "react";
import Header from "../static/Header.jsx";
import Buttons from "../reusable/buttons.jsx";
import { Apple, Play } from "lucide-react";
import Grid from "../reusable/Grids.jsx";

const Home = () => {
  return (
    <div>
      <Header />
      <main className=" items-center max-w-[1028px] justify-between mx-auto py-50 flex max-[993px]:flex-col">
        <div className="max-w-sm ">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-3xl">
            The 2024 PiggyVest Savings Report
          </button>
          <h1 className="text-4xl font-bold mt-4">
            The Better Way to Save & Invest
          </h1>
          <p className="mt-2 leading-relaxed font-light text-lg">
            Piggyvest helps over 5 million customers achieve their financial
            goals by helping them save and invest with ease.
          </p>
          <div className="flex gap-5">
            <Buttons
              className="border text-white flex bg-black gap-1.5"
              label={
                <>
                  <Apple /> GetOnIphone
                </>
              }
            />
            <Buttons
              className="bg-black text-white flex gap-1.5"
              label={
                <>
                  <Play /> GetOnAndroid
                </>
              }
            />
          </div>
        </div>
        <div className=" absolute right-[200px] top-[310px] animate-bounce " >
          <img className="max-w-md" src="src/assets/happy user.avif" alt="" />
          <img
            className="w-50 transform translate-y-[-409px] translate-x-[-70px]"
            src="src/assets/sm1.png"
            alt=""
          />
          <img
            className="w-50 transform translate-y-[-470px] translate-x-[330px]"
            src="src/assets/sm2.png"
            alt=""
          />
          <img
            className="w-50 transform translate-y-[-409px] translate-x-[-70px]"
            src="src/assets/sm3.png"
            alt=""
          />
          <img
            className="w-50 transform translate-y-[-460px] translate-x-[330px]"
            src="src/assets/sm4.png"
            alt=""
          />
          <img
            className="w-50 transform translate-y-[-409px] translate-x-[-70px]"
            src="src/assets/sm1.png"
            alt=""
          />
          <img
            className="w-50 transform translate-y-[-430px] translate-x-[330px]"
            src="src/assets/sm5.png"
            alt=""
          />
        </div>
      </main>
      <section className="flex gap-5  ml-40 text-left">
        <img className="size-30" src="src/assets/security-lock.svg" alt="" />
        <div >
            <h1 className="text-left py-2 text-2xl font-black">Your security is our priority</h1>
            <p className=" text-[14px] py-2 max-w-130">PiggyVest uses the highest level of Internet Security and it is secured by 256 bits SSL security 
              encryption to ensure that your information is completely protected from fraud.</p>
            
        </div>
      </section>
      <section>
            <Grid />
      </section>       
             
    </div>
  );
};

export default Home;
