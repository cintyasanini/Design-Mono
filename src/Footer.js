import Face from './face.png';
import Wpp from './wpp.png';
import Insta from './insta.png';
import Linked from './linked.png';

function Footer(){
    return (

    <div className="footer">
     <a href='#'><img className="face" src={Face}/></a>
     <a href='#'><img className="insta" src={Insta}/></a>
     <a href='#'><img className="linked" src={Linked}/></a>
     <a href='#'><img className="wpp" src={Wpp}/></a>
    </div>
    
    );
}
 
export default Footer;
