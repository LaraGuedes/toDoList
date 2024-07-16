import React from "react";
import * as S from "./style"

function Card(props) {
    return(
        <S.DivCard className={props.className ? `${props.className} card` : "card"}>
            {props.children}
        </S.DivCard>
    )
}

export default Card;