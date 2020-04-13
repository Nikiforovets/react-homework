import React from "react";

import "./SignUpForm.css";
import { logicalExpression } from "@babel/types";

class SignUpForm extends React.Component {
  state = {
    username: "",
    email: "",
    password: ""
  };

  updateFields = e => {
    if (e.target.className === "signupLogin") {
      this.setState({ username: e.target.value });
    }
    if (e.target.className === "signupEmail") {
      this.setState({ email: e.target.value });
    }
    if (e.target.className === "signupPass") {
      this.setState({ password: e.target.value });
    }
  };

  onSubmit = e => {
    e.preventDefault();
    const data = {
      email: this.state.email,
      password: this.state.password,
      username: this.state.username
    };
    this.props.onSendRequest(data);
    this.setState({
      username: "",
      email: "",
      password: ""
    });
  };

  render() {
    return (
      <form className="signupForm" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="signupLogin"
          value={this.state.username}
          placeholder="login"
          onChange={this.updateFields}
        ></input>
        <input
          type="text"
          className="signupEmail"
          value={this.state.email}
          placeholder="email"
          onChange={this.updateFields}
        ></input>
        <input
          type="text"
          className="signupPass"
          value={this.state.password}
          placeholder="password"
          onChange={this.updateFields}
        ></input>
        <button>Sign up</button>
      </form>
    );
  }
}

export default SignUpForm;
