import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="input">
          <label for="nombre"/>Ingrese el nombre<br/>
          <input type="text" id="nombre" size="50"/>
        </div>

        <div className="input">
          <label for="Apellido"/>Ingrese el Apellido<br/>
          <input type="text" id="Apellido" size="50"/>
        </div>

        <div className="input">
          <label for="mail"/>Ingrese el mail<br/>
          <input type="mail" id="mail" size="50"/>
        </div>

        <div className="input">
          <label for="telefono"/>Ingrese el telefono<br/>
          <input type="text" id="telefono" size="50"/>
        </div>

        <div className="input">
          <label for="pass"/>Ingrese password<br/>
          <input type="password" id="pass" size="50"/>
        </div>

        <div className="input">
          <label for="confirmPass"/>Confirme password<br/>
          <input type="password" id="confirmPass" size="50"/>
        </div>

        <div className="input">
          <input type="button" value="Enviar datos"/>
        </div>

      </header>
    </div>
  );
}

export default App;