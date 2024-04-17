

export default function Case(props){

    function open(e){
        window.open(props.url)
    }
   return(
    <div className="case" onClick={open}>
        <img src={props.img} />
        <h1 className="caseH1 casetitle">{props.title}</h1>
        <h1 className="caseH1">{props.description}</h1>
        <div className="case_tags_container">
            {props.tags.map(p => <div className="case_tag">{p}</div>)}
        </div>
        <img className="case_client_logo" src={props.logo} />
    </div>
   )
}