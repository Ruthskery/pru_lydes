"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { montserrat } from "../styles/font";
import { motion, AnimatePresence } from "framer-motion";
import bcdq from "../public/src/bcdq.png";
import Link from "next/link";
import DarkmodeToggle from "./darkmodeToggle";
import { PopupWidget } from "react-calendly";
import { useRouter } from "next/router";

// Accept forceBurger prop
const Navbar = ({ forceBurger = false }: { forceBurger?: boolean }) => {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const [isClient, setIsClient] = useState(false);
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY ? "down" : "up";
      if (
        direction !== scrollDirection &&
        Math.abs(currentScrollY - lastScrollY) > 10
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = currentScrollY > 0 ? currentScrollY : 0;
      setScrolled(currentScrollY > 10);
    };

    window.addEventListener("scroll", updateScrollDirection);
    return () => window.removeEventListener("scroll", updateScrollDirection);
  }, [scrollDirection]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  // Swipe to close (mobile)
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (touchStartX.current !== null) {
        const touchCurrentX = e.touches[0].clientX;
        const deltaX = touchStartX.current - touchCurrentX;
        if (deltaX > 100) {
          setMenuOpen(false);
          touchStartX.current = null;
        }
      }
    };

    if (menuOpen) {
      window.addEventListener("touchstart", handleTouchStart);
      window.addEventListener("touchmove", handleTouchMove);
    }

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [menuOpen]);

  const navbarBgColor =
    router.pathname === "/me"
      ? scrolled
        ? "bg-[#E1B951]"
        : "bg-transparent lg:bg-[#E1B951]"
      : scrolled
      ? "bg-[#E1B951]"
      : "bg-transparent";

  if (!isClient) return null;
  return (
    <>
      {/* Always show burger if forceBurger, else only on mobile */}
      <div
        className={
          (forceBurger ? "" : "lg:hidden ") +
          "fixed top-0 left-0 p-3 text-white z-50"
        }
      >
        <button
          onClick={() => setMenuOpen(true)}
          aria-label="Toggle Menu"
          className="text-white"
        >
          <Menu size={32} />
        </button>
      </div>
      <AnimatePresence>
        {scrollDirection === "up" && !forceBurger && (
          <motion.nav
            key="navbar"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className={`fixed top-0 left-1/2 transform -translate-x-1/2 z-40 px-6 py-4 lg:pr-[12.5rem] flex items-center justify-between transition-all duration-300 ease-in-out ${navbarBgColor}
              ${
                scrolled
                  ? "bg-transparent h-17 pl-20 shadow-none lg:shadow lg:bg-[#E1B951] lg:rounded-bl-[2.5rem] lg:rounded-br-[2.5rem] w-[95%]"
                  : "w-full h-17"
              }`}
          >
            {/* Logo (Left for Desktop, Centered for Mobile) */}
            <div className="flex items-center w-full">
              <Link href="/" className="flex items-center">
                <Image
                  src={bcdq}
                  alt="Blue Chalcedony"
                  width={70}
                  height={70}
                  className=" hidden lg:block"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-15">
              <ul
                className={`${montserrat.className} flex space-x-15 text-base font-extrabold`}
              >
                {["Service", "Products", "Contact", "About"].map(
                  (item, index) => {
                    const linkHref =
                      item === "Service"
                        ? "/#service"
                        : item === "Products"
                        ? "/#products"
                        : item === "Contact"
                        ? "/#contact"
                        : item === "About"
                        ? "/me"
                        : "/";
                    const isActive =
                      (item === "About" && router.pathname === "/me") ||
                      (item === "Service" && router.asPath === "/#service") ||
                      (item === "Products" && router.asPath === "/#products") ||
                      (item === "Contact" && router.asPath === "/#contact");
                    return (
                      <motion.li
                        key={index}
                        initial={{
                          backgroundColor: "rgba(0,0,0,0)",
                          borderRadius: "0.5rem",
                          padding: 8,
                        }}
                        animate={
                          isActive
                            ? {
                                backgroundColor: "rgba(0,0,0,0.9)",
                                borderRadius: "0.5rem",
                                color: "#E1B951",
                              }
                            : { backgroundColor: "rgba(0,0,0,0)", borderRadius: "0.5rem", color: "inherit" }
                        }
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className={`relative cursor-pointer mt-1 after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-full after:h-[2px] after:bg-black after:transform after:-translate-x-1/2 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300${isActive ? ' text-[#E1B951]' : ''}`}
                      >
                        <Link
                          href={linkHref}
                          aria-label={`Navigate to ${item}`}
                          role="link"
                          className={isActive ? 'text-[#E1B951]' : ''}
                        >
                          {item}
                        </Link>
                      </motion.li>
                    );
                  }
                )}
                <li className="mb-1.2">
                  <DarkmodeToggle />
                </li>
                <li>
                  <div className=" text-white font-semibold rounded-full px-6 py-1 shadow ">
                    <PopupWidget
                      url="https://calendly.com/mikotothemax/30min"
                      rootElement={document.body}
                      text="Schedule an Appointment"
                      textColor="#FFFFFF"
                      color="#000000"
                    />
                  </div>
                </li>
              </ul>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Blurred Overlay + Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Blur Background */}
            <motion.div
              className="fixed top-0 left-0 w-full h-full backdrop-blur-sm bg-black/30 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />

            {/* Slide-in Menu */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed top-0 left-0 w-4/5 max-w-xs h-full bg-[#E1B951] z-50 flex flex-col pt-12"
            >
              {/* Logo in Mobile Menu */}
              <div className="flex justify-center mb-8">
                <Link href="/" className="flex justify-center items-center">
                  <Image
                    src={bcdq}
                    alt="Blue Chalcedony"
                    width={70}
                    height={70}
                  />
                </Link>
              </div>

              <button
                className="absolute top-4 right-4"
                onClick={() => setMenuOpen(false)}
                aria-label="Close Menu"
              >
                <X size={32} />
              </button>

              <ul
                className={`${montserrat.className} items-center flex flex-col space-y-6 text-xl font-bold`}
              >
                {["Service", "Products", "Contact", "About"].map((item, index) => {
                  const linkHref =
                    item === "Service"
                      ? "/#service"
                      : item === "Products"
                      ? "/#products"
                      : item === "Contact"
                      ? "/#contact"
                      : item === "About"
                      ? "/me"
                      : "/";
                  const isActive =
                    (item === "About" && router.pathname === "/me") ||
                    (item === "Service" && router.asPath === "/#service") ||
                    (item === "Products" && router.asPath === "/#products") ||
                    (item === "Contact" && router.asPath === "/#contact");
                  return (
                    <motion.li
                      key={index}
                      initial={{
                        backgroundColor: "rgba(0,0,0,0)",
                        borderRadius: 0,
                        padding: 8,
                      }}
                      animate={
                        isActive
                          ? {
                              backgroundColor: "rgba(0,0,0,0.9)",
                              borderRadius: 0,
                              color: "#E1B951",
                              width: "100%",
                            }
                          : { backgroundColor: "rgba(0,0,0,0)", borderRadius: 0, color: "inherit", width: "100%" }
                      }
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className={`relative cursor-pointer mt-1 w-full after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-full after:h-[2px] after:bg-black after:transform after:-translate-x-1/2 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300${isActive ? ' text-[#E1B951]' : ''}`}
                    >
                      <Link
                        href={linkHref}
                        aria-label={`Navigate to ${item}`}
                        role="link"
                        className={isActive ? 'text-[#E1B951] w-full block' : 'w-full block'}
                        onClick={() => setMenuOpen(false)}
                      >
                        {item}
                      </Link>
                    </motion.li>
                  );
                })}
                <li className="mb-1.2">
                  <DarkmodeToggle />
                </li>
                <li>
                  <button
                    className="w-full text-[16px] text-white font-semibold rounded-full px-6 py-4 shadow bg-black hover:bg-gray-800 transition-colors"
                    onClick={() => setShowAppointmentModal(true)}
                  >
                    Schedule an Appointment
                  </button>
                </li>
              </ul>
              {showAppointmentModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                  <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative animate-fadeIn">
                    <button
                      className="absolute top-2 right-2 text-gray-500 hover:text-black text-2xl"
                      onClick={() => setShowAppointmentModal(false)}
                      aria-label="Close"
                    >
                      &times;
                    </button>
                    <iframe
                      src="https://calendly.com/mikotothemax/30min"
                      title="Schedule an Appointment"
                      className="w-full h-[500px] rounded-lg border-none"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
