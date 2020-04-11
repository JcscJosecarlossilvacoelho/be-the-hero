import React ,{useState} from 'react';
import  './style.css';
 import logoimg from '../../assets/logo.png'
 import { Link ,useHistory} from "react-router-dom";
import { FiArrowLeft} from 'react-icons/fi';
import api from '../../services/api'
export default function Register() {
  const [name,setname] = useState("");
  const [email,setemail] = useState("");
  const [whatsapp,setwhatsapp] = useState("");
  const [city,setcity] = useState("");
  const [uf,setuf] = useState("");
  const history = useHistory()
  async function handleRegister(e) {
      e.preventDefault();
      const data = {
        name,
        email,
        whatsapp,
        city,
        uf
      }
      try {
        const response = await api.post('ongs',data)
         alert(`Seu ID de acesso : ${response.data.id}`)
         history.push("/")
      } catch (error) {
        alert(`erro no cadastro`)
        
      }
    
  }
  return (
    <div className="register-container">
        <div className="content">
            <section>
               <img src={logoimg} alt="Logo"></img>
               <h1>Cadastro</h1>
               <p>justo eget magna fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam</p>
                <Link className="back-link" to="/">
                      <FiArrowLeft size={16} color="#E02041" />
                    Já tenho cadastro
               </Link>
            </section>
            <form onSubmit={handleRegister}>
                <input value={name} onChange={e => setname(e.target.value)}  placeholder="Nome da ONG"/>
                <input value={email} onChange={e => setemail(e.target.value)} type="email" placeholder="E-Mail"/>
                <input value={whatsapp} onChange={e => setwhatsapp(e.target.value)} placeholder="Whatsapp"/>
               <div className="input-group">
                 <input value={city} onChange={e => setcity(e.target.value)} style={{width:"80%"}} placeholder="Cidade"/>
                 <input  value={uf} onChange={e => setuf(e.target.value)} placeholder="UF" style={{width:80}}/>

               </div>
               <button className="button">Regitrar</button>
            </form>
        </div>
    </div>
  );
}
