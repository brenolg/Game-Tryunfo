import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <>
        <label htmlFor="nameInput">
          Nome
          <input
            id="nameInput"
            data-testid="name-input"
            type="text"
            value={ cardName }
            name="cardName"
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="desInput">
          Descrição
          <input
            id="desInput"
            data-testid="description-input"
            type="textarea"
            value={ cardDescription }
            name="cardDescription"
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="attr1">
          attr1
          <input
            id="attr1"
            data-testid="attr1-input"
            type="number"
            value={ cardAttr1 }
            name="cardAttr1"
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="attr2">
          attr2
          <input
            id="attr2"
            data-testid="attr2-input"
            type="number"
            value={ cardAttr2 }
            name="cardAttr2"
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="attr3">
          attr3
          <input
            id="attr3"
            data-testid="attr3-input"
            type="number"
            value={ cardAttr3 }
            name="cardAttr3"
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="imgInput">
          Imagem
          <input
            id="imgInput"
            data-testid="image-input"
            type="text"
            value={ cardImage }
            name="cardImage"
            onChange={ onInputChange }
          />
        </label>

        <select
          data-testid="rare-input"
          type="select"
          value={ cardRare }
          name="cardRare"
          onChange={ onInputChange }
        >
          Raridade
          <option>normal</option>
          <option>raro</option>
          <option>muito raro</option>
        </select>

        <label htmlFor="checkInput">
          checkbox
          <input
            id="checkInput"
            data-testid="trunfo-input"
            type="checkbox"
            checked={ cardTrunfo }
            name="cardTrunfo"
            onChange={ onInputChange }
          />
        </label>

        <button
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          name="isSaveButtonDisabled"
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
