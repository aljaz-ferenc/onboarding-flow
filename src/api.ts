import { AccountInfo } from "./types";

export async function registerUser(payload: AccountInfo) {
  try {
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
