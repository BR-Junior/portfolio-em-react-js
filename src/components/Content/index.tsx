import './Content.css'

type Props = {
    titulo: string
    sibTitulo: string
    paragrafo: string | string[]
}

const Listparagrafos = props =>  <p>{props.text}</p>


const Content = ({titulo, sibTitulo, paragrafo}: Props) => {
    const paragrafos =  [...paragrafo] 
    
    return (
      <div className="Content">
        <h1>{titulo}</h1>
        
        <h3>{sibTitulo}</h3>
        {paragrafos.map((item, index) => <Listparagrafos text={item}/>)} 
        
    </div>
    )
  }
  
  export default Content