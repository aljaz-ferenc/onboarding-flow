import data from "../data/data.json";
import PageWrapper from "../components/PageWrapper";

export default function CreateIndividual() {
  return (
    <PageWrapper pageDescription={data.individualAccount[0]}>
      <div className="">
        CreateIndividual page
      </div>
    </PageWrapper>
  );
}
