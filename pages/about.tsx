import Head from "next/head";
import React from "react";
import Navbar from "@/components/Navbar";
import { GiCakeSlice } from "react-icons/gi";

type Props = {};

const About = (props: Props) => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="A browser-based app for splitting bills and generating beautiful invoices."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <title>About Tiramisu</title>
      </Head>
      <div className="min-h-screen flex flex-col items-center bg-base-200">
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
            <div className="card bg-base-100 max-w-screen-sm w-full m-8 shadow-lg">
              <div className="card-body prose dark:prose-invert prose-p:my-1">
                <div className="card-title">
                  <GiCakeSlice className="w-5 h-5" /> About Tiramisu
                </div>
                <p>
                  It's app that allows you to put down a bill and have your friends pay you back
                </p>
                <p>
                  Tiramisu is a free app for friends to split the bill. Whether for lunch with your
                  co-workers or that birthday dinner with pals, we take all of the annoying math out
                  of ordering, paying and splitting the bill.
                </p>
                <p>
                  Never again will you have to guess who paid for what. Use Tiramisu Split Bill and
                  Receipt Maker to split your bill - no accounts or complicated calculations needed.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default About;
