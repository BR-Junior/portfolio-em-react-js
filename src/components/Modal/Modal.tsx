import {ModalStyles} from "./ModalStyles";

const Modal = ({ isOpen, setClose }) => {
  if (isOpen) {
    return(
      <ModalStyles>
        <div className='modal'>
          <div className='close'>
            <button onClick={setClose} className='btnClose'>
              X
            </button>
          </div>
          <div className='content'>
            Modal
          </div>
        </div>
      </ModalStyles>
    )
  }
  return null
}
export { Modal }