// import './Skills.css'
import * as S from './SkillsStyles'
import fundo from '../../assets/images/fundo.jpg'
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
        // <div className="Skills">
        //     <div className='title'>Skills</div>
        //      <div className='box'>
                
        //         <div className='section'>
                                        
        //             {DataSkills.map((item, index) => {
        //                 return <Card img={item.img} title={item.title} />
        //                     }
        //                 )
        //             }

                    
        //         </div>

        //      </div>
        // </div>
        <>
        <S.Page className='Skills'>
            <S.Title>
                Skills
            </S.Title>

            <S.Row>
                <S.Col>
                    {DataSkills.map((item, index) => {
                         return <Card img={item.img} title={item.title} />
                             }
                         )
                     }
                </S.Col>
            </S.Row>
        </S.Page>
        </>
    )
}

export default Skills