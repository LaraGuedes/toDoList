import React, { useState } from "react";
import Card from "../Card/card";
import * as S from "./style"

function Modal(props) {
    function hideModal(e) {
        let target = e.target;
        if(target.id === 'modal'){
            props.onHideModal()
        }
    }

    return(
        <S.DivModal onClick={hideModal} id="modal"
        className={props.show ? "modal" : "modal hideModal"}>
            <Card className="cardModal">
                {props.children}
            </Card>
        </S.DivModal>
    )
}

export default Modal;