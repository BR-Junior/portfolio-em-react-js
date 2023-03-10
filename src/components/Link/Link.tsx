import ButtonLinkStyles from './ButtonLinkStyles'


type props = {
    href: string
    name: string
}

const Link = ({href, name}:props) => {
    return (
        <ButtonLinkStyles>
           <a target='_blank' href={href}>{name}</a>
        </ButtonLinkStyles>
    )
}

export default Link