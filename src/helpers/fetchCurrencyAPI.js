const fetchCurrencyAPI = async () => {
  const fetchURL = 'https://economia.awesomeapi.com.br/json/all';
  const response = await fetch(fetchURL);
  const data = await response.json();
  console.log(data);
  return data;
};

export default fetchCurrencyAPI;
