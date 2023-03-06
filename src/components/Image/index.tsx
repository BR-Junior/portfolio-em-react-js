import './Image.css'


interface Props {
    srcImage: string
    alt: string
}


const Image = ({srcImage, alt}: Props) => {
    return (
      <div className="Image">
        <img src={srcImage} alt={alt} />
      
      </div>
    )
  }
  
  export default Image
  