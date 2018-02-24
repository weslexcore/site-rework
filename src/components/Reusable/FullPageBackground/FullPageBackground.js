import React from 'react'

const FullPageBackground = (props) => (
    <div className={`full-width full-height ${props.className}`}>
        {props.children}
    </div>
)
export default FullPageBackground