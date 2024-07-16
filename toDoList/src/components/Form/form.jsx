import React, { useState } from "react";

function ToDoForms(props) {

    // Para pegar o estado do elemento e alterar
    const[text, setText] = useState("");

    function handChange(event) {
        let t = event.target.value; //Pega o valor atual que está o elemento
        setText(t); //Passa esse valor para o estado do elemento
    }

    function addItem(event) {
        event.preventDefault(); //Evita o evento padrão que seria mandar pro back
        // Verifica se tem texto
        if(text){
            // setItem([...itens, text]); //Recebe primeiro os itens que já existe e depois o novo item digitado
            props.onAddItem(text); //Chama a função passada do pai pro filho
            setText("") //Quando adiciona um novo elemento ele limpa a caixa texto
        }
        
    }

    return(
        <form>
                <input type="text" onChange={handChange} value={text}/>
                <button onClick={addItem}>Add</button>
            </form>
    )
}

export default ToDoForms;