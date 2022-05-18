import './ModalVideo.css'
import React, {useState} from "react";

import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

const ModalVideo = ({onClose = () => {}}) => {

    const [visible, setVisible] = useState(true)

    const confirmeDialogFooter = (
        <div>
            <Button label="Adicionar" icon="pi pi-check"/>
            <Button onClick={onClose} label="Cancelar" icon="pi pi-times"  />
        </div>
    );

    return(
        <div className="modalVideo">
            <Dialog header="Adicionar Vídeo" 
                    visible={visible} 
                    style={{ width: '50vw' }} 
                    footer={confirmeDialogFooter} 
                    onHide={onClose}>
                    <label className="form-label" 
                           htmlFor="disabledInput">
                            Insira o nome do Vídeo: 
                    </label>
                    <span className="p-float-label">
                        <InputText id="in" />
                        <label htmlFor="in">Nome do vídeo</label>
                    </span>
                    <label className="form-label" 
                           htmlFor="disabledInput">
                            Insira o nome da categoria: 
                    </label>
                    <span className="p-float-label">
                        <InputText id="in" />
                        <label htmlFor="in">Nome da categoria</label>
                    </span>
                    
            </Dialog>
        </div>
    )

}

export default ModalVideo