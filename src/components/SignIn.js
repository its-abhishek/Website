<<<<<<< HEAD
import React, { useState } from "react";
import { useRouter } from "next/router";
import { useSession, signIn } from "next-auth/react";
=======
import React, { Component } from "react";
import Login from "./Login";
import Logout from "./Logout";
import { useEffect } from "react";
import { gapi } from "gapi-script";
import '../style/SignIn.css';
const clientId = process.env.GOOGLE_CLIENT_ID
const Contact=()=>{
    useEffect(()=>{
        function start(){
            gapi.client.init({
                clientId:{clientId},
                scope:""
            })
        }
        gapi.load("client:auth2",start)
    })
    const google = ()=>{
        window.open("http://localhost:5000/auth/google","_self")
    }
        return (<div>
            <form className="form">
                <h3 className="h3">Sign In</h3>
>>>>>>> b1bf1b7d20fb8639e43fad014e24168f9c9b1e3a

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

<<<<<<< HEAD
  console.log(session);
  if (status === "loading")
    return <Heading>Checking Authentication...</Heading>;
=======
                <button type="submit" className="btn btn-primary btn-block">SUBMIT</button>
                <p className="forgot-password text-right">
                    <a href="#">Forgot Password?</a>
                </p>
                <h4>OR</h4>
                <hr />
                <div onClick={google} className="custom-control-label">Google</div>
                {/* <Logout/> */}
            </form>
            </div>
        );
    }
>>>>>>> b1bf1b7d20fb8639e43fad014e24168f9c9b1e3a

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