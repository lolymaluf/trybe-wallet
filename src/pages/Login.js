import React from 'react';

class Login extends React.Component {
  render() {
    const minPassword = 6
    const { email, password } = this.state;
    return 
    <div>Login
      <form>
        <input 
        type="email"
        data-testid="email-input"
        value={ email }
        required
        />

        <input 
        type="password"
        data-testid="password-input"
        value={ password }
        required
        />

        <button 
        type="submit"
        disabled={ password.length < minPassword }
        >Entrar</button>
      </form>
    </div>;
  }
}

export default Login;
