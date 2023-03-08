import './Link.css'

type props = {
    href: string
    name: string
}

const Link = ({href, name}:props) => {
    return (
        <div className="Link">
           <a target='_blank' href={href}>{name}</a>
        </div>
    )
}

export default Link