import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import "./NewsCard.scss"

import { HiArrowLongRight } from "react-icons/hi2";



function NewsCard({ title, image }) {
    return (
        <div className='news__card'>
            <div className="news__card__frame">
                <img src={image} alt="" />
            </div>
            <div className="news__card__content">
                <h4 className="news__card__title">{title}</h4>
                <p className="news__card__body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et.</p>
                <Link to="/blog-inner" className="news__card__link">
                    Learn More
                    <HiArrowLongRight />
                </Link>
            </div>
        </div>
    )
}

export default memo(NewsCard)