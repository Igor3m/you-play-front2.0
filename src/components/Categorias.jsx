import './Categorias.css'

import React, {useState, useEffect} from 'react'
import LocalStorageService from '../app/service/localStorageService'
import axios from 'axios'
import LancamentoTable from './TabelaCategorias'
import CategoriaService from '../app/service/categoriaService'
import * as messages from '../components/Toastr'

import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';

const Categorias = (props) => {

    const [visibleDeletar, setVisibleDeletar] = useState(false)
    const [visibleEditar, setVisibleEditar] = useState(false)
    const [visibleTableVideo, setVisibleTableVideo] = useState(true)
    const [categoriaDeletarId, setCategoriaDeletarId] = useState({})
    const [categoriaEditarId, setCategoriaEditarId] = useState({})
    const [categorias, setCategorias] = useState([])
    const [nome, setNome] = useState('')
    const [fecharModal, setFecharModal] = useState(false)

    const service = new CategoriaService()

    const usuarioLogado = LocalStorageService.obterItem("_usuario_logado")

    useEffect(() => {

        console.log("Usuário logado: ", usuarioLogado.id)

        const categoriaFiltro = {
            usuario: usuarioLogado.id
        }

        service.consultar(categoriaFiltro)
            .then( resposta => {
                setCategorias(resposta.data)
            }).catch( error => {
                console.log(error)
            })

    }, [fecharModal])

    const abrirModalEditar = (idCategoria) => {
        setVisibleEditar(true)
        setCategoriaEditarId(idCategoria)
        console.log(categorias)

        if(fecharModal === true){
            setFecharModal(false)
        }
    }

    const cancelarEdicao = () => {
        setVisibleEditar(false)
        setCategoriaEditarId({})
    }

    const editar = () => {

        const categoriaEditada = {
            nome: nome,
            usuario: usuarioLogado.id
        }
  
        service.editar(categoriaEditarId, categoriaEditada)
               .then( response => {
                messages.mensagemSucesso("Categoria editada com sucesso!")
                setFecharModal(true)
               }).catch(error => {
                messages.mensagemErro("Não foi possível editar")
            })

        setVisibleEditar(false)
    }
    
    const abrirConfirmacaoDeletar = (idCategoria) => {
        setVisibleDeletar(true)
        setCategoriaDeletarId(idCategoria)

        if(fecharModal === true){
            setFecharModal(false)
        }
    }

    const cancelarDelecao = () => {
        setVisibleDeletar(false)
        setCategoriaDeletarId({})
    }


    const deletar = () => {
        service.deletar(categoriaDeletarId)
                .then(response => {
                    messages.mensagemSucesso("Categoria deletada com sucesso.")
                    setFecharModal(true)
                }).catch(error => {
                    messages("Ocooreu um erro ao tentar deletar a categoria.")
                })

        setVisibleDeletar(false)
    }

    const confirmeDialogFooterDeletar = (
        <div>
            <Button label="Yes" icon="pi pi-check" onClick={deletar} />
            <Button label="No" icon="pi pi-times" onClick={cancelarDelecao} />
        </div>
    );

    const confirmeDialogFooterEditar = (
        <div>
            <Button label="Editar" icon="pi pi-check" onClick={editar}/>
            <Button label="Cancelar" icon="pi pi-times" onClick={cancelarEdicao}/>
        </div>
    );

    return (

        <div className="Categorias">

            <div className="row">
                <div className="col-md-12">
                    <div className="bs-component">
                        <LancamentoTable categorias={categorias} abrirTabelaVideos={abrirModalVideos} deleteAction={abrirConfirmacaoDeletar} editAction={abrirModalEditar}/>
                    </div>
                </div>
            </div>
            <div>
                <Dialog header="Confirmar Deleção" 
                        visible={visibleDeletar} 
                        style={{ width: '50vw' }}
                        footer={confirmeDialogFooterDeletar}  
                        onHide={() => setVisibleDeletar(false)}>
                            Confirma a exclusão dessa categoria?
                </Dialog>
                <Dialog header="Editar Categoria" 
                        visible={visibleEditar} 
                        style={{ width: '50vw' }}
                        footer={confirmeDialogFooterEditar}  
                        onHide={() => setVisibleEditar(false)}>
                        <label className="form-label" 
                               htmlFor="disabledInput">
                                   Insira o novo nome da categoria: 
                        </label>
                        <div>
                        <InputText id="in" 
                        onChange={e => setNome(e.target.value)} />
                        </div>
                </Dialog>
                <Dialog header="Editar Categoria" 
                        visible={visibleTableVideo} 
                        style={{ width: '50vw' }}
                        footer={confirmeDialogFooterEditar}  
                        onHide={() => setVisibleTableVideo(false)}>
                        <label className="form-label" 
                               htmlFor="disabledInput">
                                   Insira o novo nome da categoria: 
                        </label>
                        <div>
                        <InputText id="in" 
                        onChange={e => setNome(e.target.value)} />
                        </div>
                </Dialog>
            </div>

        </div>
    )

}

export default Categorias