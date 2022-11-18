import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword,  } from "firebase/auth";
import { auth } from "../firebase";
import { async } from "@firebase/util";

const Login = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmission = () => {
    if (!values.email || !values.password) {
      setErrorMsg("Fill all Fields");
      return;
    }
    setErrorMsg("");
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then(async (res) => {
        
        navigate("/");
        // console.log(user);
      })
      .catch((err) => {
        // console.log(err);
        setErrorMsg(err.message);
      });

    console.log(values);
  };

  return (
    <div>
      Login
      <h1>
        <Link to="/">Home</Link>
      </h1>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="enter your email"
          onChange={(e) =>
            setValues((prev) => ({ ...prev, email: e.target.value }))
          }
        />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="enter your password"
          onChange={(e) =>
            setValues((prev) => ({ ...prev, password: e.target.value }))
          }
        />
      </div>
      <div>
        <b>{errorMsg}</b>
        <br />
        <button onClick={handleSubmission}>Login</button>
        <p>
          <span>
            <Link to="/signup">signup</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
