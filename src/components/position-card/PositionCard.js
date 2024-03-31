import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import "./PositionCard.scss"


function PositionCard({ title, body }) {
    return (
        <div className='position__card'>
            <h4 className="position__card__title">{title}</h4>
            <p className="position__card__body">{body}</p>
            <Link to="careers" className='position__card__link'>Apply Now</Link>
        </div>
    )
}

export default memo(PositionCard)