import React from 'react'
import SpotifyIcon from '../../assets/img/spotify.png'
import './SpotifyContainer.css'

const SpotifyContainer = () => (
    <div className='spotify-container'>
        <img className='top-nav-icon spotify-logo' src={SpotifyIcon} />
        Latest Spotify Activity
    </div>
)

export default SpotifyContainer