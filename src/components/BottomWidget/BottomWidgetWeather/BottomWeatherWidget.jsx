/**
 * Виджет для отображения погоды. Принимает на вход текущую температуру, 2 "будущих" температуры и иконку текущей погоды (не обязательно).
 */

import PropTypes from 'prop-types'
import './BottomWeatherWidget.css'


const getTemperature = (temp,degrees) => `${temp} °${degrees}`

export default function BottomWeatherWidget(props) {

    return (
        <div className="BottomWeatherWidget">
            <div className="CurrentWeather">
                <img 
                    className="CurrentWeather-Icon" 
                    src={props.icon} 
                    alt=""/>
                <div className="CurrentWeather-Text">{getTemperature(props.currentWeather, props.degrees)}</div>
            </div>
            <div className="FutureWeather">
                <span className="FutureWeather-Text">{`Далее ${getTemperature(props.futureWeather1, props.degrees)}`}</span>
                <span className="FutureWeather-Text">{`А потом ${getTemperature(props.futureWeather2, props.degrees)}`}</span>
            </div>
        </div>
    )
}

BottomWeatherWidget.propTypes = {
    icon: PropTypes.string,
    currentWeather: PropTypes.string.isRequired,
    futureWeather1: PropTypes.string.isRequired,
    futureWeather2: PropTypes.string.isRequired,
    degrees: PropTypes.oneOf(["C","F"])   
}

BottomWeatherWidget.defaultProps = {
    degrees: "C",
    icon: "https://puu.sh/I2lNK/7fa9b7af4d.png"
}