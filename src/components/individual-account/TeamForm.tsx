import React, { useState } from "react";
import FormWrapper from "../FormWrapper";
import { FieldValues, useFieldArray, useForm } from "react-hook-form";
import trashIcon from "/public/trash.svg";
import plusIcon from "/public/plus.svg";
import FormSubmitButton from "../ui/FormSubmitButton";
import { useAccountInfoContext } from "../../context/AccountInfoContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import * as api from "../../api";
import { AccountInfo } from "../../types";

const emailSchema = z.object({
  team: z.array(
    z.object({
      email: z.string().email(),
    })
  ),
});

type TeamForProps = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

export default function TeamForm({setStep}: TeamForProps) {
  const [isFetching, setIsFetching] = useState(false)
  const ctx = useAccountInfoContext()
  
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(emailSchema)});
  const { fields, append, remove } = useFieldArray({ control, name: "team"});
  
  async function onSubmit({team}: FieldValues) {
    if(!ctx) return
    
    const emails = team.map((member: {email: string}) => member.email)
    ctx.setTeam(emails)
    
    const payload: AccountInfo = {...ctx.info, team: emails}
    
    try{
      setIsFetching(true)
      const data = await api.registerUser(payload)
      console.log(data)
      setStep(prev => prev + 1)
    }catch(err){
      console.error(err)
      setStep(prev => prev + 1) //the request will fail but in this case we still move to the success page
    }finally{
      setIsFetching(false)
    }
  }

  return (
    <FormWrapper
      title="Invite your team"
      description="For the purpose on industry regulation, your details are required."
    >
      <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
        <label className="form-label font-[500] text-[16px]">
          Teammate email
        </label>
        {fields.map((field, i) => (
          <div key={field.id}>
            <div className="flex justify-between w-full items-center gap-3">
              <input
                className=" px-2 py-3 rounded outline-blue-500 w-full form-input"
                placeholder="Please enter address"
                {...register(`team.${i}.email`)}
              />
              <img src={trashIcon} onClick={() => remove(i)} />
            </div>
            {errors.team && Array.isArray(errors.team) && errors.team[i] && (
              <small className="text-red-500">
                {errors.team[i].email.message}
              </small>
            )}
          </div>
        ))}
        {fields.length < 5 && (
          <button
            onClick={() => append({ email: "" })}
            type="button"
            className="flex gap-2 text-[16px] font-[500] text-[#1565D8] mb-8"
          >
            <img src={plusIcon} />
            <span>Add teammate</span>
          </button>
        )}
        <FormSubmitButton>Save & Continue</FormSubmitButton>
      </form>
    </FormWrapper>
  );
}
