import TextInput from "../ui/TextInput";
import SelectInput from "../ui/SelectInput";
import { FieldValues, useForm } from "react-hook-form";
import FormSubmitButton from "../ui/FormSubmitButton";
import { z } from "zod";
import { useAccountInfoContext } from "../../context/AccountInfoContext";
import { zodResolver } from "@hookform/resolvers/zod";

type ResidencyInfoFormProps = {
  nextStep: () => void;
};

const selectOptions = [
  { text: "Slovenia", value: "SL" },
  { text: "USA", value: "US" },
  { text: "England", value: "EN" },
];

const formSchema = z.object({
  address: z.string().min(1, { message: "Required" }),
  country: z.enum(["SL", "US", "EN"]),
});

export default function ResidencyInfoForm({
  nextStep,
}: ResidencyInfoFormProps) {
  const ctx = useAccountInfoContext();
  if (!ctx) return;

  const { address, country } = ctx.info;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      address,
      country: country || undefined,
    },
  });

  function onSubmit({ address, country }: FieldValues) {
    ctx?.setResidencyInfo({ address, country });
    nextStep();
  }
  return (
    <form className="flex flex-col gap-10" onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        name="address"
        placeholder="Please enter address"
        register={register}
        label="Your address"
        error={errors.address?.message}
        required
      />
      <SelectInput
        options={selectOptions}
        label="Country of residence"
        name="country"
        register={register}
        error={errors.country?.message}
      />
      <FormSubmitButton>Save & Continue</FormSubmitButton>
    </form>
  );
}
