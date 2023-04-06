import { Section } from '../../components/StylesBase'
import { Card } from '../../components/Card/Card'
import { DataSkills } from '../../assets/data/DataSkills'
const Skills = () => {
  return (
  <Section className='Skills'>
    <div>
      Skills
    </div>
    { DataSkills.map((data)=>
      <div>
        <Card title={data.title} img={data.img} />
      </div>) }
  </Section>
  )
}

export default Skills