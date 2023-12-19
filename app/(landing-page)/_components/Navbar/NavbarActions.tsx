import Image from "next/image";
import SearchBar from "./SearchBar";
import vercelLogo from "@/assets/logos/vercel.svg";

const NavbarActions = () => {
  return (
    <div className="flex items-center gap-3">
      <SearchBar />

      <button className="px-3 font-medium py-1.5 text-sm text-black border bg-white rounded-md flex items-center gap-[14px]">
        <Image src={vercelLogo} alt="vercel" className="w-4" />
        Deploy
      </button>

      <button className="px-3 font-medium py-1.5 text-sm text-white bg-black rounded-md">
        Learn
      </button>
    </div>
  );
};

export default NavbarActions;
