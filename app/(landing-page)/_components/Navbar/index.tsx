import Logo from "./Logo";
import NavbarRoutes from "./NavbarRoutes";

const Navbar = () => {
  return (
    <nav className="w-full bg-white border-b flex justify-between items-center py-4 px-[230px]">
      <div className="flex gap-11 items-center">
        <Logo />

        <NavbarRoutes />
      </div>

      <div>Right</div>
    </nav>
  );
};

export default Navbar;
