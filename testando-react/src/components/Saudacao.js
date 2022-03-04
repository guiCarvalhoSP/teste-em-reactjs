function Saudacao({ nome }){

    function gerarSaudacao(userNome) {
        return `Olá ${userNome}, tudo bem?`
    }

    return (
    <>
        {nome && (
            <p>{gerarSaudacao(nome)}</p>)
        }
    </>)
    
}

export default Saudacao;