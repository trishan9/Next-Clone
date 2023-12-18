"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { IMenus } from "@/types";

const NavbarItem = ({ menu }: { menu: IMenus }) => {
  const pathName = usePathname();

  const isActive =
    (pathName === "/" && menu.href === "/") ||
    pathName === menu.href ||
    pathName.startsWith(menu.href);

  return (
    <div className="flex items-start">
      <Link
        href={menu.isNewTab ? "https://github.com/trishan9" : menu.href}
        target={menu.isNewTab ? "_blank" : "_self"}
      >
        <p
          className={clsx(
            "cursor-pointer  transition ",
            isActive
              ? "text-blue-500 font-medium"
              : "text-[#666666] hover:text-black"
          )}
        >
          {menu.title}
        </p>
      </Link>
    </div>
  );
};

export default NavbarItem;
