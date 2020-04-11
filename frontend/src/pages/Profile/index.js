import React from 'react';
import logoimg from '../../assets/logo.png'
// import { Container } from './styles';
import { FiPower,FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import './styles.css'
export default function Profile() {
  return (
   <div className="profile-container">
       <header>
           <img src={logoimg}  alt="be the hero"/>
           <span>Bem vinda , APAD</span>
           <Link className="button" to="/incidents/new">Inserir novo caso</Link>
           <button type="button">
              <FiPower size={18} color="#E02041"></FiPower>
           </button>
       </header>
       <h1>Casos Cadastrados</h1>
       <ul>
         <li>
           <strong>Caso:</strong>
           <p>Caso teste</p>
           <strong>Descricao:</strong>
           <p>Caso teste</p>
           <strong>Valor:</strong>
           <p>Caso teste</p>
           <button type="button">
             <FiTrash2 fontSize={20} color="#999"></FiTrash2>
             </button>
         </li>
         <li>
           <strong>Caso:</strong>
           <p>Caso teste</p>
           <strong>Descricao:</strong>
           <p>Caso teste</p>
           <strong>Valor:</strong>
           <p>Caso teste</p>
           <button type="button">
             <FiTrash2 fontSize={20} color="#999"></FiTrash2>
             </button>
         </li>
         <li>
           <strong>Caso:</strong>
           <p>Caso teste</p>
           <strong>Descricao:</strong>
           <p>Caso teste</p>
           <strong>Valor:</strong>
           <p>Caso teste</p>
           <button type="button">
             <FiTrash2 fontSize={20} color="#999"></FiTrash2>
             </button>
         </li>
         <li>
           <strong>Caso:</strong>
           <p>Caso teste</p>
           <strong>Descricao:</strong>
           <p>Caso teste</p>
           <strong>Valor:</strong>
           <p>Caso teste</p>
           <button type="button">
             <FiTrash2 fontSize={20} color="#999"></FiTrash2>
             </button>
         </li>
       </ul>
   </div>
  );
}
