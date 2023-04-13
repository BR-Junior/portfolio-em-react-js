import { Section } from '../../components/StylesBase'
import { Card } from '../../components/Card/Card'
import { DataSkills } from '../../assets/data/DataSkills'
// import {useState} from "react";
const Skills = () => {
  // const [skillsList] = useState(DataSkills)
  return (
  <Section className='Skills'>
    <div className='title'>
      Skills
    </div>
    { DataSkills.map((data, index)=>
      <div key={index} className='content'>
        <Card title={data.title} img={data.img} />
      </div>) }
    {/*{ skillsList.map((data)=><div> <Card title={data.title} img={data.img} /> </div>) }*/}
  </Section>
  )
}

export default Skills