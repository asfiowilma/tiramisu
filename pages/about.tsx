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
                <div className="card-body space-y-2">
                  <div className="card-title">
                    <GiCakeSlice className="w-5 h-5" /> About Tiramisu
                  </div>
                  <p>
                    Hey there! I&apos;m the developer of Tiramisu, a free app that makes splitting
                    bills with friends a breeze. Tired of doing complicated math every time you go
                    out to eat with friends? Me too! That&apos;s why I created Tiramisu.
                  </p>

                  <p>
                    With Tiramisu&apos;s easy-to-use Split Bill and Invoice Maker features, you can
                    split bills and generate receipts in just a few clicks. No need for complicated
                    calculations or creating accounts - just enter the names and items to pay for,
                    and let Tiramisu do the rest.
                  </p>

                  <p>
                    And the best part? <b>It&apos;s completely free to use.</b>
                  </p>

                  <p>
                    Building Tiramisu has been an exciting journey - I&apos;ve learned so much along
                    the way! If you&apos;re tired of guessing who needs to pay how much or doing
                    complicated math, give Tiramisu a try.
                  </p>

                  <p>Thanks for checking out Tiramisu - happy bill splitting!</p>
                  <div className="divider"></div>
                  <p>If you find it helpful, consider fueling the dev&apos;s caffeine addiction~</p>
                  <TrakteerProvider>
                    <div className="card-actions flex-col sm:flex-row items-stretch">
                      <TrakteerButton className="umami--click--trakteer-button-about" />
                    </div>
                    <TrakteerModal />
                  </TrakteerProvider>
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
