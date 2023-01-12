import { useState, useEffect } from "react";
import { BiChevronUp } from "react-icons/bi";

type Props = {};

const ScrollToTop = (props: Props) => {
  const [display, setDisplay] = useState<boolean>(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setDisplay(window.scrollY > 400);
    });
  }, []);
  return (
    <>
        {display && (
            <div className="fixed right-[5%] bottom-40 w-8 h-8 bg-blue flex items-center justify-center rounded-full">
                <a href="#home"><BiChevronUp className="text-3xl text-white" /></a>
            </div>
        )}
    </>
  )
};

export default ScrollToTop;
