import React from "react";
import Header from "./Header";
import padlock from "/public/padlock.svg";

type FormWrapperProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

//adds styled header and footer, receives input fields as children
export default function FormWrapper({
  title,
  description,
  children,
}: FormWrapperProps) {
  return (
    <div className=" mt-auto max-w-[415px] self-center mx-auto p-1">
      <Header title={title} description={description} />
      <hr className="my-4 text-gray" />
      {children}
      <p className="text-sm text-gray text-center flex gap-2 text-[12px] justify-center mt-5">
        <img src={padlock} /> <span>Your info is safely secured</span>
      </p>
    </div>
  );
}
