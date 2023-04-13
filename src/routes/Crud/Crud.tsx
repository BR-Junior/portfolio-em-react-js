import { Section } from "../../components/StylesBase";
import { Modal } from "../../components/Modal/Modal";
import {useState} from "react";
import {CrudStyles} from "./CrudStyles";

const Crud = () => {
  const [modal, serModal] = useState(false)
  return(
    <Section className='Crud'>
      <div className='title'>
        Crud
      </div>
      <CrudStyles>
        <div className='content'>
          <button onClick={() => serModal(true)}>
            ADD
          </button>
          <Modal
            isOpen={modal}
            setClose={() => serModal(!modal)}
          />
        </div>
        <div className='list'>
          <div>
            Titolo:
          </div>
          <div>
            Texto:
          </div>
        </div>
      </CrudStyles>
    </Section>
  )
}
export { Crud }