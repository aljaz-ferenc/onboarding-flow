import React from "react";
import FormWrapper from "../FormWrapper";
import TextInput from "../ui/TextInput";
import PasswordInput from "../ui/PasswordInput";
import CheckboxInput from "../ui/CheckboxInput";
import FormSubmitButton from "../ui/FormSubmitButton";
import { FieldValues, useForm } from "react-hook-form";
import { useAccountInfoContext } from "../../context/AccountInfoContext";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type PersonalInfoFormProps = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

const passwordValidation = new RegExp(
  //one uppercase, one lowercase, one number, one special, at least 6 chars
  /(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{6,}$/
);

const formSchema = z.object({
  name: z.string().min(1, { message: "Required" }),
  email: z.string().email(),
  password: z
    .string()
    .min(6, { message: "Must be at least 6 characters long" })
    .regex(passwordValidation, {
      message:
        "Must include one uppercase letter, one lowercase letter and one special character.",
    }),
  terms: z.boolean().superRefine((terms, ctx) => {
    if (!terms)
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Must agree to terms and conditions.",
      });
  }),
});

export default function PersonalInfoForm({ setStep }: PersonalInfoFormProps) {
  const ctx = useAccountInfoContext();
  if (!ctx) return;

  const { name, email, password, terms } = ctx.info;
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name,
      email,
      password,
      terms,
    },
  });

  function onSubmit({ name, email, password, terms }: FieldValues) {
    ctx?.setPersonalInfo({ name, email, password, terms });
    setStep((prev) => prev + 1);
  }

  return (
    <FormWrapper
      title="Register Individual Account!"
      description="For the purpose on industry regulation, your details are required."
    >
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-10">
        <TextInput
          name="name"
          placeholder="Enter full name"
          label="Your full name"
          required
          register={register}
          error={errors.name?.message}
        />
        <TextInput
          name="email"
          placeholder="Enter email address"
          label="Email address"
          required
          register={register}
          error={errors.email?.message}
        />
        <PasswordInput
          name="password"
          placeholder="Password"
          label="Create password"
          required
          register={register}
          error={errors.password?.message}
        />
        <CheckboxInput
          name="terms"
          error={errors.terms?.message}
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
