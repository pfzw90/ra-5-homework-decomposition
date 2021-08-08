import './BottomWidgetLink.css'

export default function BottomWidgetLink(props) {
    return (
        <li className="BottomWidgetLink" 
            style={ props.icon ? {backgroundImage: `url(${props.icon})`} : null }>
            <a className="BottomWidgetLink-Link" href={props.href}>
                {props.time ? <span className="BottomWidgetLink-Time">{props.time}</span> : null}
                {props.mainTitle ? <span className="BottomWidgetLink-MainTitle">{`${props.mainTitle} ― `}</span> : null}
                <span className="BottomWidgetLink-Text">{props.text}</span>
                {props.additionalText ? <span className="BottomWidgetLink-AdditionalText">{props.additionalText}</span> : null}
            </a>
        </li>         
    )
}

BottomWidgetLink.defaultProps = {
    icon: null,
    time: null,
    mainTitle: null,
    additionalText: null
}
