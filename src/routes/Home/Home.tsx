import {HomeCol} from './HomeStyles'
import * as S from '../../components/StylesBase'
import Content from '../../components/Content'
import Link from '../../components/ButtonLink/ButtonLink'
import gif from '../../assets/images/8c89bb567f6ea95d4618febc0774b658.gif'

const Home = () => {
    return (
        <>
        <S.Section className='Home'>
            <S.Row>
                <HomeCol>
                    <img src={gif} alt="imagem"/>
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