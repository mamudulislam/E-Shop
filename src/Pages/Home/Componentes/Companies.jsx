import React from 'react'
import Samsung from '../../../assets/Img/Samsung.png'
import openAI from '../../../assets/Img/openAI.png'
import amazon from '../../../assets/Img/amazon.png'
import Tencent from '../../../assets/Img/Tencent.png'
import Spotify from '../../../assets/Img/Spotify.png'
const Companies = () => {
    return (
        <div className='mt-20 flex items-center justify-between'>
            <img src={Samsung} alt="Samsung..." />
            <img src={openAI} alt="openAI..." />
            <img src={amazon} alt="amazon..." />
            <img src={Tencent} alt="Tencent.." />
            <img src={Spotify} alt="Spotify.." />
        </div>
    )
}

export default Companies