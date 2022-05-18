import './PagCadastro.css'
import React, { useState } from "react";
import UsuarioService from '../app/service/usuarioService';

import Title from "../components/Title";
import {mensagemSucesso, mensagemErro} from '../components/Toastr'
import { Link } from "react-router-dom";

const Cadastro = (props) => {

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [repetirSenha, setRepetirSenha] = useState("")

    const service = new UsuarioService()

    function validar () {
        const msgs = []

        if (!nome){
            msgs.push("O campo nome é obrigatório.")
        }

        if (!email){
            msgs.push("O campo email é obrigatório.")
        }else if(!email.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]/)){
            msgs.push("Informe um Email válido.")
        }

        if(!senha || !repetirSenha){
            msgs.push("Digite a senha 2x.")
        }else if(senha !== repetirSenha){
            msgs.push("As senhas não batem.")
        }
        return msgs
    }

    const cadastrar = () => {
        const msgs = validar()

        if(msgs && msgs.length > 0){
            msgs.forEach((msg, index) => {
            mensagemErro(msg)                
            })
            return false
        }
        const usuario = {
            nome: nome,
            email: email,
            senha: senha
        }
        service.salvar(usuario)
        .then(response => {
            mensagemSucesso("Usuário cadastrado com sucesso! Faça o login para acessar o sistema.")
            props.history.push("/login")
        }).catch(error => {
            mensagemErro(error.response.data)
        })

    }

    return(

        <>
            <Title/>

            <div className="Cadastro">
                <form>
                    <h4></h4>
                    <div className="form-group">
                        <div className="form-floating mb-3">
                            <input value={nome} 
                                   onChange={e => setNome(e.target.value)} 
                                   type="text" 
                                   className="form-control" 
                                   id="floatingName" 
                                   placeholder="name@example.com"/>
                            <label htmlFor="floatingInput">Name</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="form-floating mb-3">
                            <input value={email} 
                                   onChange={e => setEmail(e.target.value)} 
                                   type="email" 
                                   className="form-control" 
                                   id="floatingEmail" 
                                   placeholder="name@example.com"/>
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="form-floating mb-3">
                            <input value={senha} 
                            onChange={e => setSenha(e.target.value)} 
                            type="password" 
                            className="form-control" 
                            id="floatingPassword" 
                            placeholder="Password"/>
                            <label htmlFor="floatingPassword">Password</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="form-floating mb-3">
                            <input value={repetirSenha} 
                            onChange={e => setRepetirSenha(e.target.value)} 
                            type="password" 
                            className="form-control" 
                            id="floatingRepeatPassword" 
                            placeholder="Password"/>
                            <label htmlFor="floatingPassword">Repeat Password</label>
                        </div>
                    </div>
                    <button onClick={cadastrar} type="submit" className="btn btn-primary">Enviar</button>
                    <p className='paragrafo-cad'>
                        <Link className="link" to="/login">
                            Retornar para a página de login
                        </Link>
                    </p>
                </form>
            </div>
        </>
    )

}

export default Cadastro