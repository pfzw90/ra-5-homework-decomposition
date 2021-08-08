/**
 * Виджет для списка новостей/программы передач/объявлений итд. Принимает на вход массив ссылок, который содержит/может содержать:
 * 1. Текст ссылки (обязательно)
 * 2. Саму ссылку (обязательно)
 * 3. Иконку (не обязательно)
 * 4. Название перед основным текстом (не обязательно)
 * 5. Дополнительный текст (не обязательно)
 * 6. Время (не обязательно)
 */

import PropTypes from 'prop-types' 
import BottomWidgetLink from './BottomWidgetLink/BottomWidgetLink'
import shortid from 'shortid';
import './BottomWidgetLinksList.css'

export default function BottomWidgetLinksList(props) {
    const list = [];
    props.links.map(link=> list.push(<BottomWidgetLink {...link} key={shortid.generate()}/>))

    return (
        <ul className="BottomWidgetLinksList">
            {list}
        </ul>
    )
}

BottomWidgetLinksList.propTypes = {
    links: PropTypes.arrayOf(
        PropTypes.shape({
        icon: PropTypes.string,
        href: PropTypes.string.isRequired,
        time: PropTypes.string,
        mainTitle: PropTypes.string,
        text: PropTypes.string.isRequired,
        additionalText: PropTypes.string
        })
    )
}