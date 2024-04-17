import React from "react";
import FormWrapper from "../FormWrapper";
import TextInput from "../ui/TextInput";
import PasswordInput from "../ui/PasswordInput";
import CheckboxInput from "../ui/CheckboxInput";
import FormSubmitButton from "../ui/FormSubmitButton";
import { useForm } from "react-hook-form";

type PersonalInfoFormProps = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

export default function PersonalInfoForm({ setStep }: PersonalInfoFormProps) {
  const { register } = useForm();

  function onSubmit() {
    setStep((prev) => prev + 1);
  }

  return (
    <FormWrapper
      title="Register Individual Account!"
      description="For the purpose on industry regulation, your details are required."
    >
      <form onSubmit={onSubmit} className="flex flex-col gap-10">
        <TextInput
          name="name"
          placeholder="Enter full name"
          label="Your full name"
          required
          register={register}
          error={""}
        />
        <TextInput
          name="email"
          placeholder="Enter email address"
          label="Email address"
          required
          register={register}
          error={""}
        />
        <PasswordInput
          name="password"
          placeholder="Password"
          label="Create password"
          required
          register={register}
          error={""}
        />
        <CheckboxInput
          name="terms"
          error={""}
          label={<TermsLabel />}
          register={register}
        />
        <FormSubmitButton>Register Account</FormSubmitButton>
      </form>
    </FormWrapper>
  );
}

function TermsLabel() {
  return (
    <>
      I agree to{" "}
      <a href="#" className="text-blue-500 underline">
        terms & conditions
      </a>
    </>
  );
}
