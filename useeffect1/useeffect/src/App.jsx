import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [formdata, setformdata] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    console.log("form data update", formdata);
  }, [formdata]);

  const handlechange = (e) => {
    setformdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registration successful");
    console.log(formdata);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formdata.name}
          onChange={handlechange}
        />

        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formdata.email}
          onChange={handlechange}
        />

        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formdata.password}
          onChange={handlechange}
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default App;