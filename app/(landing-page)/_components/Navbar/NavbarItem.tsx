"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { IMenus } from "@/types";
import { ArrowUpRight } from "lucide-react";

const NavbarItem = ({ menu }: { menu: IMenus }) => {
  const pathName = usePathname();

  const isActive =
    (pathName === "/" && menu.href === "/") ||
    pathName === menu.href ||
    pathName.startsWith(menu.href);

  return (
    <div className="flex items-start">
      <Link href={menu.href} target={menu.isNewTab ? "_blank" : "_self"}>
        <div className="flex items-start">
          <p
            className={cn(
              "cursor-pointer  transition ",
              isActive
                ? "text-blue-500 font-medium"
                : "text-[#666666] hover:text-black"
            )}
          >
            {menu.title}
          </p>

          {menu.isNewTab && <ArrowUpRight className="w-3 h-3" />}
        </div>
      </Link>
    </div>
  );
};

export default NavbarItem;
