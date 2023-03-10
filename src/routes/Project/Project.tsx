import './Project.css'
import * as S from '../../components/StylesBase'
import {ProjectCol} from './ProjectStyles'
import { DataProject } from '../../assets/data/DataProject'

type Cardprops = {
    title: string
    img: string
    description: string
    github: string
}
const Card = ({img, title, description, github}:Cardprops) => {
    return (
        <span>
            <img src={img} alt="" />
            <h4>{title}</h4>
            <p>{description}</p>
            <a href={github} target='_blank'>Ver mais</a>
        </span>
    )
} 

const Project = () => {
    return (
        <>
        <S.Section className='Project'>
            <S.Title>
                Project
            </S.Title>

            <S.Row>
                <ProjectCol>
                    {DataProject.map((item, index) => {
                        return <Card 
                         img={item.img}
                         title={item.title}
                         description={item.description}
                         github={item.github}
                         />
                        }
                      )
                    }
                </ProjectCol>
            </S.Row>
        </S.Section>
        </>
    )
}

export default Project