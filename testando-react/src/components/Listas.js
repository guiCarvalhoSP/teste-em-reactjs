function Listas({itens}) {

    return (
        <>
            <h3>Lista de algo: </h3>
            {itens.length > 0 ? (
                itens.map((item, index) => (
                    <p key={index}>{item}</p>
                ))) : (
                    <p>Não há lista a ser mostrada.</p>
                )
            }
        </>
    
    )
}

export default Listas;