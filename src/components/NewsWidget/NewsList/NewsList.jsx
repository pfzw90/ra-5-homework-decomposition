import PropTypes, { arrayOf } from 'prop-types'
import React from 'react'
import NewsItem from './NewsItem/NewsItem'


export default function NewsList(props) {
    
    const [newsCategory, setNewsCategory] = React.useState(props.news[0].categoryName)

    const chooseCategory = (e) => {
        e.preventDefault();
         setNewsCategory(e.target.id)
    }

    return (
        <div className="NewsList">     
            <div className="NewsList-Categories">
            {props.news.map((category) => 
                (<button 
                    key={`${category.categoryName}-button`}
                    id={category.categoryName}
                    className={`NewsList-Category-Link ${category.categoryName === newsCategory ? 'active' : ''}`} 
                    onClick={chooseCategory} 
                >{category.categoryName}</button>)
            )}
            </div>
            <ul className="NewsList-News">
            {props.children(newsCategory)}
            </ul>
        </div>
    )
}

NewsItem.propTypes = {
    news: PropTypes.arrayOf(
        PropTypes.shape({
            categoryName: PropTypes.string.isRequired,
            categoryItems: arrayOf({
                icon: PropTypes.string,
                link: PropTypes.string.isRequired,
                title: PropTypes.string.isRequired
            })
        })
    )
}
