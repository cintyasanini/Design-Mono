import foto1 from'./foto1.jpg';
import foto2 from'./foto2.jpg';
import foto3 from'./foto3.jpg';
import foto4 from'./foto4.jpg';

function Galeria_fotos(){
    return (
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
    );
}

export default Galeria_fotos;