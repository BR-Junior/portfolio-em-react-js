import './Home.css'
import Image from '../../components/CompoImage/Image'
import Content from '../../components/Content'
import Link from '../../components/Link/Link'
import fundo from '../../assets/images/fundo.jpg'

const Home = () => {
    return (
        <div className="Home">
            
            <img src={fundo} alt="imagem"/>
            
            <div>
                <Content 
                titulo='Bianor Ramos da Silva Junior'
                sibTitulo='Contatos'
                paragrafo= {['11 9.74398872',
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
                
            </div>
            
        </div>
    )
}

export default Home