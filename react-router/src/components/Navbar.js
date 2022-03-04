import { Link } from "react-router-dom";
import styles from './Navbar.module.css';

function Navbar(){
    return(
        <div className={styles.cabecalho}>
            <div className={styles.logo}>
                Logo
            </div>
            <ul>
                <li className={styles.itens}>
                    <Link  to="/">Home</Link>
                </li>
                <li className={styles.itens}>
                    <Link  to="/contato">Contato</Link>
                </li>
                <li className={styles.itens}>
                    <Link  to="/sobre">Sobre nós</Link>
                </li>
            </ul>
        </div>

    )
}

export default Navbar;