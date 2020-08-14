import React from "react";
import Login from "./Login";

var isLoggedIn = true;

function App() {
  return (
    <div className="container">
      {isLoggedIn ?<h1>Welcome back, User</h1> : <Login />}
    </div>
  );
}

export default App;
