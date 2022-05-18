import React from "react";
import { Switch, Route, HashRouter } from 'react-router-dom'

import PagLogin from '../views/PagLogin'
import PagCadastro from '../views/PagCadastro'
import PagRedefineSenha from '../views/PagRedefineSenha'
import PagHome from '../views/PagHome'

const Rotas = () => {

    return (

    <HashRouter>
        <Switch>
            <Route path="/login" component={PagLogin}/>
            <Route path="/cadastro" component={PagCadastro}/>
            <Route path="/redefinir" component={PagRedefineSenha}/>
            <Route path="/home" component={PagHome}/>
        </Switch>
    </HashRouter>

    )

}

export default Rotas