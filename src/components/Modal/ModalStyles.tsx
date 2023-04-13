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
    background: #e75252;
  }
  .content {
    display: flex;
    justify-content: center;
    color: #0e0b0b;
  }
  .formField{
    position: relative;
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    margin-top: 5%;
    margin-bottom: 10%;
  }
  input {
    padding: 5px 5px;
    border: 0;
    border-bottom: solid 1px #000;
    outline: none;
    min-width: 180px;
    transition: all 3s ease-out;
  }
  input:nth-of-type(1) {
    margin-bottom: 20px;
  }
  .formField label:nth-of-type(1) {
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 0;
    margin-top: 20px;
    transition: all .3s ease-out;
  }
  .formField label:nth-of-type(2) {
    pointer-events: none;
    position: absolute;
    top: 50px;
    left: 0;
    margin-top: 20px;
    transition: all .3s ease-out;
  }
  .formField input:focus + label,
  .formField input:valid + label{
    margin-top: 0;
  }
  .submit {
    margin-top: -5px;
  }
`
export { ModalStyles }