import Logo from "./Logo";
import NavbarActions from "./NavbarActions";
import NavbarRoutes from "./NavbarRoutes";

const Navbar = () => {
  return (
    <nav className="w-full bg-white border-b flex justify-between items-center py-4 px-[230px]">
      <div className="flex items-center gap-11">
        <Logo />

        <NavbarRoutes />
      </div>

      <NavbarActions />
    </nav>
  );
};

export default Navbar;
