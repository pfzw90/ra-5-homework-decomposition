/**
 * Виджет панели поиска. Принимает на вход массив объектов ссылок с названиями, нижний текст (не обязательно) и нижнюю ссылку (не обязательно),
 * а также иконку поисковика (не обязательно)
 */

import PropTypes from 'prop-types' 
import shortid from 'shortid'
import BasicHeaderLink from '../BasicHeaderLink/BasicHeaderLink'
import './SearchPanel.css'

export default function SearchPanel(props) {

    const links = [];
    props.links.map(link=> links.push(<BasicHeaderLink {...link} key={shortid.generate()}/>))
    return (
        <div className="SearchPanel">
            <div className="SearchPanel-Links">
                {links}
            </div>
            <form className="SearchPanel-SearchForm">
                <label htmlFor="name"><img className="SearchPanel-Logo" src={props.logo} alt=""/></label>
                <input className="SearchForm-Input" name="search"></input>
                <button className="SearchForm-Button" type="submit">Искать ченить</button>
            </form>
            <div className="SearchPanel-BottomText">
                <span className="SearchPanel-BottomText-Text">{props.bottomText}</span>
                <a className="SearchPanel-BottomText-Link" href={props.bottomLinkLink}>{props.bottomLinkText}</a>
            </div>
        </div>
    )
}

SearchPanel.propTypes = {
    links: PropTypes.arrayOf(
        PropTypes.shape({
            href: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired
        })).isRequired,
    logo: PropTypes.string,
    bottomText: PropTypes.string,
    bottomLinkLink: PropTypes.string,
    bottomLinkText: PropTypes.string
}

SearchPanel.defaultProps = {
    logo: "https://puu.sh/I2kZb/da41adb3d8.png",
    bottomText: "Поищите ченибудь, например ",
    bottomLinkText: "здравствуйте вы продаете рыбов",
    bottomLinkLink: "#"
}