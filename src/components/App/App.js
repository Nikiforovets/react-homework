import React from "react";
import "./App.css";
import PageName from "../PageName";
import SignUpForm from "../SignUpForm";
import ValidationErrors from "../ValidationErrors";

class App extends React.Component {
  state = {
    errors: ""
  };

  url = "https://conduit.productionready.io/api/users";

  onSendRequest = async data => {
    try {
      const response = await fetch(this.url, {
        method: "POST",
        headers: { "Content-Type": "application/json;charset=utf-8" },
        body: JSON.stringify({
          user: {
            username: data.username,
            email: data.email,
            password: data.password
          }
        })
      });
      const result = await response.json();
      if (response.ok) {
        this.setState({
          errors: ""
        });
        alert("Вы зарегистрированы");
      } else {
        this.setState({
          errors: result.errors
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <div className="signUp">
        <PageName />
        <ValidationErrors errors={this.state.errors} />
        <SignUpForm onSendRequest={this.onSendRequest} />
      </div>
    );
  }
}

export default App;
