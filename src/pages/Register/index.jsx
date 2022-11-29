import React from 'react'
import './style.css'
import { Link } from "gatsby";
import iconE from '../../assets/icon-shop.svg'

const Register = () => {
  return (
    <div className="register">
    <div class="box">
        <div class="img-box">
            <img src={iconE} alt="icon"/>
        </div>
        <div class="form-box">
            <h2> Criar Conta </h2>
            <p>Já é um membro? <Link to='/Login'>Login</Link></p>
            <form action="#">
                <div class="input-group">
                    <label for="nome">Nome Completo</label>
                    <input type="text" id="nome" placeholder="Digite o seu nome completo" required/>
                </div>
                <div class="input-group">
                    <label for="email">E-mail</label>
                    <input type="email" id="email" placeholder="Digite o seu email" required/>
                </div>
                <div class="input-group">
                    <label for="telefone">Telefone</label>
                    <input type="tel" id="telefone" placeholder="Digite o seu telefone" required/>
                </div>
                <div class="input-group w50">
                    <label for="senha">Senha</label>
                    <input type="password" id="senha" placeholder="Digite a sua senha " required/>
                </div>
                <div class="input-group w50">
                    <label for="Confirmasenha">Confirmar Senha</label>
                    <input type="password" id="Confirmasenha" placeholder="Confirme a senha" required/>
                </div>

                <div class="input-group ">
                    <button>Cadastrar</button>
                </div>
                <div className='bt-voltar'>
                <Link to='/'>voltar</Link>
                </div>
            </form>
        </div>
    </div>
    </div>
  )
}

export default Register
