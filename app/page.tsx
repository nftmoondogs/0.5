"use client";

import React, { useState } from 'react';
import Image from "next/image";
import Wrapper from "@/components/wrapper";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [imageSrc, setImageSrc] = useState("https://i.ibb.co/mJ2RwRn/1.png");

  return (
    <section className="flex flex-col lg:flex-row">
      <section className="flex h-screen w-full flex-col justify-between p-9 lg:h-auto">
        <Wrapper>
          <div className="mx-auto flex max-w-sm flex-col justify-between">
            <span
              className={`-mt-14 inline-block text-[64px] font-bold text-black dark:text-green-600`}
            >
              $0.5
            </span>
            <p className="pb-6 font-medium text-white">
              Dive into a trust-based experiment designed to ensure fair distribution, faster bonding curve completion time and eliminate whale domination. By participating with just 0.5 SOL or lower, you not only build trust within the project but this is the first step of a three-step wider strategy where those who stick to the rules will be rewarded. You may have noticed that most of the projects that fail have a weak distribution, we intend to combat this. Good luck and stay faithful.
            </p>
            <div className="">
              <Button size="xl" className="w-full font-bold" variant="brand">
                <a
                  href="https://pump.fun/board"
                  target="_blank"
                  rel="noreferrer"
                  className="pb-1 dark:text-zinc-800 text-zinc-100"
                >
                  Buy From Pump.fun
                </a>{" "}
              </Button>
            </div>
            <div className="pt-2">
              <Button size="xl" className="w-full font-bold" variant="brand">
                <a
                  href="https://pump.fun/board"
                  target="_blank"
                  rel="noreferrer"
                  className="pb-1 dark:text-zinc-800 text-zinc-100"
                >
                  Telegram
                </a>{" "}
              </Button>
            </div>
            <div className="pt-2">
              <Button size="xl" className="w-full font-bold" variant="brand">
                <a
                  href="https://pump.fun/board"
                  target="_blank"
                  rel="noreferrer"
                  className="pb-1 dark:text-zinc-800 text-zinc-100"
                >
                  Twitter
                </a>{" "}
              </Button>
            </div>
          </div>
        </Wrapper>
      </section>

      {/* second half */}
      <section className="hidden lg:flex h-screen w-full flex-col justify-center items-center bg-[#f1efe7] p-9">
        <div onMouseEnter={() => setImageSrc("https://i.ibb.co/LxgG86h/2.png")}
             onMouseLeave={() => setImageSrc("https://i.ibb.co/mJ2RwRn/1.png")}>
          <Image 
            src={imageSrc} 
            alt="Man sitting in wheelchair" 
            width={720}
            height={480} 
            layout="responsive" />
        </div>
      </section>
    </section>
  );
}
