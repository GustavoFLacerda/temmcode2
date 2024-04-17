import Case from "./assets/Case";
import contato from "./Imagens/contato.jpg";
import logonegativo from "./Imagens/logonegativo.png"
import kuros from "./Imagens/kuros.png"
import pointofsale from "./Imagens/pointofsale.jpg"
import infofarmer from "./Imagens/infofarmer.png"

export default function Portfolio(){

    return(
        <section className="portfolio" id="portfolio">
            <div className="marquee">
                Back-End • Front-End • Inteligência Artificial<br/>• Aplicações Mobile • Desenvolvimento
            </div>
            <h1 className="gradient-rosa-texto">Cases de Sucesso</h1>
            <div className="casecontainer">
                <div className="case_column1">
                <div className="case_border_container">
                <Case 
                img={kuros}
                url={"https://sourceforge.net/projects/tardisdevs/files/kuros/"}
                title={"KurOS"}
                description={"Realizamos, juntamente à iniciativa Dev Caminhante, o desenvolvimento de um sistema operacional linux com um ambiente pré-configurado para programação."}
                tags={["Sistema Operacional", "Linux", "KurOS"]}
                logo={logonegativo}
                />
                </div>
                <div className="case_border_container">
                <Case
                img={infofarmer} 
                title={"InfoFarmer"}
                description={"Desenvolvemos uma aplicação open source para aumentar a produtividade em âmbito rural"}
                tags={["Inteligência Artificial", "Algoritmo"]}
                logo={logonegativo}
                />
                </div>
                </div>
                <div className="case_column2">
                <div className="case_border_container">
                <Case
                img={pointofsale} 
                title={"Temm PDV"}
                description={"Em Breve..."}
                tags={["Ponto de Venda", "Desenvolvimento Web", "Interface de Usuário"]}
                logo={logonegativo}
                />
                </div>
                </div>
            </div>
            <button id="portfolio_see_more" className="portfolio_see_more" onClick={() => {window.open("https://gitlab.com/mmonfre")}}>Ver mais</button>
        </section>
    )
}