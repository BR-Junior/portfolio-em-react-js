import * as S from './HomeStyles'
import Content from '../../components/Content'
import Link from '../../components/Link/Link'
import typescript from '../../assets/images/typescript.jpg'


const Home = () => {
    return (
        <>
        <S.Page className='Home'>
            <S.Row>
                <S.Col>
                    <img src={typescript} alt="imagem"/>
                </S.Col>
            
                <S.Col>
                    
                    <Content 
                    titulo='Bianor Ramos da Silva Junior'
                    sibTitulo='Contatos'
                    paragrafo= {['11 9.7439-8872',
                    'bianor_ramos@hotmail.com']}
                    />

                    <Link 
                    href='https://www.linkedin.com/in/bianor-ramos/'
                    name='linkedin'
                    />
                    <Link 
                    href='https://github.com/BR-Junior'
                    name='github'
                    />
                
                    
                
                </S.Col>
            </S.Row>
            
            
            <div>
                
            </div>
            
        </S.Page>
        </>
    )
}

export default Home