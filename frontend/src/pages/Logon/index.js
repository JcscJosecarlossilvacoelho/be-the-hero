import React , {useState}from 'react';
import './styles.css'
import { Link } from "react-router-dom";
import { FiLogIn} from 'react-icons/fi';
import heroresimage from '../../assets/Heroes.svg'
import logoimg from '../../assets/logo.png'
import api from '../../services/api'
export default function Logon(){
    const [id,setId] = useState("")
    async function handlelogin(e) {
        e.preventDefault();
        try {
            const response = await api.post("sessions",{ id })

        } catch (error) {
            alert("Falha  no Login")
        }
    }
    return (
        <>
        <div className="logon-container">
            <section className="form">
                <img className="imglogon" src={logoimg} alt="Logo"></img>
                <form onSubmit={handlelogin} >
                    <h1>Faça o seu Login</h1>
                    <input value={id} onChange={ e => setId(e.target.value)} placeholder="Sua Id"/>
                    <button className="button" type="submit">Login</button>
                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041" />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
            <img  className="imglogon" src={heroresimage} alt="herores"></img>

        </div>
        </>
    )
}