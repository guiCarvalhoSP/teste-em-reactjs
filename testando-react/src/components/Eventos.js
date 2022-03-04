import Botao from "./eventos/Botao"

function Eventos(){

    // Testando eventos enviados por props
    function executarEvento(){
        console.log("Executandao primeiro evento");
    }

    function executarOutroEvento(){
        console.log("Executandao segundo evento");
    }

    return (
        <>
        <h4>Testando Eventos</h4>

        <Botao event={executarEvento} text="Primeiro evento"/>
        <Botao event={executarOutroEvento} text="Segundo evento"/>

        </>
    )
}

export default Eventos