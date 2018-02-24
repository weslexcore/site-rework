import React from 'react'
import './MainIcon.css'

const MainIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" 
    className={` ${props.className} main-icon feather feather-cpu`} 
    width={props.width} height={props.width} 
    viewBox="0 0 24 24" fill="none" 
    stroke={props.color} 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>
)

export default MainIcon