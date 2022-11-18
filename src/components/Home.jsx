import React from 'react'
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <div>
        <h1><Link to="/login">Login</Link></h1>
        <h1><Link to="/signup">Signup</Link></h1>


        <br />
        <br />
        <br />
        <br />
        <br />
        <h2>{props.name ? `wellcome ${props.name}` : "LOgin Please"}</h2>
    </div>
  )
}

export default Home;