import InstallPWAButton from "@/components/InstallPWAButton";
import Navbar from "@/components/Navbar";
import { useNavigationStore } from "@/services/hooks/useNavigationStore";
import Head from "next/head";
import Link from "next/link";
import React, { useEffect } from "react";
import { HiArrowRight } from "react-icons/hi";

const Home = () => {
  const { setActiveApp } = useNavigationStore();

  useEffect(() => {
    setActiveApp("");
  }, []);

  return (
    <>
      <Head>
        <meta
          name="description"
          content="A browser-based app for splitting bills and generating beautiful invoices."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <title>Tiramisu</title>
      </Head>
      <div className="min-h-screen flex flex-col items-center">
        <Navbar isTransparent isFixed isAppWidth={false} />
        <main className="flex-1 w-full">
          <div className="hero relative min-h-screen bg-gradient-to-br from-primary-focus via-primary to-secondary-focus overflow-hidden">
            <svg
              className="absolute opacity-10 inset-0"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#F2F4F8"
                d="M28.8,-43C35,-40.9,36,-28.9,41,-18.6C46,-8.2,54.9,0.5,57.2,10.7C59.6,20.9,55.3,32.5,46.6,37.8C38,43,24.9,41.8,15.2,38.5C5.5,35.2,-0.8,29.8,-8.8,28.3C-16.8,26.7,-26.5,29,-36.8,26.6C-47.2,24.2,-58.2,17.1,-60.3,8.2C-62.3,-0.7,-55.4,-11.4,-49.5,-22C-43.7,-32.5,-39,-43,-31,-44.2C-22.9,-45.3,-11.4,-37.3,-0.1,-37.2C11.3,-37.1,22.7,-45,28.8,-43Z"
                transform="translate(100 -15) scale(2)"
              />
            </svg>
            <div className="hero-content flex-col lg:flex-row w-full p-8 lg:px-24">
              <div className="flex justify-between w-full items-center">
                <div className="text-primary-content">
                  <h1 className="text-7xl  sm:text-8xl flex flex-col gap-4 font-bold mb-8">
                    <div>Eat.</div> <div>Pay.</div> <div>Split.</div>
                  </h1>
                  <h2 className="font-bold ms:text-lg sm:text-2xl mb-3">
                    It&apos;s app that allows you to put down a bill
                    <br className="hidden ms:inline" /> and have your friends pay you back
                  </h2>
                  <p className="hidden lg:block">
                    Try the demo on the right, or access the web app below! Also available as PWA.
                  </p>

                  <div className="mt-4 flex flex-col sm:flex-row gap-2 sm:gap-3">
                    <Link href={"/"} className="btn btn-secondary text-primary-content">
                      <span className="lg:hidden inline pr-1.5">Try </span> Split bill
                    </Link>
                    <Link href={"/invoice"} className="btn glass text-primary-content">
                      <span className="lg:hidden inline pr-1.5">Try </span>Invoice maker
                    </Link>
                    <InstallPWAButton />
                  </div>
                  <Link href={"/about"} className="btn btn-ghost btn-sm mt-4">
                    Learn more <HiArrowRight className="w-5 h-5 ml-1" />
                  </Link>
                </div>
                <div className="mockup-phone border-primary m-0 hidden lg:inline-block">
                  <div className="camera"></div>
                  <div className="display">
                    <iframe
                      src="/?hidenavbar=true"
                      className="artboard artboard-demo phone-2 overflow-auto"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
