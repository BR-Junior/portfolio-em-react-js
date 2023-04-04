import CardStyles from './CardStyles'

type propsCard = {
  title: string
  img: string
  text?: string

}
const Card = ({title, img, text}:propsCard) => {
  return (
    <CardStyles>
      <div>
        <img src={img} alt="image" />
      </div>
      <span>{title}</span>
      <p>{text}</p>
    </CardStyles>
  )
}
export { Card }