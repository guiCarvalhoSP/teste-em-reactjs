import styles from './Pessoa.module.css';
import PropTypes from 'prop-types';

function Pessoa({nome, idade, profissao, foto}){
    return(
        <div className={styles.pessoaContainer}>
            <h2 className={styles.titulo}>{nome}</h2>
            <img src={foto} alt={nome} />
            <h4>Idade: {idade}</h4>
            <h4>Profissão: {profissao}</h4>
        </div>
    )
}

Pessoa.protoType = {
    nome: PropTypes.string.isRequired,
    idade: PropTypes.number.isRequired,
    profissao: PropTypes.string,
    foto: PropTypes.string
}

Pessoa.defaultProps = {
    nome: "N/A",
    idade: 0,
    profissao: "N/A",
    foto: "N/A"
}

export default Pessoa