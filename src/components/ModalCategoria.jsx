import './ModalCategoria.css'

import React, { useEffect, useState } from 'react'

import CategoriaService from '../app/service/categoriaService'
import LocalStorageService from '../app/service/localStorageService'
import Categorias from './Categorias'

import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

import * as messages from '../components/Toastr'

const ModalCategoria = ({onClose = () => {}}) => {

    const usuarioLogado = LocalStorageService.obterItem('_usuario_logado')

    const [nome, setNome] = useState("")
    const [visible, setVisible] = useState(true)

    const service = new CategoriaService()
    
    const submit = () => {
        const categoria = {
            nome: nome,
            usuario: usuarioLogado.id
        }

        service.salvar(categoria)
               .then( response => {
                   messages.mensagemSucesso("Categoria cadastrada com sucesso! Atualize a página para carregar a nova categoria")
               }).catch(error => {
                   messages.mensagemErro(error.response.data)
               })
        
        onClose()
    }

    const confirmeDialogFooter = (
        <div>
            <Button onClick={submit} label="Adicionar" icon="pi pi-check"/>
            <Button onClick={onClose} label="Cancelar" icon="pi pi-times"  />
        </div>
    );

    return(
        
        <div className="modalcategoria">
            <Dialog header="Adicionar Categoria" 
                    visible={visible} 
                    style={{ width: '50vw' }} 
                    footer={confirmeDialogFooter} 
                    onHide={onClose}>
                        <label className="form-label" 
                               htmlFor="disabledInput">
                                   Insira o nome da categoria: 
                        </label>
                        <span className="p-float-label">
                            <InputText id="in" value={nome} onChange={e => setNome(e.target.value)} />
                        <label htmlFor="in">Insira aqui o nome</label>
                        </span>
            </Dialog>
        </div>
    )
}

export default ModalCategoria