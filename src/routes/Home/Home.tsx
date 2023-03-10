import {HomeCol} from './HomeStyles'
import * as S from '../../components/StylesBase'
import Content from '../../components/Content'
import Link from '../../components/Link/Link'
import typescript from '../../assets/images/typescript.jpg'

const Home = () => {
    return (
        <>
        <S.Section>
            <S.Row>
                <HomeCol>
                    <img src={typescript} alt="imagem"/>
                </HomeCol>

                <HomeCol>
                <Content 
                titulo='Bianor Ramos da Silva Junior'
                sibTitulo='Contatos'
                paragrafo= {['11 9.74398872',
                            'bianor_ramos@hotmail.com']}
                />
                <span>
                <Link 
                href='https://www.linkedin.com/in/bianor-ramos/'
                name='linkedin'
                />
                <Link 
                href='https://github.com/BR-Junior'
                name='github'
                />
                </span>
                
                </HomeCol>
            </S.Row>
           
        </S.Section>
        </>
    )
}

export default Home