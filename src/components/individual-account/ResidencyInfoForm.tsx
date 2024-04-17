import React from "react";
import FormWrapper from "../FormWrapper";
import TextInput from "../ui/TextInput";
import SelectInput from "../ui/SelectInput";
import { useForm } from "react-hook-form";
import FormSubmitButton from "../ui/FormSubmitButton";

type ResidencyInfoFormProps = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

const selectOptions = [
  { text: "Slovenia", value: "SL" },
  { text: "USA", value: "US" },
  { text: "England", value: "EN" },
];
 
 export default function ResidencyInfoForm({setStep}: ResidencyInfoFormProps) {
  const {register} = useForm()

  function onSubmit() {
    setStep((prev) => prev + 1);
  }

  return (
    <FormWrapper
      title="Complete Your Profile!"
      description="For the purpose on industry regulation, your details are required."
    >
      <form className="flex flex-col gap-10" onSubmit={onSubmit}>
        <TextInput
          name="address"
          placeholder="Please enter address"
          register={register}
          label="Your address"
          error={''}
          required
        />
        <SelectInput
          options={selectOptions}
          label="Country of residence"
          name="country"
          register={register}
          error={''}
        />
        <FormSubmitButton>Save & Continue</FormSubmitButton>
      </form>
    </FormWrapper>
  );
 }
 