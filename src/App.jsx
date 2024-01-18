// src/App.jsx
import React from 'react';
/*import ClickExample from './components/ClickExample';*/
/*import InputExample from './components/InputExample';*/
import ClickHandler from './components/ClickHandler';
import InputHandler from './components/InputHandler';

/*function App() {
  return (
    <div>
      <h1>Ejemplos de Eventos en React</h1>
      <ClickExample />
      <InputExample />
    </div>
  );
}

export default App;
*/

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Aplicación con Eventos y Listeners</h1>
        <ClickHandler />
        <InputHandler />
      </div>
    );
  }
}
export default App;
