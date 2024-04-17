import React from "react";
import PageDescription from "./PageDescription";

type PageWrapper = {
  pageDescription: string;
  children: React.ReactNode;
};

//adds an image with text on the left side of the page
export default function PageWrapper({
  pageDescription,
  children,
}: PageWrapper) {
  return (
    <div className="flex items-center justify-between h-screen text-left ">
      <div className="w-[45%] h-full bg-[url('/background.jpg')] grid place-items-center bg-center bg-cover">
        <div className=" bg-gradient-to-t from-[#1566d8cf] to-[#1566d8cf] h-full grid place-items-center">
          <PageDescription text={pageDescription} />
        </div>
      </div>
      <div className="h-full w-[55%] overflow-x-hidden relative">
        {children}
      </div>
    </div>
  );
}
