import { useState } from 'react'

import  styles from './Form.module.css'

function Form() {

    const [name, setName] = useState("Vazio");
    const [password, setPassword] = useState();

    function cadastrarUser(e) {
        e.preventDefault();
        //Apenas teste de como funciona o useState, em situações reais expor a senha desta maneira seria algo incorreto
        console.log(`Cadastrou usúario com sucesso: Nome: ${name}, Senha: ${password}`)
    }

    return (
        <div className={styles.formulario}>
            <form onSubmit={cadastrarUser}>
                <label htmlFor="name">Nome:</label>
                <input type="text" 
                    id="name" 
                    name="name"
                    placeholder="Digite seu nome"
                    onChange={(e) => setName(e.target.value)} />

                <label htmlFor="passWord">Senha:</label>
                <input type="password" 
                    id="password" 
                    name="password" 
                    placeholder="Digite sua senha"
                    onChange={(e) => setPassword(e.target.value)} />

                <input type="submit" value="Cadastrar"/>
            </form>
        </div>
    )
}

export default Form;