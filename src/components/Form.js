import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <>
        <label htmlFor="nameInput">
          Nome
          <input id="nameInput" data-testid="name-input" type="text" />
        </label>

        <label htmlFor="desInput">
          Descrição
          <input
            id="desInput"
            data-testid="description-input"
            type="textarea"
          />
        </label>

        <label htmlFor="attr1">
          attr1
          <input id="attr1" data-testid="attr1-input" type="number" />
        </label>

        <label htmlFor="attr2">
          attr2
          <input id="attr2" data-testid="attr2-input" type="number" />
        </label>

        <label htmlFor="attr3">
          attr3
          <input id="attr3" data-testid="attr3-input" type="number" />
        </label>

        <label htmlFor="imgInput">
          Imagem
          <input id="imgInput" data-testid="image-input" type="text" />
        </label>

        <select data-testid="rare-input" type="select">
          Raridade
          <option>normal</option>
          <option>raro</option>
          <option>muito raro</option>
        </select>

        <label htmlFor="checkInput">
          checkbox
          <input id="checkInput" data-testid="trunfo-input" type="checkbox" />
        </label>

        <button type="submit" data-testid="save-button">Salvar</button>
      </>
    );
  }
}

export default Form;
