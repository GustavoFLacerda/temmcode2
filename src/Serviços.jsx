import './css/temmstyle.css';
import './css/satoshi.css';

export default function Serviços(){

    return(
        <section>
        <div className="divisor-banner">
          <span className="divisor-esquerdo"></span>
          <span className="divisor-direito"></span>
          <div className="container">
            <div className="row">
    
              <div className="col-12 py-5 my-3 text-center">
                <h1 className="text-center gradient-azul-texto">Nossos serviços</h1>
    
              </div>
    
              <div className="col-md-6 mb-4  caixa-card-servicos">
                <div className="card-servicos">
                  <div className="header-card-servicos">
                    <h3 className="text-center titulo-card-servicos gradient-azul-texto">Aplicações Mobile</h3>
                    <span className="material-symbols-outlined">
                      smartphone
                    </span>
                  </div>
                  <p>Criamos ou adaptamos sistemas para o mobile, para levar sua empresa para a palma da mão de seus
                    clientes e funcionários.</p>
                </div>
    
                <div id="sombra-card-servicos"></div>
              </div>
    
    
              <div className="col-md-6 mb-4  caixa-card-servicos">
                <div className="card-servicos">
                  <div className="header-card-servicos">
                    <h3 className="text-center titulo-card-servicos gradient-azul-texto">Desenvolvimento Web</h3>
                    <span className="material-symbols-outlined">
                      language
                    </span>
                  </div>
                  <p>Soluções web personalizadas para atender às suas necessidades, com gerenciamento simplificado e perfeita integração aos sistemas internos existentes.</p>
                </div>
                <div id="sombra-card-servicos"></div>
              </div>
    
              <div className="col-md-6 mb-4  caixa-card-servicos">
                <div className="card-servicos">
                  <div className="header-card-servicos">
                    <h3 className="text-center titulo-card-servicos gradient-azul-texto">Back-end</h3>
                    <span className="material-symbols-outlined">
                      database
                    </span>
                  </div>
                  <p>Temos expertise no desenvolvimento de infraestrutura de back-end complexa e de para aplicativos móveis ou web e serviços corporativos.</p>
                </div>
                <div id="sombra-card-servicos"></div>
              </div>
    
              <div className="col-md-6 mb-4  caixa-card-servicos">
                <div className="card-servicos">
                  <div className="header-card-servicos">
                    <h3 className="text-center titulo-card-servicos gradient-azul-texto">Front-end</h3>
                    <span className="material-symbols-outlined">
                      format_paint
                    </span>
                  </div>
                  <p>Criamos aplicações modulares e de alto desempenho com tecnologias modernas para oferecer a melhor experiencia de usuario.</p>
                </div>
                <div id="sombra-card-servicos"></div>
              </div>
    
              <div className="col-md-6 mb-4 caixa-card-servicos">
                <div className="card-servicos">
                  <div className="header-card-servicos">
                    <h3 className="text-center titulo-card-servicos gradient-azul-texto">Inteligência Artificial</h3>
                    <span className="material-symbols-outlined">
                      linked_services
                    </span>
                  </div>
                  <p>Possuimos profundo conhecimento em Inteligência Artificial (IA), análise de dados, aprendizado de máquina e implementação de tecnologias avançadas.</p>
                </div>
                <div id="sombra-card-servicos"></div>
              </div>
    
              <div className="col-md-6 mb-4 caixa-card-servicos">
                <div className="card-servicos">
                  <div className="header-card-servicos">
                    <h3 className="text-center titulo-card-servicos gradient-azul-texto">Temm PDV</h3>
                    <span className="material-symbols-outlined" style={{ fontWeight: 100 }}>
                      point_of_sale
                    </span>
                  </div>
                  <p>Desenvolvemos uma ferramenta poderosa para gerenciamento de finanças com precisão e ajudar a manter a saúde financeira do seu negócio.</p>
                </div>
                <div id="sombra-card-servicos"></div>
              </div>
    
    
            </div>
          </div>
        </div>
    
      </section>
    )
}