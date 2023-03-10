// import './Skills.css'
import * as S from '../../components/StylesBase'
import SkillsCol from './SkillsStyles'
import { DataSkills } from '../../assets/data/DataSkills'

type Cardprops = {
    img: string
    title: string
}
const Card = ({img, title}:Cardprops) => {
    return (
        <span>
            <img src={img} alt="" />
            <h4>{title}</h4>
        </span>
    )
} 

const Skills = () => {
    return (
       <>
        <S.Section className='Skills'>
            <S.Title>
                Skills
            </S.Title>

            <S.Row>
                <SkillsCol>
                    {DataSkills.map((item, index) => {
                         return <Card img={item.img} title={item.title} />
                             }
                         )
                     }
                </SkillsCol>
            </S.Row>
        </S.Section>
        </>
    )
}

export default Skills