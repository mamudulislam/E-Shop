import React from 'react'
import Container from '../../Container'
import logo from '../../../assets/Logo/logo.png'
import Searchwhiteauthandcrt from './Searchwhiteauthandcrt'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <Container>
            <div className='grid grid-cols-2 justify-between items-center py-[22px]'>
                <Link to="/">
                    <img src={logo} alt="logo is loading now....." />
                </Link>
                <div>
                    <Searchwhiteauthandcrt />
                </div>
            </div>
        </Container >
    )
}

export default Navbar