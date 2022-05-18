import './PagRedefineSenha.css'

import React from "react";

import { Link } from 'react-router-dom'


import Title from "../components/Title";

const Redefinir = () => {

    return (

        <>
            <Title/>
            <div className="Redefine">
                <div>
                    <h2><strong>Esqueceu sua senha?</strong></h2>
                    <h3>Informe seu email e aguarde! <br/> 
                    Vamos enviar as instruções para recuperar sua senha.</h3>
                    <div class="form-floating mb-3">
                        <input type="email" 
                        class="form-control" 
                        id="floatingInput" 
                        placeholder="name@example.com"/>
                        <label for="floatingInput">Email address</label>
                    </div>
            
                    <button type="button" class="btn btn-primary">Recuperar senha</button>
                    <p><Link className="link" to="/login">Retornar para o login</Link></p>

            </div>
        </div>
        </>
               

    )

}

export default Redefinir