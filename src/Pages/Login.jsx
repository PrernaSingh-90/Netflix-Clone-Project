import React, { useState } from "react";
import logo from "../assets/logo.png";
import { login, signup } from "../firebase";
import netflix_spinner from '../assets/netflix_spinner.gif'


function Login() {
  const [signState, setSignState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const user_auth = async (event) => {
    if (signState === "Sign In") {
      event.preventDefault();
      setLoading(true);
      await login(email, password);
    } else {
      await signup(name, email, password);
    }
      setLoading(false);
  };

  return (
    loading?<div className="login-spinner">
      <img src={netflix_spinner} alt="" />
    </div>:
    <div className="login">
      <img src={logo} className="login-logo" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState === "Sign Up" ? (
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              placeholder="Your Name"
            />
          ) : (
            <></>
          )}
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="Email or mobile number"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="Password"
          />
          <button onClick={user_auth} type="submit">
            {signState}
          </button>
          <span
            className="flex text-center justify-center mt-3
         text-slate-400"
          >
            OR
          </span>
          <button className="code">Use a Sign-in code</button>
          <a className="flex text-center justify-center mt-5 cursor-pointer hover:underline hover:text-[#ffffffb3]">
            Forget Password ?
          </a>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
          </div>
          {signState === "Sign In" ? (
            <p className="netflix">
              New to Netflix?{" "}
              <a
                className="self"
                href="#"
                onClick={() => {
                  setSignState("Sign Up");
                }}
              >
                {" "}
                Sign up now.
              </a>
            </p>
          ) : (
            <p className="netflix">
              Already have Account?{" "}
              <a
                className="self"
                href="#"
                onClick={() => {
                  setSignState("Sign In");
                }}
              >
                {" "}
                Sign In now.
              </a>
            </p>
          )}
          <p className="mt-5">
            <span className="captcha">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.
            </span>
            <a href="#" className="anchor">
              {" "}
              Learn More.
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
