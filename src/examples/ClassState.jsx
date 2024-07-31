import React from "react";

/**
 * Componente de clase, forma antigua de declarar los componentes.
 */
class MyComponent extends React.Component {
  constructor(props) {
		//En versiones recientes se puede acceder a las props o definir el state sin el constructor.
    super(props);
    this.state = {
      count: 0
    };
  }
	//Se modifica el estado, se reconstruye el componente.
  increment = (amount) => {
    this.setState({ count: this.state.count + amount });
  };
	/*Ejemplo con función:
	increment = (amount) => {
    this.setState((prevState) => ({ count: prevState.count + amount }));
  };*/

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}
