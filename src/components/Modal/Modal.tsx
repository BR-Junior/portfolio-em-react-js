import {ModalStyles} from "./ModalStyles";
import { useState } from "react";

const Modal = ({ isOpen, setClose }) => {
  // Validação dos campos
  let titulo = document.querySelector('#titulo')

  const [formData, setFormData] = useState({
    titulo: '',
    texto: ''
  })
  const handleOnChangeFormData = (e, key) => {
    setFormData({...formData, [key]: e.target.value})
  }
  const savar = (e) => {
    e.preventDefault()
    console.log(formData)
    formData.titulo = ''
    formData.texto = ''
  }

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
            <form onSubmit={savar}>
              <h1>Adicionar item</h1>
              <div className='formField'>
                <input
                  type="text"
                  placeholder=''
                  required
                  id='title'
                  value={formData.titulo}
                  onChange={(e) => handleOnChangeFormData(e, 'titulo')}
                />
                <label for='title'>
                  Titulo
                </label>
                <input
                  type="text"
                  placeholder=''
                  required
                  id='texto'
                  value={formData.texto}
                  onChange={(e) => handleOnChangeFormData(e, 'texto')}
                />
                <label htmlFor='texto'>
                  Texto
                </label>
              </div>
              <button type="submit" className='submit'>salvar</button>
            </form>
          </div>
        </div>
      </ModalStyles>
    )
  }
  return null
}
export { Modal }