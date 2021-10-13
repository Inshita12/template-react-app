import React, { Component } from "react";
import { connect } from "react-redux";
import { signup, startSignup } from "../actions/auth";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: "",
      cpassword: "",
    };
  }
  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  handlePasswordChange = (e) => {
    console.log(e.target.value);
    this.setState({
      password: e.target.value,
    });
  };
  handleNameChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  handleConfirm_PasswordChange = (e) => {
    this.setState({
      cpassword: e.target.value,
    });
  };
  handleFormSubmit = (e) => {
    e.preventDefault();
    // console.log("this.emailInputRef", this.emailInputRef);
    // console.log("this.passwordInputRef", this.passwordInputRef);
    console.log("this.state", this.state);
    const { email, password, name, cpassword } = this.state;
    if (email && password && name && cpassword) {
      this.props.dispatch(startSignup());
      this.props.dispatch(signup(email, password, name, cpassword));
    }
  };
  render() {
    const { error, inProgress } = this.props.auth;
    return (
      <form className="login-form">
        <span className="login-sigup-header">SignUp</span>

        <input
          type="hidden"
          name="avatar"
          value="/uploads/users/avatars/defaultavatarpic/avatar-default"
        />

        {error && <div className="alert error-dailog">{error}</div>}
        <div className="field">
          <input
            type="text"
            placeholder="Type your name"
            name="name"
            required
          />
        </div>
        <div className="field">
          <input
            type="email"
            placeholder="Type your Email"
            name="email"
            required
          />
        </div>
        <div className="field">
          <input
            type="password"
            name="password"
            placeholder="Type a Strong Passowrd"
            required
          />
        </div>
        <div className="field">
          <input
            type="password"
            placeholder="Confirm Passowrd"
            name="cpassword"
            required
          />
        </div>
        <div className="field">
          <button>SignUp</button>
        </div>
      </form>
    );
  }
}
//connecting sigup component to redux store
function mapStateToProps(auth) {
  return {
    auth,
  };
}

export default connect(mapStateToProps)(Signup);
