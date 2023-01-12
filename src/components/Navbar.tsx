import { useEffect, useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import { navLinks } from "../data";
import NavLinks from "./NavLinks";

type Props = {};

const Navbar = (props: Props) => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [isTop, setIsTop] = useState<boolean>(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsTop(window.screenY > 20);
    });
  }, []);
  return (
    <div
      className={`${
        isTop ? "bg-ghostwhite shadow-lg" : ""
      } fixed top-0 left-0 z-20 w-full`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-2">
        <div className="flex items-center gap-2">
          <div className="rounded-full w-8 h-8 bg-blue flex items-center justify-center text-white font-bold">
            V
          </div>
          <p className="text-xl">
            Vivaan <span className="opacity-80">Manjrekar</span>
          </p>
        </div>
        <div className="hidden md:flex items-center justify-center gap-6">
          {navLinks.map((navLink) => {
            return (
              <div key={navLink.id}>
                <a href={`#${navLink.href}`} className="text-[0.95rem]">
                  {navLink.text}
                </a>
              </div>
            );
          })}
        </div>
        <HiMenuAlt3
          className="cursor-pointer md:hidden text-3xl"
          onClick={() => setToggle(!toggle)}
        />
      </div>
      {toggle && (
        <motion.div
          initial={{ x: 500 }}
          animate={{ x: 0 }}
          className="fixed right-0 top-0 bg-blue h-screen text-white w-80"
        >
          <div className="flex mt-[40%] ml-[30%] gap-8 flex-col">
            {navLinks.map((navLink) => {
              return (
                <NavLinks key={navLink.id} {...navLink} setToggle={setToggle} />
              );
            })}
          </div>
          <HiX
            className="absolute right-4 top-8 text-3xl cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
