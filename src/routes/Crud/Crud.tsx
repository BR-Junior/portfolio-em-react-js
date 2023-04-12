import { Section } from "../../components/StylesBase";
import { Modal } from "../../components/Modal/Modal";
import {useState} from "react";

const Crud = () => {
  const [modal, serModal] = useState(false)
  return(
    <Section className='Crud'>
      <div className='title'>Crud</div>
      <div className='content'>
        <button onClick={() => serModal(true)}>
          Abrir modal
        </button>
        <Modal
          isOpen={modal}
          setClose={() => serModal(!modal)}
        />
      </div>
    </Section>
  )
}
export { Crud }