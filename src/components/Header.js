import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { email/* , total, currency */ } = this.props;
    return (
      <header>
        <span data-testid="email-field">{ email }</span>
        <span data-testid="total-field">
          {/* { total } */}
          0
        </span>
        <span data-testid="header-currency-field">
          {/* { currency } */}
          BRL
        </span>
      </header>);
  }
}

Header.propTypes = {
  email: PropTypes.string,
  total: PropTypes.string,
  currency: PropTypes.string,
}.isRequired;

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps, null)(Header);
