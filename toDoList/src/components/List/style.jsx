import styled from "styled-components";

export const Ul = styled.ul`
    list-style: none;
    margin: 0px;
    padding: 0px;

    .done{
        text-decoration: line-through;
        background: green;
    }

    .item{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 30px;
    padding: 15px;
    margin-top: 15px;
    }
`
