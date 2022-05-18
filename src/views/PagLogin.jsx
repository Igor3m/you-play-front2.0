import './PagLogin.css'
import React, { useState } from "react";

import Title from '../components/Title';
import UsuarioService from '../app/service/usuarioService';
import {mensagemErro} from '../components/Toastr'
import { Link } from "react-router-dom";
import LocalStorageService from '../app/service/localStorageService';

const Login = (props) => {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const service = new UsuarioService()

    const entrar = () => {
        service.autenticar({
            email: email,
            senha: senha
        }).then( response => {
            LocalStorageService.adicionarItem("_usuario_logado", response.data)
            props.history.push("/home")
        }).catch( erro => {
            mensagemErro(erro.response.data)
        })  
    }


    return (
        <>
            <Title/>

            <div className="Login">
                <form action="" className="Formulario">
                    <h4>Login</h4>
                    <div className="form-group">
                        <div className="form-floating mb-3">
                            <input
                                type="email"
                                className="form-control"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                id="floatingInput"
                                placeholder="name@example.com"
                            />
                        <label htmlFor="floatingInput">Email address</label>
                        </div>
                    </div>

                    <div className="form-group">
                    <div className="form-floating">
                        <input
                            type="password"
                            className="form-control"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            id="floatingPassword"
                            placeholder="Password"
                        />
                    <label htmlFor="floatingPassword">Password</label>
                    </div>
                    </div>

                    <div>
                        <button onClick={entrar} className="btn-login">
                            Entrar
                        </button>
                    </div>

                    <div>
                        <p className="paragrafo">
                            Não tem uma conta?{""}
                            <Link className="link" to="/cadastro">
                            cadastre-se
                            </Link>
        
                        </p>
                        <p className="paragrafo">
                            <Link className="link" to="/redefinir">
                                Esqueci a minha senha
                            </Link>
                        </p>
                    </div>
                </form>
            </div>

        </>
    )

}

export default Login