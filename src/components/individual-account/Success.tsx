import Header from "../Header";
import Tick from "./Tick";
import { motion } from "framer-motion";

type SuccessProps = {
  step: number;
  index: number;
};

export default function Success({ step, index }: SuccessProps) {
  const isActive = step === index;
  const variants = {
    initial: {
      opacity: 0,
      zIndex: "-2",
    },
    animate: {
      opacity: 1,
    },
  };
  return (
    <motion.div
      className="flex flex-col mx-auto items-center gap-7 max-w-[25rem] absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] -z-10"
      variants={variants}
      initial="initial"
      animate={isActive ? "animate" : "initial"}
    >
      <Tick isActive={isActive} />
      <Header
        textAlign="center"
        title="Success"
        description="You have received an email where you can read more about your account and setup your password."
      />
    </motion.div>
  );
}
