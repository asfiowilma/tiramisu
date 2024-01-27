import React, { useEffect } from "react";

import Blob from "@/components/Blob";
import { GiCakeSlice } from "react-icons/gi";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import TrakteerButton from "@/components/trakteer/TrakteerButton";
import TrakteerModal from "@/components/trakteer/TrakteerModal";
import { TrakteerProvider } from "@/components/trakteer/TrakteerProvider";
import { useNavigationStore } from "@/services/hooks/useNavigationStore";
import { useTheme } from "@/services/hooks/useTheme";

const About = () => {
  const { setActiveApp } = useNavigationStore();
  const { darkMode } = useTheme();

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
      <div
        data-theme={darkMode ? "dark" : "light"}
        className="flex flex-col items-center min-h-screen bg-base-200"
      >
        <Navbar isTransparent isFixed isAppWidth={false} />
        <main className="flex-1 w-full">
          <div className="relative min-h-screen overflow-hidden hero bg-gradient-to-br from-primary via-primary to-secondary">
            <Blob className="absolute inset-0 hidden sm:block opacity-10" />
            <div className="p-4">
              <div className="w-full max-w-screen-sm mt-16 shadow-lg card bg-base-200 sm:m-8">
                <div className="space-y-2 card-body">
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
                  <div className="flex-col items-stretch card-actions sm:flex-row">
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
