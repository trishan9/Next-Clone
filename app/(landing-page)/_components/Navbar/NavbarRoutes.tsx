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
    href: "https://vercel.com/analytics",
    isNewTab: true,
  },
  {
    title: "Templates",
    href: "https://vercel.com/templates/next.js",
    isNewTab: true,
  },
  {
    title: "Enterprise",
    href: "https://vercel.com/contact/sales",
    isNewTab: true,
  },
];

const NavbarRoutes = () => {
  return (
    <div className="flex items-center gap-6 text-sm ">
      {menus.map((menu) => (
        <NavbarItem key={menu.title} menu={menu} />
      ))}
    </div>
  );
};

export default NavbarRoutes;
