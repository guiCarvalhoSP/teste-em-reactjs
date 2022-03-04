import { useState } from 'react'

function Condicao(){

    const [email, setEmail] = useState();
    const [userEmail, setUserEmail] = useState();

    function enviarEmail(e){
        e.preventDefault();
        console.log('Email enviado');
        setUserEmail(email);
    }

    function limparDados(){
        setUserEmail("");
    }
    return (
        <div>
            <form >
                <input type="email" placeholder="Digite seu email" onChange={(e) => setEmail(e.target.value)}/>
                <br/>
                <button type="submit" onClick={enviarEmail}>Cadastrar email</button>
            </form>

            {userEmail &&(
                <div>
                    <p>Email cadastrado: {userEmail}</p>
                    <button onClick={limparDados}>Limpar dados</button>
                </div>
            )}
        </div>
    )
}

export default Condicao