import React from "react";
import '../stylling/homestyle.css';
import Register from "./register"



const Homepage = () => {

  return (
    // <div className="home__page" style={{ display:"none"}}>
    <div className="home__page">

        <div className="login__message">
          <h2>📗</h2>
          <h1>A Readers favourite place!</h1>
          <p>
            We provide high quality online resource for reading blogs. Just sign
            up and start reading some quality blogs.
          </p>
       
              <button className="login__button">
               <Register/>
              </button>

            
        </div>

    </div>
  );
};

export default Homepage;