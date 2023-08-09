"use client";
import React from "react";
import NavigationItem from "./NavigationItem";
import Link from "next/link";
import NavIcon from "./NavIcon";

function Navibar() {
  return (
    <nav className="flex flex-row items-center p-4 justify-between w-full">
      <NavIcon />
      <ul className="flex flex-row justify-center items-center text-center">
        <NavigationItem link="/" text="Hem" />
        <NavigationItem link="/membership" text="Medlemskap" />
        <NavigationItem link="/openPreschool" text="Öppen Förskola" />
        <NavigationItem link="/activities" text="Aktiviteter och Kalender" />
        <NavigationItem link="/birthdays" text="Barnkalas" />
        <NavigationItem link="/aboutUs" text="Om Oss" />
        <NavigationItem link="/contact" text="Kontakt" />
      </ul>
    </nav>
  );
}

export default Navibar;
