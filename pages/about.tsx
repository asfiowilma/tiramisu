import React, { useEffect } from "react";

import Blob from "@/components/Blob";
import { GiCakeSlice } from "react-icons/gi";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import TrakteerButton from "@/components/trakteer/TrakteerButton";
import TrakteerModal from "@/components/trakteer/TrakteerModal";
import { TrakteerProvider } from "@/components/trakteer/TrakteerProvider";
import { useNavigationStore } from "@/services/hooks/useNavigationStore";

const About = () => {
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
        <title>About Tiramisu</title>
      </Head>
      <div className="min-h-screen flex flex-col items-center bg-base-200">
        <Navbar isTransparent isFixed isAppWidth={false} />
        <main className="flex-1 w-full">
          <div className="hero relative min-h-screen bg-gradient-to-br from-primary-focus via-primary to-secondary-focus overflow-hidden">
            <Blob className="hidden sm:block absolute opacity-10 inset-0" />
            <div className="p-4">
              <div className="card bg-base-200 max-w-screen-sm w-full mt-16 sm:m-8 shadow-lg">
                <div className="card-body prose dark:text-gray-200 prose-p:my-1">
                  <div className="card-title">
                    <GiCakeSlice className="w-5 h-5" /> About Tiramisu
                  </div>
                  <p>
                    It&apos;s app that allows you to put down a bill and have your friends pay you
                    back.
                  </p>
                  <p>
                    <b>Tiramisu</b> is a free app for friends to split the bill. Whether for lunch
                    with your co-workers or that birthday dinner with pals, we take all of the
                    annoying math out of ordering, paying and splitting the bill.
                  </p>
                  <p>
                    Never again will you have to guess who paid for what. Use <b>Tiramisu</b> Split
                    Bill and Invoice Maker to split your bill - no accounts or complicated
                    calculations needed.
                  </p>
                  <p className="mt-8">
                    If you found <b>Tiramisu</b> helpful, feel free to support the dev~
                  </p>
                  <div className="card-actions not-prose">
                    <TrakteerProvider>
                      <TrakteerButton className="umami--click--trakteer-button-about" />
                      <TrakteerModal />
                    </TrakteerProvider>
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

export default About;
