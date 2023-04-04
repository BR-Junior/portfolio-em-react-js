import { Section } from '../../components/StylesBase'
import { Card } from '../../components/Card/Card'
import fundo from '../../assets/images/fundo.png'
const Skills = () => {
  return (
  <Section className='Skills'>
    <div>
      Skills
    </div>
    <Card
      img={fundo}
      title='titolo'
      text='texto, texto, texto, texto, texto, texto, texto, texto, texto, texto, texto
       , texto, texto, texto, texto, texto, texto, texto, texto, texto, texto
       , texto, texto, texto, texto, texto, texto, texto, texto, texto, texto
       , texto, texto, texto, texto, texto, texto, texto, texto'
    />
  </Section>
  )
}

export default Skills