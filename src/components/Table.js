import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Tabela</h1>
        <table>Tabela</table>
        <tr>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </tr>
      </div>
    );
  }
}
