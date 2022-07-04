// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const initialState = {
  currencies: [],
};

const getCurrencies = (state = initialState, action) => {
  switch (action.type) {
  case 'INFO_CURRENCY':
    return {
      ...state,
      currencies: action.currency,
    };
  default:
    return state;
  }
};

export default getCurrencies;
