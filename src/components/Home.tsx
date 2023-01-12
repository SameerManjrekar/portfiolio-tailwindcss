import { motion } from "framer-motion";

import hero from "../assets/Hero.jpg";

const Home = () => {
  return (
    <div className="section flex items-center justify-center" id="home">
      <div className="grid md:grid-cols-2 place-items-center gap-8">
        <div className="w-[250px] h-[250px] sm:h-[350px] sm:w-[350px] rounded-full overflow-hidden shadow-heroShadow border-[20px] border-solid border-ghostWhite">
          <img
            src={hero}
            alt="hero-image"
            className="w-full h-full object-cover"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-grey sm:text-[1.25rem] mb-3">Web Developer</div>
          <h2 className="text-[2rem] sm:text-[3rem] font-bold mb-3">
            Vivaan Manjrekar
          </h2>
          <p className="opacity-80 text-[0.9rem]">
            Hi there, I am a Web developer with expertise in Artificial
            Intelligence and JavaScript. I also like to make lego and watch
            cartoons and play football in my free time.
          </p>
          <div className="flex mt-4 gap-4">
            <a
              href=""
              className="py-2 px-4 border-[2px] border-solid border-blue text-[0.9rem] rounded-[2.2rem] shadow-md"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="py-2 px-4 border-[2px] border-solid border-grey text-[0.9rem] rounded-[2.2rem] shadow-md"
            >
              Contact
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
