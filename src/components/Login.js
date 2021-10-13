import React, { Component } from "react";
import { connect } from "react-redux";
import { login, StartLogIn } from "../actions/auth";
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
    console.log("this.state", this.state);
    const { email, password } = this.state;
    if (email && password) {      
      this.props.dispatch(StartLogIn());

      this.props.dispatch(login(email, password));
    }
  };
  render() {
    const { error, inProgress } = this.props.auth;
    return (
      <form className="login-form">
        <span className="login-sigup-header">Log In</span>
        {error && <div className="alert error-dailog">{error}</div>}
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
          {inProgress ? (
            <button onClick={this.handleFormSubmit} disabled={inProgress}>
                   Loggin In..... 
            </button>
          ) : (
            <button onClick={this.handleFormSubmit} >
              Log In
            </button>
          )}
        
        </div>
      </form>
    );
  }
}
function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(Login);
