import React from "react";

import "./ValidationErrors.css";

class ValidationErrors extends React.Component {
  createError(string, item) {
    return (
      <li key={string + item}>
        {string}
        {item}
      </li>
    );
  }

  render() {
    let emailErrors = "";
    let passwordErrors = "";
    let usernameErrors = "";
    if (this.props.errors) {
      if (this.props.errors.email) {
        emailErrors = this.props.errors.email.map(item =>
          this.createError("email: ", item)
        );
      }
      if (this.props.errors.password) {
        passwordErrors = this.props.errors.password.map(item =>
          this.createError("password: ", item)
        );
      }
      if (this.props.errors.username) {
        usernameErrors = this.props.errors.username.map(item =>
          this.createError("username: ", item)
        );
      }
    }
    return (
      <ul className="errorsList">
        {emailErrors}
        {passwordErrors}
        {usernameErrors}
      </ul>
    );
  }
}

export default ValidationErrors;
