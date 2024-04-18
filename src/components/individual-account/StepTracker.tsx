import { IoChevronBackOutline } from "react-icons/io5";
import data from "../../data/data.json";

type StepTrackerProps = {
  previousStep: () => void;
  step: number;
};

export default function StepTracker({ previousStep, step }: StepTrackerProps) {
  return (
    <div className="flex w-full justify-between mb-20">
      <div
        onClick={previousStep}
        className="text-gray text-[16px] font-[600] flex items-center gap-2 cursor-pointer"
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
