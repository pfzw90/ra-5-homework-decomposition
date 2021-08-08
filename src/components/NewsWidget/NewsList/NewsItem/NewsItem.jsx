export default function NewsItem(props) {
    return (
        <li className="NewsItem" style={{backgroundImage: `url(${props.icon})`}}>
            <a href={props.link}>{props.title}</a>
        </li>
    )
}

NewsItem.defaultProps = {
    icon: "https://puu.sh/I2nXE/d4d52fc23b.png"
}

