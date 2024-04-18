import { AnimatePresence, motion } from "framer-motion";

type PageDescriptionProps = {
  text: string;
};

export default function PageDescription({ text }: PageDescriptionProps) {
  const animationDuration = 0.3;
  const clipVariants = {
    initial: {
      clipPath: "polygon(0% 0%,0% 0%,0% 0%, 0% 0%)",
    },
    animate: {
      clipPath: "polygon(0% 0%,100% 0%, 100% 100%, 0% 100%)",
    },
  };

  const squareVariants = {
    initial: {
      bottom: "100%",
      right: "100%",
    },
    animate: {
      bottom: "0%",
      right: "0%",
    },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div className="w-[70%] " key={text}>
        <div className=" mx-auto text-xl leading-10 text-white relative bg-clip-content ">
          <motion.p
            transition={{ duration: animationDuration }}
            variants={clipVariants}
            initial="initial"
            animate="animate"
            exit="initial"
          >
            <img src="/public/quote.svg" className="block mb-5" />
            {text}
          </motion.p>
          <motion.img
            variants={squareVariants}
            initial="initial"
            transition={{ duration: animationDuration }}
            animate="animate"
            exit="initial"
            src="/public/square.svg"
            className="absolute right-0 bottom-0 translate-y-[50%] translate-x-[50%] "
          />
          <img
            src="/public/dots.svg"
            className="absolute top-0 right-0 translate-y-[-300%] translate-x-[-80%]"
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
