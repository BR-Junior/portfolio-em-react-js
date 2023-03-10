import * as S from '../../components/StylesBase'
import {ColTs} from './About.Style'

const About = () => {
    return (
        <S.Section className='About'>
            <S.Title>
                About
            </S.Title>
            <S.Row>
                <ColTs>
                Olá! Meu nome é Junior e sou um desenvolvedor de software. 
                Eu tenho experiência em várias áreas, 
                incluindo Python, TypeScript, JavaScript, HTML/CSS e Node.js. 
                Sou apaixonado por projetos de código aberto e tenho vários repositórios públicos em meu perfil no GitHub, 
                contendo projetos de diferentes complexidades e níveis de dificuldade. 
                Adoro trabalhar em equipe e alguns dos meus repositórios foram desenvolvidos eColTsaboração com outros usuários do GitHub. 
                Se você está procurando por um desenvolvedor dedicado, que gosta de aprender coisas novas e trabalhar em projetos interessantes, 
                fique à vontade para dar uma olhada no meu perfil.
                </ColTs>
            </S.Row>
        </S.Section>
    )
}

export default About