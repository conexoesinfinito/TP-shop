import React from 'react'
import './style.css'
import iconE from '../../assets/icon-shop.svg'
import { Link } from 'gatsby'


const Login = () => {
  return (
    <div className="login">
    <div class="box">
        <div class="img-box">
            <img src={iconE} alt="imagem"/>
        </div>
        <div class="form-box">
            <h2> Login </h2>
            <form action="#">
                <div class="input-group">
                    <label for="email">E-mail</label>
                    <input type="email" id="email" placeholder="Digite o seu email" required/>
                </div>
                <div class="input-group">
                    <label for="senha">Senha</label>
                    <input type="password" id="senha" placeholder="Digite a sua senha " required/>
                </div>

                <div class="input-group ">
                    <button>Entrar</button>
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

export default Login