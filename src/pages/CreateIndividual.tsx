import data from "../data/data.json";
import PageWrapper from "../components/PageWrapper";
import { useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PersonalInfoForm from "../components/individual-account/PersonalInfoForm";
import ResidencyInfoForm from "../components/individual-account/ResidencyInfoForm";
import TeamForm from "../components/individual-account/TeamForm";
import StepTracker from "../components/individual-account/StepTracker";
import Success from "../components/individual-account/Success";
import FormWrapper from "../components/FormWrapper";

export default function CreateIndividual() {
  const navigate = useNavigate();
  const [variants, setVariants] = useState<"next" | "previous" | null>(null);
  const [step, setStep] = useState(0);

  useLayoutEffect(() => {
    if (step < 0) return navigate("/");
  }, [step]);

  function nextStep() {
    setVariants("next");
    setStep((prev) => prev + 1);
  }

  function previousStep() {
    setVariants("previous");
    setStep((prev) => prev - 1);
  }

  // show component based on current step
  const componentsByStep = [
    <FormWrapper
      key={1}
      variants={variants}
      title="Register Individual Account!"
      description="For the purpose on industry regulation, your details are required."
      step={step}
      index={0}
    >
      <PersonalInfoForm nextStep={nextStep} />
    </FormWrapper>,
    <FormWrapper
      variants={variants}
      key={2}
      title="Complete Your Profile!"
      description="For the purpose on industry regulation, your details are required."
      step={step}
      index={1}
    >
      <ResidencyInfoForm nextStep={nextStep} />
    </FormWrapper>,
    <FormWrapper
      variants={variants}
      key={3}
      title="Invite your team"
      description="For the purpose on industry regulation, your details are required."
      step={step}
      index={2}
    >
      <TeamForm nextStep={nextStep} />
    </FormWrapper>,
    <Success key={4} step={step} index={3} />,
  ];

  return (
    <PageWrapper pageDescription={data.individualAccount[step]}>
      {step < 3 && <StepTracker step={step} previousStep={previousStep} />}
      {componentsByStep.map((component) => component)}
    </PageWrapper>
  );
}
