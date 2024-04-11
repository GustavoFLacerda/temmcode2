

export default function Contato(){
    return(
        <section class="contact_section">
            <div className="contact_card">
                <h1>Vamos começar?</h1>
                <form>
                    <input name="tel" placeholder="Telefone" type="tel" />
                    <input name="email" placeholder="Email" type="email" />
                    <div>
                        <input name="name" placeholder="Nome" />
                        <input name="surname" placeholder="Sobrenome" /> 
                    </div>
                    <textarea rows="26" cols="18" />
                    <div class="button_container">
                    <button type="submit">Enviar</button>
                    </div>
                </form>
                <div className="whatsapp_choice">
                    <h1>Ou se preferir...</h1>
                    <button className="contact_button">Whatsapp</button>
                </div>
            </div>
            <div className="follow_card">
                <h1>Acompanhe nosso trabalho!</h1>
                <div className="contact_options">
                    <button className="contact_button">Instagram</button>
                    <button className="contact_button">Linkedin</button>
                </div>
                <h4>© 2024 Temm Code</h4>
            </div>
        </section>
    )
}