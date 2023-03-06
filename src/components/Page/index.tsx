import './Page.css'
import Image from '../Image'
import Content from '../Content'

const Page = () => {
    return (
        <div className="Page">
            <Image 
            srcImage='fundo.jpg'
            alt='imagem de fundo'
            />

            <Content 
            titulo='Bianor Ramos da Silva Junior'
            sibTitulo='Contatos'
            paragrafo= {['11 9.74398872', 'bianor_ramos@hotmail.com']}
            href={['Linkdln', 'Linkdln']}
            link={['Linkdln', 'Linkdln']}
            />
            
            
        </div>
    )
}

export default Page