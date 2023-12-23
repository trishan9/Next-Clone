"use client";

import Image from "next/image";
import { useState } from "react";
import { CheckIcon, Copy } from "lucide-react";
import copyToClipboard from "@/lib/copyToClipboard";
import vercelLogo from "@/assets/logos/vercel.svg";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = (text: string) => {
    copyToClipboard(text);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1200);
  };

  return (
    <section className="flex flex-col items-center justify-center w-full h-full gap-12 p-4 my-16">
      <h1 className="w-full mx-auto font-extrabold tracking-tighter text-center text-[76px] my-0">
        The React Framework for the Web
      </h1>

      <p className="text-[#666666] text-xl w-[65%] mx-auto text-center my-0">
        Used by some of the world&apos;s largest companies, Next.js enables you
        to create{" "}
        <span className="font-medium text-black">
          full-stack Web applications
        </span>{" "}
        by extending the latest React features, and integrating powerful
        Rust-based JavaScript tooling for the fastest builds.
      </p>

      <div className="flex flex-col items-center gap-5 mt-6">
        <div className="flex gap-4">
          <Button size="lg" className="text-base">
            Get Started
          </Button>

          <Button className="text-base" size="lg" variant="outline">
            Learn Next.js
          </Button>
        </div>

        <button
          className="flex gap-1.5 cursor-copy group items-center"
          onClick={() => handleCopy("npx create-next-app@latest")}
        >
          <Image src={vercelLogo} alt="vercel" className="w-2" />

          <p className="text-xs text-[#666666] font-mono">
            ~ npx create-next-app@latest
          </p>

          {!copied ? (
            <Copy className="invisible w-3 h-4 ml-2 cursor-pointer group-hover:visible" />
          ) : (
            <CheckIcon className="w-3.5 h-4 ml-2" />
          )}
        </button>
      </div>
    </section>
  );
};

export default Hero;
