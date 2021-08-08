export default function CurrencyItem(props) {
    return (
        <a className="CurrencyWidget-Item" href={props.currencyLink}>        
            {props.currencyName ? <span className="CurrencyWidget-CurrencyName">{props.currencyName}</span> : null}
            {props.currencyValue ? <span className="CurrencyWidget-CurrencyValue">{props.currencyValue}</span> : null}
            <span className="CurrencyWidget-CurrencyChange">{props.currencyChange}</span>
        </a>
    )
}

CurrencyItem.defaultProps = {
    currencyChange : "⋯",
    currencyValue: null,
    currencyName: null
}