import { ReactNode } from "react";
import Navbar from "./_components/Navbar";

const LandingPageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default LandingPageLayout;
