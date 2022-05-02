import persona from'./persona1.jpg';
import persona2 from'./persona2.jpg';
import persona3 from'./persona3.jpg';

function Conteudo(){
    return (

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
    
    );
}
 
export default Conteudo;
