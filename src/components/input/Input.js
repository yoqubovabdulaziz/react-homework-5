import React, { memo } from 'react'
import "./Input.scss"

function Input({ title }) {
    return (
        <div className='input__box'>
            <input type="text" placeholder={title} />
        </div>
    )
}

export default memo(Input)