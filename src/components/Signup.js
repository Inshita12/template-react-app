import React, { Component } from "react";

class Signup extends Component {
  render() {
    return (
      <form className="login-form">
        <span className="login-sigup-header">SignUp</span>
        <div className="field">
          <input type="text" placeholder="Type your name" required />
        </div>
        <div className="field">
          <input type="email" placeholder="Type your Email" required />
        </div>
        <div className="field">
          <input type="password" placeholder="Type a Strong Passowrd" required />
        </div>

        <div className="field">
          <button>SignUp</button>
        </div>
      </form>
    );
  }
}

export default Signup;