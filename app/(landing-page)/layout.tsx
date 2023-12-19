import { ReactNode } from "react";
import Navbar from "./_components/Navbar";

const LandingPageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />

      {children}
    </>
  );
};

export default LandingPageLayout;
