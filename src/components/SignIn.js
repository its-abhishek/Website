import React, { useState } from "react";
import { useRouter } from "next/router";
import { useSession, signIn } from "next-auth/react";

import { BsGoogle } from "react-icons/bs";

const providers = [
  {
    name: "google",
    Icon: BsGoogle,
  },
];

const Signin = () => {
  const { data: session, status } = useSession();
  const { push } = useRouter();
  const [email, setEmail] = useState("");

  console.log(session);
  if (status === "loading")
    return <Heading>Checking Authentication...</Heading>;

  if (session) {
    setTimeout(() => {
      push("/");
    }, 1000);

    return <Heading>you are signed in</Heading>;
  }

  const handleOAuthSignIn = (provider) => () => signIn(provider);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) return false;

    signIn("email", { email, redirect: false });
  };

  return (
    <Box>
      <div
        className="Logintext"
        style={{
          position: "absolute",
          width: "363px",
          height: "55px",
          left: "66px",
          top: "201px",
          fontFamily: "'Poppins'",
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "24px",
          lineHeight: "72px",
          color: "#646464",
        }}
      >
        Please Login to your account
      </div>
    </Box>
  );
};

export default Signin;