import React from 'react';

class Login extends React.Component {

  state = { 
    email: '',
    password: '',
    isButtonEnabled: 'false',
  }

  onInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState(({ [name]: value}));
    this.checkButton;
  }
  
  checkButton = () => {
    const { email, password } = this.state;
    if (email.includes('@')
    || email.includes('.com')) {
      this.setState({isButtonEnabled: false})
    }
    else {
      this.setState({isButtonEnabled: true})
    }
  }
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
        onChange={ this.onInputChange }
        />

        <input 
        type="password"
        data-testid="password-input"
        value={ password }
        required
        onChange={ this.onInputChange }
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
