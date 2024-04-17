import React, { SetStateAction } from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import data from "../../data/data.json";
import { useNavigate } from "react-router-dom";

type StepTrackerProps = {
  step: number;
  setStep: React.Dispatch<SetStateAction<number>>;
};

export default function StepTracker({ step, setStep }: StepTrackerProps) {
  const navigate = useNavigate();
  return (
    <div className="flex w-full justify-between">
      <div
        onClick={() => (step > 0 ? setStep((prev) => prev - 1) : navigate("/"))}
        className="text-gray text-[16px] font-[600] flex items-center gap-2"
      >
        <IoChevronBackOutline size={20} /> Back
      </div>
      <div className="flex flex-col text-right">
        <span className="text-[#BDBDBD] font-[500] text-[14px]">
          STEP {(step + 1).toString().padStart(2, "0")}/
          {data.steps.length.toString().padStart(2, "0")}
        </span>
        <span className="text-[16px] font-[600] text-gray">
          {data.steps[step]}
        </span>
      </div>
    </div>
  );
}
