import data from "../data/data.json";
import PageWrapper from "../components/PageWrapper";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PersonalInfoForm from "../components/individual-account/PersonalInfoForm";
import ResidencyInfoForm from "../components/individual-account/ResidencyInfoForm";
import TeamForm from "../components/individual-account/TeamForm";
import Success from "../components/individual-account/Success";

export default function CreateIndividual() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    if (step === -1) return navigate("/");
  }, [step]);

  // show component based on current step
  const componentsByStep = [
    <PersonalInfoForm key={1} setStep={setStep} />,
    <ResidencyInfoForm key={2} setStep={setStep} />,
    <TeamForm key={3} setStep={setStep} />,
    <Success key={4} />,
  ];

  return (
    <PageWrapper pageDescription={data.individualAccount[step]}>
      <div className="w-full h-full flex flex-col justify-center">
        {step < 3 && (
          <div className="flex w-full justify-between">
            <div onClick={() => setStep((prev) => prev - 1)} className="text-gray text-[16px] font-[600]">&larr; Back</div>
            <div className="flex flex-col">
              <span className="text-[#BDBDBD] font-[500] text-[14px]">
                STEP {(step + 1).toString().padStart(2, "0")}/
                {data.steps.length.toString().padStart(2, "0")}
              </span>
              <span className="text-[16px] font-[600] text-gray">{data.steps[step]}</span>
            </div>
          </div>
        )}
        {componentsByStep[step]}

        <div className="mb-auto"></div>
      </div>
    </PageWrapper>
  );
}
