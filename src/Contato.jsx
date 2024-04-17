import { useState } from "react"
import axios from "axios";

export default function Contato(){

    const [formData, setFormData] = useState({name: "", surname: "", tel: "", email: "", subject: ""});
    const [informationSent, setInformationSent] = useState(false);
    const [loading, setLoading] = useState(false);
    const [emailBody, setEmailBody] = useState("");
    const [emailSubject, setEmailSubject] = useState("");

    function submit(e){
        e.preventDefault();
        if(e.target.classList.contains("contact_button")){
            let url = "https://wa.me/5543933001868"
            window.open(url, "_tab");
        } else{
            setLoading(true);
            axios.post(`https://apilink`, formData)
            .then(
                (res) => {
                    setInformationSent(true);
                    setLoading(false);
                }
            )
            .catch(
                (err) => {alert(err.response.status);setLoading(false)}
            )
        }
    }


    function input(e){
        let obj = formData;
        obj[e.target.name] = e.target.value;
        setFormData({...obj})
        setEmailSubject("Informações para o cliente: " + formData.name + " " + formData.surname + " tel: " + formData.tel)
        setEmailBody(formData.subject);
        console.log(emailBody)

    }
    return(
        <section class="contact_section" id="contato">
            <div className="contact_card">
                <h1>Vamos começar?</h1>
                <form onSubmit={submit}>
                    <input onChange={input} name="tel" placeholder="Telefone" type="tel" />
                    <input onChange={input} name="email" placeholder="Email" type="email" />
                    <div>
                        <input onChange={input} name="name" placeholder="Nome" />
                        <input onChange={input} name="surname" placeholder="Sobrenome" /> 
                    </div>
                    <textarea onChange={input} name="subject" rows="26" cols="18" />
                    <div class="button_container">
                    <a disabled={loading ? true : false} href={`mailto:contato@temmcode.com?subject=${emailSubject}&body=${encodeURIComponent(JSON.stringify(formData))}`}>Enviar</a>
                    </div>
                </form>
                <div className="whatsapp_choice">
                    <h1>Ou se preferir...</h1>
                    <button  disabled={loading ? true : false} onClick={submit}  type="submit" className="contact_button">Whatsapp</button>
                </div>
            </div>
            <div className="follow_card">
                <h1>Acompanhe nosso trabalho!</h1>
                <div className="contact_options">
                    <button className="contact_button" onClick={() => window.open("https://www.linkedin.com/company/temmcode/")}>Instagram</button>
                    <button className="contact_button" onClick={() => window.open("https://www.linkedin.com/company/temmcode/")}>Linkedin</button>
                </div>
                <h4>© 2024 Temm Code</h4>
            </div>
        </section>
    )
}