import { Section } from '../../components/StylesBase'
import { Card } from '../../components/Card/Card'
import { DataProject } from '../../assets/data/DataProject'
const Projects = () => {
  return (
    <Section className='Projects'>
      <div className='title'>
        Projects
      </div>
      { DataProject.map((data,index)=>
      <div key={index} className='content'>
        <Card
          title={data.title}
          img={data.img}
          link={data.github}
          textLink='ver mais'
          text={data.description}
        />
      </div>) }
    </Section>
  )
}

export default Projects