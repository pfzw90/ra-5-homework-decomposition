/**
 * Виджет для отображения текста. Принимает на вход текст. Офигенно.
 */

import PropTypes from 'prop-types'

export default function BottomWidgetText(props) {
    return <div className="BottomWidgetText">{props.text}</div>
}

BottomWidgetText.propTypes = {
    text: PropTypes.string.isRequired
}