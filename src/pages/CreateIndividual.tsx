import data from "../data/data.json";
import PageWrapper from "../components/PageWrapper";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PersonalInfoForm from "../components/individual-account/PersonalInfoForm";
import ResidencyInfoForm from "../components/individual-account/ResidencyInfoForm";
import TeamForm from "../components/individual-account/TeamForm";
import StepTracker from "../components/individual-account/StepTracker";
import Success from "../components/individual-account/Success";

export default function CreateIndividual() {
  const [step, setStep] = useState(2);
  const navigate = useNavigate();

  useEffect(() => {
    if (step === -1) return navigate("/");
  }, [step]);

  // show component based on current step
  const componentsByStep = [
    <PersonalInfoForm key={1} setStep={setStep} />,
    <ResidencyInfoForm key={2} setStep={setStep} />,
    <TeamForm key={3} setStep={setStep}/>,
    <Success key={4}/>
  ];

  return (
    <PageWrapper pageDescription={data.individualAccount[step]}>
      <div className="w-full min-h-full flex flex-col justify-center overflow-auto">
        {step < 3 && <StepTracker step={step} setStep={setStep} />}
        {componentsByStep[step]}
        <div className="mt-auto"></div>
      </div>
    </PageWrapper>
  );
}
