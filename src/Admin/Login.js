import React, { Component } from "./node_modules/react";

class Login extends Component {
  state = {
    username: "",
    password: "",
    error: "",
  };

  handleChange = (name) => (event) => {
    this.setState({ error: "" });
    this.setState({ [name]: event.target.value });
  };

  clickSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    const user = { username, password };
    login(user)
      .then((data) => {
        if (data.error) {
          this.setState({ error: data.error });
        } else {
          this.setState({
            error: "",
            username: "",
            password: "",
            open: true,
          });
        }
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };

  render() {
    return (
      <div className="container">
        <h2 className="mt-5 mb-5">Admin Login</h2>
        <div
          className="alert alert-primary"
          style={{ display: this.state.error ? "" : "none" }}
        >
          {this.state.error}
        </div>
        <form>
          <div className="form-group">
            <lable className="text-muted">Username</lable>
            <input
              type="text"
              className="form-control"
              onChange={this.handleChange("username")}
              value={this.state.name}
            ></input>
          </div>
          <div className="form-group">
            <lable className="text-muted">Password</lable>
            <input
              type="password"
              className="form-control"
              onChange={this.handleChange("email")}
              value={this.state.email}
            ></input>
          </div>
          <button
            className="btn btn-raised btn-primary"
            onClick={this.clickSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
