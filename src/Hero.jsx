import './css/temmstyle.css';
import './css/satoshi.css';
import logonegativo from "./Imagens/logonegativo.png";
import { useState } from 'react';

export default function Hero(){

    const [toggleMenu, setToggleMenu] = useState(false);

    function toggle(e){
        if(toggleMenu){
            setToggleMenu(false)
            console.log("false")
        } else{
            setToggleMenu(true)
            console.log(true);
        }
    }

    return(
        <section className="banner-principal" id="banner">
        <div className="menu-banner">
          <div className="logo"><a href="#" className="logo"><img src={logonegativo} width="200px" /></a></div>
          <a id="menu-button" href="#menu-button" className="material-symbols-outlined menu-mobile" onClick={toggle}>
            menu
          </a>
          <div className={!toggleMenu? "links-menu" : "links-menu links-mobile"} id="links-menu">
            <a href="#">Nossos serviços</a>
            <a href="#">Portifólio</a>
            <a href="#">Temm PDV</a>
            <a href="#">Contato</a>
          </div>
        </div>
        <div className="container-banner">
          <div className="texto-banner">
            <h1>
              <span className="gradient-azul-texto">Desenvolvimento&nbsp;</span>e <span className="gradient-rosa-texto">design
                criativo&nbsp;</span>para seu produto.
            </h1>
            <p>Criamos softwares sob medida alinhados às principais necessidades do negócio.</p>
          </div>
          <a href="" className="btn-outline">Nossos serviços</a>
          <a href="" className="btn-outline second-outline">Solicitar orçamento</a>
        </div>
      </section>
    )
}