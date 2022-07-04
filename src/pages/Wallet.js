import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import { pegaThunk, pegaTodoThunk } from '../actions/index';
import Table from '../components/Table';

class Wallet extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(pegaThunk());
  }

  saveFormData = (event) => {
    event.preventDefault();
    const saveData = new FormData(event.target);
    const data = Object.fromEntries(saveData);
    const { dispatch } = this.props;
    dispatch(pegaTodoThunk(data));
    event.target.reset();
  }

  render() {
    const { recebeMoeda } = this.props;
    return (
      <div>
        <Header />
        TrybeWallet
        <form
          onSubmit={ this.saveFormData }
        >
          <input
            data-testid="value-input"
            type="number"
            name="value"
          />
          <input
            data-testid="description-input"
            type="text"
            name="description"
          />
          <label htmlFor="currency-types">
            Moeda
            <select
              name="currency"
              id="currency-types"
            >
              {recebeMoeda.map((currencyCoin) => (
                <option key={ currencyCoin } value={ currencyCoin }>
                  {currencyCoin}
                </option>
              ))}
            </select>
            <select
              name="method"
              id="method-types"
              data-testid="method-input"
            >
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
            <select
              name="tag"
              id="tag"
              data-testid="tag-input"
            >
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
            <button
              type="submit"
            >
              Adicionar despesa

            </button>
            <Table />

          </label>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  recebeMoeda: state.wallet.currencies,
});

Wallet.propTypes = {
  /* dispatch: PropTypes.func, */
  recebeMoeda: PropTypes.array,
}.isRequired;

export default connect(mapStateToProps, null)(Wallet);
