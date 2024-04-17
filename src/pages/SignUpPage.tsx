import { Link } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";
import data from "../data/data.json";
import Header from "../components/Header";
import AccountButton from "../components/AccountButton";

export default function SignUpPage() {
  return (
    <PageWrapper pageDescription={data.join}>
      <p className="text-right text-[18px] mr-10 text-gray">
        Already have an account?{" "}
        <Link className="link" to={"#"}>
          Sign In
        </Link>
      </p>
      <div className="w-fit mx-auto max-w-[25rem] mt-[20vh]">
        <Header
          title="Join us!"
          description="To begin this journey, tell us what type of account you'd be opening."
        />
        <div className="flex flex-col gap-5 w-fit">
          <Link to={"/individual"}>
            <AccountButton
              type="individual"
              title="Individual"
              subtitle="Personal account to manage all you activities."
            />
          </Link>
          <Link to={"."}>
            <AccountButton
              type="business"
              title="Business"
              subtitle="Own or belong to a company, this is for you."
            />
          </Link>
        </div>
      </div>
    </PageWrapper>
  );
}
