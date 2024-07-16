import React from "react"
import Card from "../Card/card"
import * as S from "./style"


function Done(props) {
    if(props.done){
        return (<p className="realizada">Realizada</p>)
    } else{
        return (<p className="naoRealizada">Não Realizada</p>)
    }
}

function List(props) {
    return(
        <S.Ul>
                {/* Map para cada elemento retorna um item em uma linha diferent do array */}
                {/* item.text pega o texto passado pelo item */}
                {props.itens.map(item => 
                    <li key={item.id} >
                        <Card className={item.done ? "done item" : "item"}>
                            {item.text}
                            <div>
                            <button onClick={() => {props.onDone(item)}}><Done done={item.done}></Done></button>
                            {/* Para deletar o item quando clicar */}
                            <button onClick={()=>{
                                props.onItemDeleted(item)
                            }}>X</button>
                            </div>
                        </Card>
                    </li>)}
        </S.Ul>
    )
}

export default List;