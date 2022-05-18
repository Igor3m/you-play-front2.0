import './AddCategoriaVideo.css'

import React, { useState } from 'react'
import ModalCategoria from './ModalCategoria'
import ModalVideo from './ModalVideo'

import { Button } from 'primereact/button';

const AddCatVideo = () => {

    const [modalCategoria, setModalCategoria] = useState(false)
    const [modalVideo, setModalVideo] = useState(false)


    return (

        <div className="addCatVideo">

            <Button label="+ Categoria" 
                    className="p-button-raised p-button-rounded" 
                    onClick={() => setModalCategoria(true)}
            />
            <Button label="+ Vídeo" 
                    className="p-button-raised p-button-rounded" 
                    onClick={() => setModalVideo(true)}
            />

            {modalCategoria ? <ModalCategoria onClose={() => setModalCategoria(false)}/> : null}
            {modalVideo ? <ModalVideo onClose={() => setModalVideo(false)}/> : null}

        </div>
    )

}

export default AddCatVideo