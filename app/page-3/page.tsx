"use client";

import Image from "next/image";
import Wrapper from "@/components/wrapper";
import { Button } from "@/components/ui/button";

import boyAndGirl from "@/public/images/boy-and-girl.gif";

export default function Home() {
  return (
    <section className="flex flex-col lg:flex-row">
      <section className="flex h-screen w-full flex-col justify-between p-9 lg:h-auto">
        <Wrapper>
          <div className="mx-auto flex max-w-sm flex-col justify-between">
            <span
              className={`-mt-14 inline-block text-[64px] font-bold text-black dark:text-green-600`}
            >
              Twitter
            </span>
            <p className="pb-6 font-medium">
As the Owner I will be posting $NANiEKO MEMEs every single day along with hosting Twitter Spaces among the community to get us all together and make $NANiEKO the best token on Solana!
            </p>

            <div className="">
              <Button size="xl" className="w-full font-bold" variant="brand2">
                <a
                  href="https://twitter.com/naniekosol"
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

      <section className="hidden lg:flex h-screen w-full flex-col justify-center items-center bg-[#A9C54C] p-9">
        <Image src={boyAndGirl} alt="Boy and girl playing with robot" />
      </section>
    </section>
  );
}
