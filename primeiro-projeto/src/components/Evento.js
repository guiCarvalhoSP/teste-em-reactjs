function Evento(){
     
    function imprimirConsole(){
        console.log("Botão clicado")
    }

    return (
        <div>
            <button onClick={imprimirConsole}>Clique aqui</button>
        </div>
    )
}

export default Evento