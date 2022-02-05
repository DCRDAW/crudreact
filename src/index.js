import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
class Crud extends React.Component{
    render(){
        return(
            <div id="contenedor">
                 <Menu

                 />
                 <Formulario

                />
            </div>
        )

    }
}
class Menu extends React.Component{
    render(){
        return(
            <aside>
              <SubMenu

              />
            </aside>
        );
    }

}

class SubMenu extends React.Component{
    render(){
      return(
          <ol>
            <li>Jesuitas Familia: <a href="https://jesuitasfamilia.es/">Saber más</a></li>
            <li>Camino Ignaciano: <a href="https://caminoignaciano.org/es/">Ir ahora</a></li>
            <li>Fundación Loyola: <a href="https://fundacionloyola.com/vguadalupe/">Quiénes somos</a></li>
          </ol>
      )
    }
}

class Formulario extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
    };
    this._onButtonClick = this._onButtonClick.bind(this);
  }
  _onButtonClick() {
    this.setState({
      showComponent: true,
    });
  }
  handleSumbit(event){
    event.preventDefault();  
  }
  render(){
      return(
          <div id='contenedorForm'>
              <form onSubmit={this.handleSumbit}>
                  <h1>Formulario</h1>
                  <label>Surrender al 20</label>
                  <input type="text"/>
                  <label>Surrender al 20</label>
                  <input type="text"/>
                  <label>Surrender al 20</label>
                  <input type="text"/>
                  <button onClick={this._onButtonClick}>Button</button>
                  
              </form>
              {this.state.showComponent ?
                    <Resultado /> :
                    null
                  }
          </div>

      );
  }

}

function Numaleat(){
  return Math.floor(Math.random() * (4 - 0 + 1) + 0)
}
function Resultado(){
  let numaleat= Math.floor(Math.random() * (5 - 3 + 1) + 3)
  let array=[]
  let titulos= ['AlFin','Acabo','Esto','Madre','Mia']
  let textos= ['React','Te','Voy','A','*Censurado*']
  for (let i = 0; i < numaleat; i++) {
    array.push(
      <div key={i + 1} className="cuadro">
        <p className='titulo'>{titulos[Numaleat()]}</p>
        <p>{textos[Numaleat()]}</p>
      </div>)
  }
  return (
    <div className='Resultados'>{array}</div>
  )

}



ReactDOM.render(
    <Crud />,
    document.getElementById('root')
  );

