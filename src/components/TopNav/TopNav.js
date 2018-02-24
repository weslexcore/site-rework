import React from 'react'
import gh from '../../assets/img/gh.png'
import linkedIn from '../../assets/img/linkedin.png'
import './TopNav.css'

const TopNav = () => (
    <div className='full-width nav-bar nav-height'> 
    <ul className='nav-items'>
        <li className='nav-item'>
            <a href='https://github.com/weslexcore'>
             <img className='top-nav-icon' src={gh}/>
            </a>
        </li>
        <li className='nav-item'>
            <a href='https://www.linkedin.com/in/wesley-mclaughlin-82bba43a/'>
             <img className='top-nav-icon' src={linkedIn}/>
            </a>
        </li>
     </ul>
    </div>
)

export default TopNav