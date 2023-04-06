import CardStyles from './CardStyles'

type propsCard = {
  title: string
  img: string
  link?: string
  textLink?: string
  text?: string

}
const Card = ({title, img, link, textLink, text}:propsCard) => {
  return (
    <CardStyles>
      <div>
        <img src={img} alt="image" />
      </div>
      <span>
        {title}
      </span>
      <div>
        {text ? <p>{text}</p> : null}
      </div>
      <div>
        {link ? <a target="_blank" href={link}>{textLink}</a> : null}
      </div>
    </CardStyles>
  )
}
export { Card }