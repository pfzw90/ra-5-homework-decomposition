/**
 * Ссылка для заголовков. На вход принимает ссылку и название (не обязательно).
 */

import PropTypes from 'prop-types'
import './BasicHeaderLink.css'

export default function BasicHeaderLink(props) {
    return (<a className="BasicHeaderLink" href={props.href}>{props.title || props.href}</a>)
}

BasicHeaderLink.propTypes = {
    href: PropTypes.string.isRequired,
    title: PropTypes.string
}

BasicHeaderLink.defaultProps = {
    title: null
}