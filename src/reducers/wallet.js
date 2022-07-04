// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const initialState = {
  currencies: [],
  expenses: [],
  despesas: 0,
};

const getCurrencies = (state = initialState, action) => {
  switch (action.type) {
  case 'INFO_CURRENCY':
    return {
      ...state,
      currencies: action.currency,
    };
  case 'SAVE_FORM_DATA':
    action.formData.id = state.expenses.length;
    state.despesas += action.formData.value
      * Number(action.formData.exchangeRates[action.formData.currency].ask);
    return {
      ...state,
      expenses: [...state.expenses, action.formData],
    };
  default:
    return state;
  }
};

export default getCurrencies;
