import React from 'react'
import FullPageBackground from '../Reusable/FullPageBackground/FullPageBackground'
import Divider from '../Reusable/Divider/Divider'
import MainIcon from '../Reusable/Icons/MainIcon/MainIcon'
import RightChevron from '../Reusable/Icons/RightChevron/RightChevron'
import wave from '../../assets/img/wave.png'
import './MainPage.css'

const roles = ['Software Engineer', 'Traveler', 'Adventurer' ]

const MainPage = (props) => (
    <div>
        <FullPageBackground className='main-image-background' />
        <FullPageBackground className='main-image-background2'/>
        <div className='main-image-background-filter'>
            <div className='page-centered-text-container flex'>
                <div className='flex width-100-percent justify-content-center align-items-center'>
                    <img src={wave}  className='main-icon animated tada' width='50px' height='50px'/>
                    <h1 className='animate fadeIn animation-delay-1 main-welcome-text '>
                        Hi, I'm Wes!
                    </h1>
                </div>
                <ul className='list-style-none'>
                    {roles.map((role, index) =>  <li><h2 className={`animated fadeInDown animation-delay-${index+2}`}>{role}</h2></li>)}
                </ul>
            </div>
            <div className='next-right'>
                <RightChevron onClick={() => props.pageTransition()} className={'animated infinite pulse'} width={'100px'}/>
            </div>
        </div>
    </div>
)

export default MainPage