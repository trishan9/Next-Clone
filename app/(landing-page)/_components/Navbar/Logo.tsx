import Image from "next/image";
import React from "react";
import vercelLogo from "@/assets/logos/vercel.svg";
import nextLogo from "@/assets/logos/next.svg";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex gap-1">
      <Image src={vercelLogo} alt="Logo" />

      <svg height="32" role="separator" viewBox="0 0 32 32" width="32">
        <path
          d="M22 5L9 28"
          stroke="#ebebeb"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>

      <Image src={nextLogo} alt="Logo" />
    </Link>
  );
};

export default Logo;
