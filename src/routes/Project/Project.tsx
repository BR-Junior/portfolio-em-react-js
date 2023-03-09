import './Project.css'
import fundo from '../../assets/images/fundo.jpg'
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
        <div className="Project">
            <div className='title'>Project</div>
             <div className='box'>
                
                <div className='section'>
                                        
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

                    
                </div>

             </div>
        </div>
    )
}

export default Project