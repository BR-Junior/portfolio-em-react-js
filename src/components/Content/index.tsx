import './Content.css'

type Props = {
    titulo: string
    sibTitulo: string
    paragrafo: string | string[]
    href: string | string[]
    link: string | string[]
}

const Listparagrafos = props =>  <p>{props.text}</p>
const Links = props => <a href={props.href}>{props.link}</a>

const Content = ({titulo, sibTitulo, href, link, paragrafo}: Props) => {
    const paragrafos =  [...paragrafo] 
    const linsks = [...link]
    const hrefs = [...href]

    return (
      <div className="Content">
        <h1>{titulo}</h1>
        
        <h3>{sibTitulo}</h3>
        {paragrafos.map((item, index) => <Listparagrafos text={item}/>)} 
        
        {linsks.map((item, index) => <Links href={href} link={item} />)} 
        
    
    </div>
    )
  }
  
  export default Content