import { IMenus } from "@/types";
import NavbarItem from "./NavbarItem";

const menus: IMenus[] = [
  {
    title: "Showcase",
    href: "/showcase",
  },
  {
    title: "Docs",
    href: "/docs",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Analytics",
    href: "/analytics",
    isNewTab: true,
  },
  {
    title: "Templates",
    href: "/templates",
    isNewTab: true,
  },
  {
    title: "Enterprise",
    href: "/enterprise",
    isNewTab: true,
  },
];

const NavbarRoutes = () => {
  return (
    <div className=" text-sm flex gap-6 items-center ">
      {menus.map((menu) => (
        <NavbarItem key={menu.title} menu={menu} />
      ))}
    </div>
  );
};

export default NavbarRoutes;
