import { AnimatePresence, motion } from "framer-motion";

type PageDescriptionProps = {
  text: string;
};

export default function PageDescription({ text }: PageDescriptionProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="w-[70%] "
        key={text}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease: "linear", duration: 0.2 }}
      >
        <img src="/public/quote.svg" className="block mb-5" />
        <p className=" mx-auto text-xl leading-10 text-white relative">
          {text}
          <img
            src="/public/square.svg"
            className="absolute right-0 bottom-0 translate-y-[100%]"
          />
          <img
            src="/public/dots.svg"
            className="absolute top-0 right-0 translate-y-[-300%] translate-x-[-80%]"
          />
        </p>
      </motion.div>
    </AnimatePresence>
  );
}
