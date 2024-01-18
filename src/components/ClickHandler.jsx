// ClickHandler.js
import React from 'react';

class ClickHandler extends React.Component {
  handleClick = () => {
    alert('¡Botón clickeado!');
  };

  render() {
    return (
      <div>
        <h2>Componente de Manejo de Clics</h2>
        <button onClick={this.handleClick}>Haz clic aquí</button>
      </div>
    );
  }
}

export default ClickHandler;