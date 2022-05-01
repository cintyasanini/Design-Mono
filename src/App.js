import './App.css';
import persona from'./persona1.jpg';
import persona2 from'./persona2.jpg';
import persona3 from'./persona3.jpg';
import foto1 from'./foto1.jpg';
import foto2 from'./foto2.jpg';
import foto3 from'./foto3.jpg';
import foto4 from'./foto4.jpg';
import logo from'./logo.png';
import face from './face.png';
import wpp from './wpp.png';
import insta from './insta.png';
import linked from './linked.png';


function App() {
  return (
    <div className="App">

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

      <div className="cabecalho">
       
      </div>

      <div id="conteudo">
        <h1>DESIGNERS</h1>
        <div className="designer_1">
          <img className="personas" src={persona}/>
          <h3>FULANO    </h3>
          <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos.</p>
        </div>
        <div className="designer_1">
          <img className="personas" src={persona2}/>
          <h3>FULANO    </h3>
          <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos.</p>
        </div>
        <div className="designer_2">
          <img className="personas" src={persona3}/>
          <h3>FULANO    </h3>
          <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos.</p>
        </div>
      </div>




      <div id="galeria_fotos">
       <div className="slider" >
       <h1> PORTFÓLIO </h1>
        <div className="slides" >
            <input type="radio" name="radio-btn" id="radio1" />
            <input type="radio" name="radio-btn" id="radio2"/>
            <input type="radio" name="radio-btn" id="radio3"/>
            <input type="radio" name="radio-btn" id="radio4"/>
            <div className="slide first" >
                <img src={foto1} alt=""/>
            </div>
            <div className="slide" >
            <img src={foto2} alt=""/>
            </div>
            <div className="slide" >
                <img src={foto3} alt=""/>
            </div>
            <div className="slide" >
                <img src={foto4} alt=""/>
            </div>
            <div className="navigation-auto" >
                <div className="auto-btn1"></div>
                <div className="auto-btn2"></div>
                <div className="auto-btn3"></div>
                <div className="auto-btn4"></div>
            </div>
        </div>
        <div className="navigation-bar" >
            <label className="manual-btn" for="radio1"></label>
            <label className="manual-btn" for="radio2"></label>
            <label className="manual-btn" for="radio3"></label>
            <label className="manual-btn" for="radio4"></label>
        </div>
    </div>

    </div>

    <div className="footer">
       <a href='#'><img className="face" src={face}/></a>
       <a href='#'><img className="insta" src={insta}/></a>
       <a href='#'><img className="linked" src={linked}/></a>
       <a href='#'><img className="wpp" src={wpp}/></a>
    </div>

      


    </div>
  );
}

export default App;
