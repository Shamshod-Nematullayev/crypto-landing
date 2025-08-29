import React from "react";
import Logo from "./Logo";
import Settings from "../assets/settings.svg";

export default function Header(
  attributes: React.HTMLAttributes<HTMLDivElement>
) {
  return (
    <div
      {...attributes}
      className={"flex justify-between items-center dark:text-white ".concat(
        attributes.className || ""
      )}
    >
      <Logo />
      <Navbar />
      <ActionBar />
    </div>
  );
}

function Navbar() {
  return (
    <nav className="flex list-none gap-8">
      <NavItem active label="Menu 1" href="#main-feature" />
      <NavItem label="Menu 2" href="#main-feature" />
      <NavItem label="Menu 3" href="#main-feature" />
      <NavItem label="Menu 4" href="#main-feature" />
      <NavItem label="Menu 5" href="#main-feature" />
    </nav>
  );
}

function NavItem({
  active = false,
  label,
  href,
}: {
  active?: boolean;
  label: string;
  href: string;
}) {
  return (
    <li
      className={`hover:text-primary text-[18px] font-semibold transition duration-300 ease-in-out ${
        active && "text-primary"
      }`}
    >
      <a href={href}>{label}</a>
    </li>
  );
}

function ActionBar() {
  return (
    <div className="flex list-none items-center gap-8">
      <NavItem label="LOGIN" href="#login" />
      <li>
        <a
          href="#register"
          className="block text-white bg-secondary hover:bg-primary transition duration-300 ease-in-out px-4 py-2 rounded-md mx-2 visited:text-white"
        >
          REGISTER
        </a>
      </li>
      <div className="w-[2px] h-[25px] bg-gray-400"></div>
      <img src={Settings} alt="Settings" className="cursor-pointer" />
    </div>
  );
}
