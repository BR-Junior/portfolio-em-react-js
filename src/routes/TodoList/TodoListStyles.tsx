import styled from 'styled-components'

const TodoListStyles = styled.div`
  width: auto;
  p {
    margin-bottom: 20px;
  }
  input {
    margin-bottom: 10px;
    margin-right: 10px;    
  }

  .btnAdicionar, .btnSave {
    padding: 5px;
    border: solid 1px royalblue;
    background: transparent;
    color: rgb(255, 255, 255);
  }

  ul li {
    list-style: none;
    font-size: 1rem;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }

  .btnDelete, .btnEdit {
    padding: 5px;
    margin-left: 10px;
    border: solid 1px royalblue;
    background: transparent;
    color: rgb(255, 255, 255);
  }
`
export { TodoListStyles }