"use client";

import Image from "next/image";
import Wrapper from "@/components/wrapper";
import { Button } from "@/components/ui/button";

import manWIthRobot from "@/public/images/man-with-robot.gif";

export default function Home() {
  return (
    <section className="flex flex-col lg:flex-row">
      <section className="flex h-screen w-full flex-col justify-between p-9 lg:h-auto">
        <Wrapper>
          <div className="mx-auto flex max-w-sm flex-col justify-between">
            <span
              className={`-mt-14 inline-block text-[64px] font-bold text-black dark:text-stone-400`}
            >
              Telegram Community
            </span>
            <p className="pb-6 font-medium">
My aim with $NANiEKO is to spread positivity and love, Us Solana degens are known for our Web3 and Meme Culture. We are building the strongest Love spreading community on our telegram
            </p>

            <div className="">
              <Button size="xl" className="w-full font-bold" variant="brand1">
                <a
                  href="https://t.me/NANiEKOGroup"
                  target="_blank"
                  rel="noreferrer"
                  className="pb-1 dark:text-zinc-800 text-zinc-100"
                >
                  Telegram
                </a>{" "}
              </Button>
            </div>
          </div>
        </Wrapper>
      </section>

      {/* second half */}

      <section className="hidden lg:flex h-screen w-full flex-col justify-center items-center bg-[#CDCDCC] p-9">
        <Image src={manWIthRobot} alt="Man sitting in wheelchair" />
      </section>
    </section>
  );
}
