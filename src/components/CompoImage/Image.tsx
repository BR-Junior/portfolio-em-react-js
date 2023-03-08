import { type } from 'os'
import './Image.css'


type Props = {
  srcImage: string
  alt: string
  width?: string
  height?: string
}
// type Props = Record<'srcImage' | 'alt' | 'width' | 'height', string | number>

const Image = ({srcImage, alt, width='31.25rem', height='34.375rem'}: Props) => {
    return (
      <div className="Image">

        {/* <img 
        src={srcImage}
        alt={alt}
        style={{
          width:width,
          height:height,
          borderRadius:'2rem'
          }}
        /> */}
      
      </div>
    )
  }
  
  export default Image
  