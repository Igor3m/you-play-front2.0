import './TabelaCategorias.css'
import React from "react";
import { Button } from 'primereact/button';

const LancamentoTable = (props) =>{

    const rows = props.categorias.map( categoria => {
        return (
            <tr key={categoria.id}>
                <td>{categoria.nome}</td>
                <td>
                <button type="button" 
                        className="btn btn-primary"
                        onClick={e => props.abrirTabelaVideos(categoria.id)}>
                            Vídeos
                </button>
                </td>
                <td>
                    <button type="button" 
                            className="btn btn-outline-info btn-sm"
                            onClick={e => props.editAction(categoria.id)}>
                                <i className="pi pi-pencil mr-2"></i>
                    </button>
                </td>
                <td>
                    <button type="button" 
                            className="btn btn-outline-danger btn-sm"
                            onClick={e => props.deleteAction(categoria.id)}>
                                <i className="pi pi-times"></i>
                    </button>
                </td>
            </tr>
        )
    })

    return(

        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Nome</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>

    )
}

export default LancamentoTable