import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
class Crud extends React.Component{
    render(){
        return(
            <div>
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
            <aside>Estoy</aside>
        );
    }

}
class Formulario extends React.Component{
    render(){
        return(
            <div id='contenedorForm'>
                <form>
                    <h1>Formulario</h1>
                    <label>Surrender al 20</label>
                    <input type="text"/>
                    <label>Surrender al 20</label>
                    <input type="text"/>
                    <label>Surrender al 20</label>
                    <input type="text"/>
                    <input type="button" value="Enviar" />
                </form>
            </div>
            
        );
    }

}





ReactDOM.render(
    <Crud />,
    document.getElementById('root')
  );