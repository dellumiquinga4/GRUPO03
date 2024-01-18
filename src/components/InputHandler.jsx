// InputHandler.js
import React from 'react';

class InputHandler extends React.Component {
  handleInputChange = (event) => {
    const inputValue = event.target.value;
    console.log('Valor actualizado:', inputValue);
  };

  render() {
    return (
      <div>
        <h2>Componente de Cambio en el Campo de Entrada</h2>
        <input type="text" onChange={this.handleInputChange} placeholder="Escribe algo..." />
      </div>
    );
  }
}

export default InputHandler;