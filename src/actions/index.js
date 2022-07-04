// Coloque aqui suas actions
import fetchCurrencyAPI from '../tests/helpers/fetchCurrencyAPI';

export const PEGA_USUARIO = 'PEGA_USUARIO';
export const INFO_CURRENCY = 'INFO_CURRENCY';

export const pegaUsuario = (email) => ({
  type: 'PEGA_USUARIO',
  email,
});

export const infoCurrency = (currency) => ({
  type: 'INFO_CURRENCY',
  currency,
});

export const pegaThunk = () => async (dispatch) => {
  const data = await fetchCurrencyAPI();
  const objAPI = Object.keys(data);
  const removeIndex = objAPI.indexOf('USDT');
  objAPI.splice(removeIndex, 1);
  dispatch(infoCurrency(objAPI));
};
