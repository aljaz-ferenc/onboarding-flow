import TextInput from "../ui/TextInput";
import PasswordInput from "../ui/PasswordInput";
import CheckboxInput from "../ui/CheckboxInput";
import FormSubmitButton from "../ui/FormSubmitButton";
import { FieldValues, useForm } from "react-hook-form";
import { useAccountInfoContext } from "../../context/AccountInfoContext";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type PersonalInfoFormProps = {
  nextStep: () => void;
};

//at least one uppercase letter, one lowercase letter, one number, one special characters, at least 6 chars
const passwordValidation = new RegExp(
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/
);

const formSchema = z.object({
  name: z.string().min(5, { message: "Must be at least 5 characters long" }),
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

export default function PersonalInfoForm({ nextStep }: PersonalInfoFormProps) {
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
    nextStep();
  }

  return (
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
