import { PropsWithChildren, createContext, useContext, useState } from "react";
import {
  AccountType,
  Country,
  PersonalInfo,
  ResidencyInfo,
  Team,
} from "../types";

type AccountInfoContextType = {
  info: AccountInfo;
  setAccountType: (type: AccountType) => void;
  setPersonalInfo: (info: PersonalInfo) => void;
  setResidencyInfo: (info: ResidencyInfo) => void;
  setTeam: (team: Team) => void;
};

type AccountInfo = {
  accountType: AccountType | '';
  name: string;
  email: string;
  password: string;
  terms: boolean;
  address: string;
  country: Country | '';
  team: Team;
};

const initialValue: AccountInfo = {
  accountType: '',
  name: "",
  email: "",
  password: "",
  terms: false,
  address: "",
  country: '',
  team: [],
};

const AccountInfoContext = createContext<AccountInfoContextType | null>(null);

export default function AccountInfoContextProvider({
  children,
}: PropsWithChildren) {
  const [info, setInfo] = useState<AccountInfo>(initialValue);

  function setAccountType(type: AccountType) {
    setInfo((info) => {
      return { ...info, accountType: type };
    });
  }

  function setPersonalInfo({ name, email, password, terms }: PersonalInfo) {
    setInfo((prev) => {
      return { ...prev, name, email, password, terms };
    });
  }

  function setResidencyInfo({ address, country }: ResidencyInfo) {
    setInfo((prev) => {
      return { ...prev, address, country };
    });
  }

  function setTeam(team: Team) {
    setInfo((prev) => {
      return { ...prev, team };
    });
  }

  return (
    <AccountInfoContext.Provider
      value={{
        setAccountType,
        setPersonalInfo,
        setResidencyInfo,
        setTeam,
        info,
      }}
    >
      {children}
    </AccountInfoContext.Provider>
  );
}

export function useAccountInfoContext() {
  const ctx = useContext(AccountInfoContext);
  return ctx;
}
