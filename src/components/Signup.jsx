import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import { async } from "@firebase/util";

const Signup = () => {
  const navigate=useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmission = () => {
    if (!values.name || !values.email || !values.password) {
      setErrorMsg("Fill all Fields");
      return;
    }
    setErrorMsg("");
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then(async(res) => {
        const user = res.user;
        await updateProfile(user, {
          displayName:values.name,
        });
        navigate("/");
        console.log(user);
      })
      .catch((err) => {
        // console.log(err);
        setErrorMsg(err.message)
      });

    console.log(values);
  };

  return (
    <div>
      Signup
      <h1>
        {/* <Link to="/">Home</Link> */}
      </h1>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="name"
          name="name"
          id="name"
          placeholder="enter your name"
          onChange={(e) =>
            setValues((prev) => ({ ...prev, name: e.target.value }))
          }
        />
        <br />
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
          Already have an account
          <span>
            <Link to="/login">login</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
