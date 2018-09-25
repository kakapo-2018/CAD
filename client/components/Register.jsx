import React from 'react';
import { connect } from 'react-redux';
import { registerUserRequest } from '../actions/register';
import { loginError } from '../actions/login';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name: '',
      password: '',
      confirm_password: '',
    };

    this.updateDetails = this.updateDetails.bind(this);
    this.submit = this.submit.bind(this);
  }
  componentDidMount() {
    this.props.dispatch(loginError(''));
  }
  updateDetails(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  submit(e) {
    e.preventDefault();
    e.target.reset();
    let {
      user_name,
      password,
      confirm_password,
    } = this.state;

    if (confirm_password != password)
      return this.props.dispatch(loginError("Passwords don't match"));
    this.props.dispatch(registerUserRequest(this.state));
  }
  render() {
    const { auth } = this.props;
    return (
      <div>

        <div id="">
          <form className="" onSubmit={this.submit}>
            <h1 className="">Register</h1>
            <hr />
            {auth.errorMessage && (
              <span className="">
                {auth.errorMessage}
              </span>
            )}
            <label className="">
              Username
              <input
                required
                className=""
                placeholder="User Name"
                type="text"
                name="user_name"
                onChange={this.updateDetails}
              />
            </label>
            <br />
            <div className="">
              <label className="">
                Password
                <input
                  required
                  className=""
                  placeholder="Password"
                  type="password"
                  name="password"
                  onChange={this.updateDetails}
                />
              </label>
              <label className="">
                Confirm Password
                <input
                  required
                  className=""
                  placeholder="Confirm Password"
                  type="password"
                  name="confirm_password"
                  onChange={this.updateDetails}
                />
              </label>
            </div>
            <input
              id="register_submit"
              className="btn btn-secondary"
              value="Register"
              type="submit"
            />
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    auth
  };
};

export default connect(mapStateToProps)(Register);