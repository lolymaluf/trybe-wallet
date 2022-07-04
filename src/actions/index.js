// Coloque aqui suas actions
import fetchCurrencyAPI from '../helpers/fetchCurrencyAPI';

export const PEGA_USUARIO = 'PEGA_USUARIO';
export const INFO_CURRENCY = 'INFO_CURRENCY';
export const SAVE_FORM_DATA = 'SAVE_FORM_DATA';

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

export const saveFormData = (formData) => ({
  type: 'SAVE_FORM_DATA',
  formData,
});

export const pegaTodoThunk = (formData) => async (dispatch) => {
  const data = await fetchCurrencyAPI();
  formData.exchangeRates = data;
  dispatch(saveFormData(formData));
};
