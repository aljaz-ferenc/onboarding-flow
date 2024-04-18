import { z } from "zod";
import { AccountInfo } from "./types";

const payloadSchema = z.object({
  accountType: z.enum(["business", "individual"]),
  address: z.string(),
  country: z.enum(["EN", "SL", "US"]),
  email: z.string().email(),
  name: z.string().min(5),
  password: z
    .string()
    .regex(new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/)),
  team: z.array(z.string().email()).max(5),
  terms: z.literal(true),
});

export async function registerUser(payload: AccountInfo) {
  try {
    //validate payload
    const result = payloadSchema.safeParse(payload);
    if (!result.success) {
      throw result.error;
    }
    console.log(result.data)

    //send request if validation passes
    const response = await fetch("http://localhost:3000/api/register", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      return await response.json();
    }

    throw new Error("Something went wrong sending data to server.");
  } catch (err) {
    throw err;
  }
}
