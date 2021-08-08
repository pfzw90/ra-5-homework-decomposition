/**
 * Виджет для демострации котировок. 
 * На вход принимает массив объектов, содержащий наименование валюты/котировки, текущую стоимость, динамику курса.
 */

import PropTypes from 'prop-types'
import CurrencyItem from './CurrencyItem/CurrencyItem'
import shortid  from 'shortid'
import './CurrencyWidget.css'

export default function CurrencyWidget(props) {
    const {currencies} = props;
    const result = []

    currencies.map((currency) => (
        result.push(<CurrencyItem {...currency} key={shortid.generate()}/>)
    ))

    result.push(<CurrencyItem key={shortid.generate()} currencyLink="#"/>)

    return (
        <div className="CurrencyWidget">{result}</div>
    )
}


CurrencyWidget.propTypes = {
    currencies: PropTypes.arrayOf(
        PropTypes.shape({
        currencyName: PropTypes.string,
        currencyValue: PropTypes.string,
        currencyChange: PropTypes.string,
        currencyLink: PropTypes.string.isRequired})
    ).isRequired
}