import React, { useEffect, useState } from "react";

// Components
import List from "./List/list";
import ToDoForms from "./Form/form";
import Modal from "./Modal/modal";

// Class
import Item from './item';

// Estilos
import { Container } from './styleToDO';

const SAVED_ITENS = "savedItens";

function ToDo() {
    const[showModal, setShowModal] = useState(false)
    const [itens, setItem] = useState([]);

    function onAddItem(text) {
        const item = new Item(text);
        setItem([...itens, item]);
        onHideModal()
    }

    function onItemDeleted(item) {
        const filteredItems = itens.filter(it => it.id !== item.id);
        setItem(filteredItems);
    }

    function onDone(item) {
        const updatedItems = itens.map(it => {
            if (it.id === item.id) {
                return { ...it, done: !it.done };
            }
            return it;
        });

        setItem(updatedItems);
    }

    function onHideModal() {
        setShowModal(false)
        
    }

    return (
        <Container>
            <header className="header">
            <h1>To Do</h1>
            <button className="addButton" onClick={() => {setShowModal(true)}}>+</button>
            </header>
            
            <List onDone={onDone} onItemDeleted={onItemDeleted} itens={itens} />

            <Modal show={showModal} onHideModal={onHideModal}>
                <ToDoForms onAddItem={onAddItem} />
            </Modal>
        </Container>
    );
}

export default ToDo;
