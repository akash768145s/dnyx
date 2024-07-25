"use client";
import Link from "next/link";
import Logo from "./Logo";
import {
  InstagramIcon,
  GithubIcon,
  LinkedinIcon,
  MoonIcon,
  SunIcon,
  TwitterIcon,
} from "../Icons";
import siteMetadata from "@/src/utils/siteMetaData";
import { useThemeSwitch } from "../Hooks/useThemeSwitch";
import { useState } from "react";
import { cx } from "@/src/utils";

const Header = () => {
  const [mode, setMode] = useThemeSwitch();
  const [click, setClick] = useState(false);

  const toggle = () => {
    setClick(!click);
  };

  const handleLinkClick = () => {
    setClick(false); // Hide the navbar when a link is clicked
  };
  return (
    <header className="w-full p-4  px-5 sm:px-10 flex items-center justify-between">
      <Logo />
      <button
        className="inline-block sm:hidden z-50 fixed top-6 right-6"
        onClick={toggle}
        aria-label="Hamburger Menu"
        style={{ background: "transparent", border: "none" }}
      >
        <div className="w-8 h-6 cursor-pointer relative">
          <div
            className="absolute top-0 left-0 w-full h-0.5 bg-dark dark:bg-light rounded transition-transform duration-300"
            style={{
              transform: click
                ? "rotate(-45deg) translateY(0)"
                : "rotate(0deg) translateY(6px)",
            }}
          />
          <div
            className="absolute top-1/2 left-0 w-full h-0.5 bg-dark dark:bg-light rounded transition-opacity duration-300"
            style={{
              opacity: click ? 0 : 1,
              transform: "translateY(-50%)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-full h-0.5 bg-dark dark:bg-light rounded transition-transform duration-300"
            style={{
              transform: click
                ? "rotate(45deg) translateY(0)"
                : "rotate(0deg) translateY(-6px)",
            }}
          />
        </div>
      </button>

      <nav
        className={`fixed inset-0 bg-light/80 backdrop-blur-sm z-50 flex flex-col items-center justify-center transition-transform ease duration-300 ${
          click ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <Link href="/" className="mb-6 text-2xl" onClick={handleLinkClick}>
          Home
        </Link>
        <Link href="/about" className="mb-6 text-2xl" onClick={handleLinkClick}>
          About Us
        </Link>
        <Link
          href="/contact"
          className="mb-6 text-2xl"
          onClick={handleLinkClick}
        >
          Contact
        </Link>
        <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className={cx(
            "w-10 h-10 ease flex items-center justify-center rounded-full p-2",
            mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
          )}
          aria-label="theme-switcher"
        >
          {mode === "light" ? (
            <MoonIcon className={"fill-dark"} />
          ) : (
            <SunIcon className={"fill-dark"} />
          )}
        </button>
      </nav>

      <nav
        className=" w-max py-3 px-8 border border-solid border-dark rounded-full font-medium capitalize  items-center hidden sm:flex
        fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50"
      >
        <Link href="/" className="mr-2">
          Home
        </Link>
        <Link href="/about" className="mx-2">
          About Us
        </Link>
        <Link href="/contact" className="mx-2">
          Contact Us
        </Link>
        <Link href="/contact" className="mx-2">
          Services
        </Link>
        <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className={cx(
            "w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1",
            mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
          )}
          aria-label="theme-switcher"
        >
          {mode === "light" ? (
            <MoonIcon className={"fill-dark"} />
          ) : (
            <SunIcon className={"fill-dark"} />
          )}
        </button>
      </nav>
      <div className=" hidden sm:flex items-center">
        <a
          href={siteMetadata.linkedin}
          rel="noopener noreferrer"
          className="inline-block w-6 h-6 mr-4"
          aria-label="Reach out to us via LinkedIn"
          target="_blank"
        >
          <LinkedinIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
        <a
          href={siteMetadata.twitter}
          rel="noopener noreferrer"
          className="inline-block w-6 h-6 mr-4"
          aria-label="Reach out to us via Twitter"
          target="_blank"
        >
          <TwitterIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
        <a
          href={siteMetadata.github}
          rel="noopener noreferrer"
          className="inline-block w-6 h-6 mr-4"
          aria-label="Check our profile on Github"
          target="_blank"
        >
          <GithubIcon className="  hover:scale-125 transition-all ease duration-200 dark:fill-light" />
        </a>
        <a
          href={siteMetadata.instagram}
          rel="noopener noreferrer"
          className="inline-block w-5 h-5 mr-4 mb-1 align-baseline"
          aria-label="Check our profile on Instagram"
          target="_blank"
        >
          <InstagramIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
      </div>
    </header>
  );
};

export default Header;
