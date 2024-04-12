import './css/temmstyle.css';
import './css/satoshi.css';
import logonegativo from "./Imagens/logonegativo.png";
import { useState, useEffect } from 'react';

export default function Hero(){

    const [toggleMenu, setToggleMenu] = useState(false);

    function toggle(e){
        if(toggleMenu){
            setToggleMenu(false)
            document.body.classList.remove('no-scroll');
            
        } else{
            setToggleMenu(true)
            document.body.classList.add('no-scroll');
        }
    }

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      function handleScroll() {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    }, []);

    const scrollToSection = (sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    };

    return(
        <section className="banner-principal" id="banner">
        <div className={`menu-banner ${scrolled ? 'scrolled' : (toggleMenu ? "menuopened" : "")}`}>
          <div className="logo"><a href="#" className="logo"><img src={logonegativo} width="200px" /></a></div>
          <a id="menu-button" href="#menu-button" className="material-symbols-outlined menu-mobile" onClick={toggle}>
            menu
          </a>
          <div className={!toggleMenu? "links-menu" : "links-menu links-mobile"} id="links-menu">
            <a href="#" onClick={() => scrollToSection("servicos")}>Nossos serviços</a>
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