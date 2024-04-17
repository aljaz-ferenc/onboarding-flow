export type AccountType = "individual" | "business";
export type Country = "SL" | "US" | "EN";
export type PersonalInfo = {
  name: string;
  email: string;
  password: string;
  terms: boolean;
};
export type ResidencyInfo = { address: string; country: Country };
export type Team = string[];