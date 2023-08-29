"use client";
import React, { useEffect, useState } from "react";
import NavigationItem from "./NavigationItem";
import NavIcon from "./NavIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

function Navibar() {
  const [viewState, setViewState] = useState(false);
  const [color, setColor] = useState("#FFFFFF");
  const [background, setBackground] = useState("bg-white");

  const handleViewState = () => {
    setViewState(!viewState);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setBackground("bg-comfy-blue");
      } else {
        setBackground("bg-white");
      }
    };
    window.addEventListener("scroll", changeColor);

    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  return (
    <nav
      className={`fixed left-0 top-0 w-full lg:relative lg:top-auto md:left-auto ease-in duration-300 z-20 lg:bg-white ${background}`}>
      <div className="flex items-center p-4 justify-between w-full">
        <NavIcon />
        <ul className="hidden lg:flex">
          <NavigationItem link="/" text="Hem" />
          <NavigationItem link="/membership" text="Medlemskap" />
          <NavigationItem link="/gallery" text="Galleri" />
          <NavigationItem link="/openPreschool" text="Öppen Förskola" />
          <NavigationItem link="/activities" text="Aktiviteter och Kalender" />
          <NavigationItem link="/birthdays" text="Barnkalas" />
          <NavigationItem link="/aboutUs" text="Om Oss" />
          <NavigationItem link="/contact" text="Kontakt" />
        </ul>

        {/* Mobile Button */}
        <button
          onClick={handleViewState}
          className="block lg:hidden font-bold text-xl z-30">
          {viewState ? (
            <FontAwesomeIcon icon={faX} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </button>
        {/* Mobile Menu */}
        <div
          className={`${
            viewState ? `left-0` : `left-[-100%]`
          } lg:hidden absolute top-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-comfy-blue text-center ease-in duration-300 z-20`}>
          <ul>
            <NavigationItem link="/" text="Hem" onClick={handleViewState} />
            <NavigationItem
              link="/membership"
              text="Medlemskap"
              onClick={handleViewState}
            />
            <NavigationItem
              link="/gallery"
              text="Galleri"
              onClick={handleViewState}
            />
            <NavigationItem
              link="/openPreschool"
              text="Öppen Förskola"
              onClick={handleViewState}
            />
            <NavigationItem
              link="/activities"
              text="Aktiviteter och Kalender"
              onClick={handleViewState}
            />
            <NavigationItem
              link="/birthdays"
              text="Barnkalas"
              onClick={handleViewState}
            />
            <NavigationItem
              link="/aboutUs"
              text="Om Oss"
              onClick={handleViewState}
            />
            <NavigationItem
              link="/contact"
              text="Kontakt"
              onClick={handleViewState}
            />
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navibar;
