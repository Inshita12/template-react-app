import React, { Component } from "react";
//Handling Uncontrolled forms
// class Login extends Component {
//     constructor(props){
//         super(props);
//         this.emailInputRef=React.createRef();
//         this.passwordInputRef=React.createRef();
//     }

//     handleFormSubmit=(e)=>{
//         e.preventDefault();
//         console.log('this.emailInputRef',this.emailInputRef);
//         console.log('this.passwordInputRef',this.passwordInputRef);

//     }
//   render() {
//     return (
//       <form className="login-form">
//         <span className="login-sigup-header">Log In</span>
//         <div className="field">
//           <input type="email" placeholder="Email" required ref={this.emailInputRef} />
//         </div>
//         <div className="field">
//           <input type="password" placeholder="Type a password" required  ref={this.passwordInputRef} />
//         </div>

//         <div className="field">
//           <button onClick={this.handleFormSubmit}>Log In</button>
//         </div>
//       </form>
//     );
//   }
// }

// export default Login;

//COntrolled Forms
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleEmailChange = (e) => {
    console.log(e.target.value);
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
  handleFormSubmit = (e) => {
    e.preventDefault();
    // console.log("this.emailInputRef", this.emailInputRef);
    // console.log("this.passwordInputRef", this.passwordInputRef);
    console.log('this.state',this.state);
  };
  render() {
    return (
      <form className="login-form">
        <span className="login-sigup-header">Log In</span>
        <div className="field">
          <input
            type="email"
            placeholder="Email"
            required
            onChange={this.handleEmailChange}
            value={this.state.email}
          />
        </div>
        <div className="field">
          <input
            type="password"
            placeholder="Type a password"
            required
            onChange={this.handlePasswordChange}
            value={this.state.password}
          />
        </div>

        <div className="field">
          <button onClick={this.handleFormSubmit}>Log In</button>
        </div>
      </form>
    );
  }
}

export default Login;
