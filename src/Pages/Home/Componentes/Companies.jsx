import React from 'react'
import Samsung from '../../../assets/Img/Samsung.png'
import openAI from '../../../assets/Img/openAI.png'
import amazon from '../../../assets/Img/amazon.png'
import Tencent from '../../../assets/Img/Tencent.png'
import Spotify from '../../../assets/Img/Spotify.png'
const Companies = () => {
    return (
        <section className="mt-20 flex flex-wrap justify-center lg:justify-between gap-5 lg:gap-0  items-center">
            <div className="w-[33%] sm:w-fit">
                <img src={Samsung} alt="samsung" />
            </div>
            <div className="w-[33%] sm:w-fit">
                <img src={openAI} alt="openAi" />
            </div>
            <div className="w-[33%] sm:w-fit">
                <img src={amazon} alt="openAi" />
            </div>
            <div className="w-[33%] sm:w-fit">
                <img src={Tencent} alt="tencent" />
            </div>
            <div className="w-[33%] sm:w-fit">
                <img src={Spotify} alt="spotify" />
            </div>
        </section>
    )
}

export default Companies