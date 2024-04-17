import polyOutline from "/public/poly-outline.svg";
import polyFull from "/public/poly-full.svg";
import { useState } from "react";
import { LuBriefcase } from "react-icons/lu";
import { FiUser } from "react-icons/fi";
import arrowRight from "/public/arrow-right.svg";

type AccountBUttonProps = {
  type: "individual" | "business";
  title: string;
  subtitle: string;
};

export default function AccountButton({
  type,
  title,
  subtitle,
}: AccountBUttonProps) {
  const [hovered, setHovered] = useState(false);

  const Icon = type === "individual" ? FiUser : LuBriefcase;

  return (
    <div
      className={`flex gap-3 items-center ${
        hovered ? "shadow-xl bg-[#f5f9ff] outline-1 outline outline-[#1565D8]" : "shadow-md bg-white"
      } transition rounded-[6px] px-5 py-3`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative w-16 h-16">
        <img
          src={hovered ? polyFull : polyOutline}
          className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
        />
        <Icon
          color={hovered ? "#fff" : "#1565D8"}
          size={20}
          className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
        />
      </div>
      <div>
        <h3 className="font-[500] text-[16px]">{title}</h3>
        <p className="font-[400] text-gray text-[14px]">{subtitle}</p>
      </div>
      <div>
        <img src={arrowRight} className={hovered ? 'opacity-1' : 'opacity-0'} />
      </div>
    </div>
  );
}