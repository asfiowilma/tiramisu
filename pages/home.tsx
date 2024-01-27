import React, { useEffect } from "react";

import Blob from "@/components/Blob";
import Head from "next/head";
import { HiArrowRight } from "react-icons/hi";
import InstallPWAButton from "@/components/InstallPWAButton";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { useNavigationStore } from "@/services/hooks/useNavigationStore";

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
      <div className="flex flex-col items-center min-h-screen">
        <Navbar isTransparent isFixed isAppWidth={false} />
        <main className="flex-1 w-full">
          <div className="relative h-screen overflow-hidden hero bg-gradient-to-br from-primary to-secondary">
            <Blob className="absolute inset-0 opacity-10" />
            <div className="flex-col w-full p-8 hero-content lg:flex-row lg:px-24">
              <div className="flex items-center justify-between w-full">
                <div className="text-primary-content">
                  <h1 className="flex flex-col gap-4 mb-8 font-bold text-7xl sm:text-8xl">
                    Eat. Pay. <div>Split.</div>
                  </h1>
                  <h2 className="mb-3 font-bold ms:text-lg sm:text-xl">
                    It&apos;s app that allows you to put down a bill
                    <br className="hidden ms:inline" /> and have your friends pay you back
                  </h2>
                  <p className="hidden lg:block">
                    Try the demo on the right, or access the web app below!
                  </p>
                  <p>Also available as PWA.</p>

                  <div className="flex flex-col gap-2 mt-4 sm:flex-row sm:gap-3">
                    <Link href={"/"} className="px-8 btn btn-secondary text-primary-content">
                      <span className="lg:hidden inline pr-1.5">Try </span> Split bill
                    </Link>
                    <Link href={"/invoice"} className="btn glass text-primary-content">
                      <span className="lg:hidden inline pr-1.5">Try </span>Invoice maker
                    </Link>
                    <InstallPWAButton />
                  </div>
                  <Link href={"/about"} className="mt-4 btn btn-ghost btn-sm">
                    Learn more <HiArrowRight className="w-5 h-5 ml-1" />
                  </Link>
                </div>
                <div className="relative overflow-visible">
                  <Blob
                    className="absolute hidden overflow-visible opacity-50"
                    transform="translate(110 180) scale(2.8) rotate(10)"
                  />
                  <svg
                    className="absolute overflow-visible text-secondary opacity-60"
                    viewBox="0 0 500 500"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    transform="translate(50 100) scale(2.2)"
                    width="100%"
                  >
                    <defs>
                      <pattern
                        id="pattern"
                        x="0"
                        y="0"
                        width="100"
                        height="20"
                        patternUnits="userSpaceOnUse"
                        fill="#fff"
                      >
                        <path d="M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z"></path>
                      </pattern>
                    </defs>
                    <path
                      id="blob"
                      d="M385.5,326Q371,402,285.5,436.5Q200,471,146.5,398.5Q93,326,72,240Q51,154,139,151Q227,148,266.5,164Q306,180,353,215Q400,250,385.5,326Z"
                      fill="url(#pattern)"
                    ></path>
                  </svg>
                  <div className="hidden m-0 scale-90 mockup-phone border-primary lg:inline-block rotate-12">
                    <div className="camera"></div>
                    <div className="border-4 border-black display">
                      <iframe
                        src="/?hidenavbar=true"
                        className="overflow-auto artboard artboard-demo phone-2"
                        loading="lazy"
                      ></iframe>
                    </div>
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
