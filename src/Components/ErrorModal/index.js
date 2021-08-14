import React from 'react';
import { createPortal } from 'react-dom';
import { CloseIcon } from '../../icons/Close';
import './styles.scss';

export const ErrorModal = ({ messageErrorModal, setMessageErrorModal }) => {
    const onCloseErrorModal = () => {
        setMessageErrorModal('');
    }

    return createPortal(
        <div className="containerModal">
            <div className="modal">
                <div className="closeButton">
                    <button onClick={onCloseErrorModal}>
                        {CloseIcon}
                    </button>
                </div>
                <div className="message">{messageErrorModal}</div>
                <button className="ok" onClick={onCloseErrorModal}>Ok</button>
            </div>
        </div>,
        document.getElementById('root'))
};
