import { Link } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";
import data from "../data/data.json";
import Header from "../components/Header";
import AccountButton from "../components/AccountButton";
import { easeOut, motion } from "framer-motion";
import { useAccountInfoContext } from "../context/AccountInfoContext";

export default function SignUpPage() {
  const ctx = useAccountInfoContext();
  if (!ctx) return;

  const pageVariants = {
    initial: {
      y: "50%",
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        ease: easeOut,
      },
    },
  };
  return (
    <motion.div initial={{ y: 0 }} animate={{ y: 0 }} exit={{ y: "100vh" }}>
      <PageWrapper pageDescription={data.join}>
        <p className="text-right text-[18px] mr-10 text-gray">
          Already have an account?{" "}
          <Link className="link" to={"#"}>
            Sign In
          </Link>
        </p>
        <div className="w-fit mx-auto max-w-[25rem] p-2 min-h-[50vh] mt-[20vh] overflow-y-hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Header
              title="Join us!"
              description="To begin this journey, tell us what type of account you'd be opening."
            />
          </motion.div>
          <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit={"initial"}
            className="flex flex-col gap-5 "
          >
            <motion.div variants={pageVariants}>
              <Link
                to={"/register"}
                onClick={() => ctx.setAccountType("individual")}
              >
                <AccountButton
                  type="individual"
                  title="Individual"
                  subtitle="Personal account to manage all you activities."
                />
              </Link>
            </motion.div>
            <motion.div variants={pageVariants}>
              <Link
                to={"/register"}
                onClick={() => ctx.setAccountType("business")}
              >
                <AccountButton
                  type="business"
                  title="Business"
                  subtitle="Own or belong to a company, this is for you."
                />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </PageWrapper>
    </motion.div>
  );
}
