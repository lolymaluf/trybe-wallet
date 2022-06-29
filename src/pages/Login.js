import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { pegaUsuario } from '../actions/index';

/* fonte: https://stackoverflow.com/questions/30187781/how-to-disable-a-button-when-an-input-is-empty */

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    isDisabled: true,
    redirectToWallet: false,
  }

  validateLogin = () => {
    const { email, password } = this.state;
    const MIN_PASSWORD = 6;
    const patternRegex = /\S+@\S+\.\S+/;
    if (password.length >= MIN_PASSWORD && email.match(patternRegex)) {
      return this.setState({ isDisabled: false });
    }
    return this.setState({ isDisabled: true });
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value }, () => {
      this.validateLogin();
    });
  };

  handleClick = () => {
    const { dispatch } = this.props;
    const { email } = this.state;
    /*     const obj = {
      email,
    }; */
    dispatch(pegaUsuario({ email }));
    this.setState({ redirectToWallet: true });
  }

  render() {
    const { email, password, isDisabled, redirectToWallet } = this.state;
    return (
      <div>
        Login
        <form>
          <input
            name="email"
            type="email"
            data-testid="email-input"
            value={ email }
            onChange={ this.handleChange }
          />

          <input
            name="password"
            type="password"
            data-testid="password-input"
            value={ password }
            onChange={ this.handleChange }
          />

          <button
            type="submit"
            disabled={ isDisabled }
            onClick={ this.handleClick }
          >
            Entrar
            { redirectToWallet && <Redirect to="/carteira" /> }
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.object,
  history: PropTypes.array,
}.isRequired;

export default connect()(Login);
