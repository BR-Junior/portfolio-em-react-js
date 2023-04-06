import { Section } from '../../components/StylesBase'
import { Card } from '../../components/Card/Card'
import { DataProject } from '../../assets/data/DataProject'
const Projects = () => {
  return (
    <Section className='Projects'>
      <div>
        Projects
      </div>
      { DataProject.map((data)=>
      <div>
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