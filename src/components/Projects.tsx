import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { btns, projects } from "../data";

const Projects = () => {
  const [filterImages, setFilterImages] = useState<any>(null);

  useEffect(() => {
    setFilterImages(projects);
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    let btnType = (event.target as HTMLButtonElement).value;
    const newFilterImages = projects.filter((project) => {
      return project.value === btnType;
    });
    btnType !== "all"
      ? setFilterImages(newFilterImages)
      : setFilterImages(projects);
  };
  return (
    <div className="section" id="projects">
      <div className="mb-8">
        <h2 className="text-[1.5rem] font-bold">My Collections</h2>
        <div className="w-14 h-[3px] rounded-sm bg-blue"></div>
      </div>
      <div className="flex flex-wrap gap-8">
        {btns.map((btn) => {
          return (
            <button key={btn.id} value={btn.value} onClick={handleClick}>
              {btn.name}
            </button>
          );
        })}
      </div>
      <AnimatePresence>
        <motion.div className="grid sm:grid-cols-2 md:grid-cols-3 mt-12 gap-3 cursor-pointer">
          {filterImages &&
            filterImages.map((filterImage: any) => {
              return (
                <motion.div
                  key={filterImage.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, transition: { duration: 0.3 } }}
                >
                  <motion.img src={filterImage.image} alt="project-image" />
                </motion.div>
              );
            })}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Projects;
