import Case from "./assets/Case";
import contato from "./Imagens/contato.jpg";
import logonegativo from "./Imagens/logonegativo.png"

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
                img={contato} 
                description={"Realizamos o desenvolvimento completo de um novo sistema de recomendações baseado em inteligência artificial"}
                tags={["Inteligência Artificial", "Desenvolvimento Web", "Aplicações Mobile"]}
                logo={logonegativo}
                />
                </div>
                <div className="case_border_container">
                <Case
                img={contato} 
                description={"Realizamos o desenvolvimento completo de um novo sistema de recomendações baseado em inteligência artificial"}
                tags={["Inteligência Artificial", "Desenvolvimento Web", "Aplicações Mobile"]}
                logo={logonegativo}
                />
                </div>
                </div>
                <div className="case_column2">
                <div className="case_border_container">
                <Case
                img={contato} 
                description={"Realizamos o desenvolvimento completo de um novo sistema de recomendações baseado em inteligência artificial"}
                tags={["Inteligência Artificial", "Desenvolvimento Web", "Aplicações Mobile"]}
                logo={logonegativo}
                />
                </div>
                <div className="case_border_container">
                <Case
                img={contato} 
                description={"Realizamos o desenvolvimento completo de um novo sistema de recomendações baseado em inteligência artificial"}
                tags={["Inteligência Artificial", "Desenvolvimento Web", "Aplicações Mobile"]}
                logo={logonegativo}
                />
                </div>
                </div>
            </div>
            <button id="portfolio_see_more" className="portfolio_see_more">Ver mais</button>
        </section>
    )
}