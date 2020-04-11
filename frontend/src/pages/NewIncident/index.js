import React from 'react';
import  './style.css';
import logoimg from '../../assets/logo.png'
import { Link } from "react-router-dom";
import { FiArrowLeft} from 'react-icons/fi';
export default function NewIncident() {
  return (
    <div className="new-incident">
    <div className="content">
        <section>
           <img src={logoimg} alt="Logo"></img>
           <h1>Cadastrar Novo caso</h1>
           <p>justo eget magna fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam</p>
            <Link className="back-link" to="/profile">
                  <FiArrowLeft size={16} color="#E02041" />
                Voltar para Home
           </Link>
        </section>
        <form>
            <input placeholder="Titulo do Caso"/>
            <textarea placeholder="descricao"/>
            <input placeholder="Valor em reais"/>
         
           <button className="button">Cadastrar</button>
        </form>
    </div>
</div>
  );
}
