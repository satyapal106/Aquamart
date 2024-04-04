import React, { useState } from 'react'
import Modal from './Modal'

function Modalbutton() {

    const [modalOpen, setModalOpen] = useState(false);
    return (
        <div>
            <h1>Hey, click on the button to open the modal.</h1>
            <button
                className="openModalBtn"
                onClick={() => {
                    setModalOpen(true);
                }}
            >
                Open
            </button>
            {modalOpen && <Modal setOpenModal={setModalOpen} />}

        </div>

    )
}

export default Modalbutton