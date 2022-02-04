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
            <div>
                <form>
                <input type="text" placeholder='llevate esta'/>
                </form>
            </div>
            
        );
    }

}





ReactDOM.render(
    <Crud />,
    document.getElementById('root')
  );