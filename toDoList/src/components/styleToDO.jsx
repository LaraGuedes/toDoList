import styled from 'styled-components';

export const Container = styled.div`
    margin: auto;
    max-width: 900px;

    
    .container{
    width: 600px;
    margin: auto;
    }

    

    .header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    }

    .addButton{
    width: 50px;
    height: 50px;
    font-size: 20px;
    border: none;
    background-color: skyblue;
    color: white;
    border-radius: 25px;
    }

    .hideModal{
            display: none;
        }
`