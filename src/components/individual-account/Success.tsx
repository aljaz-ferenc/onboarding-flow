import Header from "../Header";
import Tick from "./Tick";

export default function Success() {
  return (
    <div className="grid place-items-center h-screen">
      <div className="flex flex-col items-center gap-7 max-w-[25rem]">
        <Tick />
        <Header
          textAlign="center"
          title="Success"
          description="You have received an email where you can read more about your account and setup your password."
        />
      </div>
    </div>
  );
}
