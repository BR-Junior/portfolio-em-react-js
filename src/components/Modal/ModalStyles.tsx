import styled from 'styled-components'

const ModalStyles = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgb(0, 0, 0, 0.7);
  height: 100%;
  z-index: 2000;

  .modal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
    height: 500px;
    background: #ffffff;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
  }

  .close {
    display: flex;
    justify-content: end;
  }

  .btnClose {
    padding: 9px;
    cursor: pointer;
  }

  .content {
    display: flex;
    justify-content: center;
    color: #0e0b0b;
  }
`
export { ModalStyles }