import logo from'./logo.png';

function Menu(){
    return (

        <div className="menu">
        <ul>
          <div className="nav">
            <il className="lista"><a href="app.js">HOME</a></il>
            <il className="lista"><a href="#conteudo">DESIGNERS</a></il> 
            <il className="lista"><img className="logo" src={logo}/></il>
            <il className="lista"><a href="#galeria_fotos">PORTFÓLIO</a></il>
            <il className="entrar"><a href="#">ENTRAR</a></il>
          </div>
        </ul>
      </div>
    
    );
}
 
export default Menu;
