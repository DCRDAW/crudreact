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
    render(){
        return(
            <div id="contenedorForm">
                <form>
                </form>
            </div>

        );
    }

}





ReactDOM.render(
    <Crud />,
    document.getElementById('root')
  );
