function StateLift({ setNome }){

    return (
        <>
            <h4>Digite um nome</h4>
            <input type="text" onChange={(e) => setNome(e.target.value)}/>
        </>
    )
}

export default StateLift;