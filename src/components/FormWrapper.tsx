import { easeOut, motion } from "framer-motion";
import React from "react";
import Header from "./Header";
import padlock from "/padlock.svg";

type FormWrapperProps = {
  title: string;
  description: string;
  children: React.ReactNode;
  variants: "next" | "previous" | null;
  step: number;
  index: number;
};

//adds styled header and footer, receives input fields as children
export default function FormWrapper({
  title,
  description,
  children,
  step,
  index,
}: FormWrapperProps) {
  return (
    <motion.div
      className=" p-1 absolute left-[50%] translate-x-[-50%] opacity-0"
      transition={{ ease: easeOut }}
      initial={{
        x: "400%",
      }}
      animate={{
        x: step === index ? "-50%" : step > index ? "-400%" : "400%",
        opacity: step === index ? 1 : 0,
      }}
    >
      <Header title={title} description={description} />
      <hr className="my-4 text-gray" />
      {children}
      <p className="text-sm text-gray text-center flex gap-2 text-[12px] justify-center mt-5">
        <img src={padlock} /> <span>Your info is safely secured</span>
      </p>
    </motion.div>
  );
}
