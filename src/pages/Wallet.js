import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import { pegaThunk } from '../actions/index';

class Wallet extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(pegaThunk());
  }

  render() {
    return (
      <div>
        <Header />
        TrybeWallet
      </div>
    );
  }
}

Wallet.propTypes = {
  dispatch: PropTypes.func,
}.isRequired;

export default connect()(Wallet);
