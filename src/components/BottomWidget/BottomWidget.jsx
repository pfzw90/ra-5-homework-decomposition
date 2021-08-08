/**
 * Виджет для нижней части страницы. Принимает на вход объект с названием и ссылкой и один узел (любой).
 */

import BasicHeaderLink from "../BasicHeaderLink/BasicHeaderLink";
import PropTypes from 'prop-types'
import React from "react";
import './BottomWidget.css'

export default function BottomWidget(props) {
    const { headerLink, content } = props;
    return (
        <div className="BottomWidget">
        <BasicHeaderLink {...headerLink}/>
        {content ? <div className="BottomWidget-Content">{content}</div> : null}
        </div>
    )
}

BottomWidget.propTypes = {
    content: PropTypes.node,
    headerLink: PropTypes.shape({
        href: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
    }) 
}

BottomWidget.defaultProps = {
    content: null
}

