import React from 'react'
import Container from '../../Container'
import logo from '../../../assets/Logo/logo.png'
import { Link } from 'react-router-dom'
import { FaPhoneAlt } from 'react-icons/fa'
import { IoIosMail } from 'react-icons/io'
import { FaLocationDot } from 'react-icons/fa6'
import { footerlinklist } from './data'
import visa from '../../../assets/Img/visa.png'
import mastercard from '../../../assets/Img/mastercard.png'
import applepay from '../../../assets/Img/applepay.png'
import paypal from '../../../assets/Img/paypal.png'
const Footer = () => {
    return (
        <Container>
            <footer className='mt-20'>
                <div className='grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-x-2 h-full'>
                    <div className='flex flex-col justify-between h-full'>
                        <Link to="/">
                            <img src={logo} alt="logo is loading now....." />
                        </Link>
                        <div className='mt-5 lg:mt-0'>
                            <ul>
                                <li className='flex items-center gap-x-2 font-Montserrat font-normal text-black01 mb-3'>
                                    <FaPhoneAlt color='#828282' />
                                    <span>+1 (555) 123-4567</span>
                                </li>
                                <li className='flex items-center gap-x-2 font-Montserrat font-normal text-black01 mb-3'>
                                    <IoIosMail color='#828282' />
                                    <span>information@eshop.com</span>
                                </li>
                                <li className='flex items-center gap-x-2 font-Montserrat font-normal text-black01'>
                                    <FaLocationDot color='#828282' />
                                    <span>123 Main Street, Suite 105, Anytown USA</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 lg:grid-cols-4 gap-x-4'>
                        {
                            footerlinklist.map((item, index) => {
                                const linkTitle = item.linkTitle
                                return (
                                    <div key={index}>
                                        <h4 className='font-Poppins font-semibold text-xl text-black01'>
                                            {item.title}
                                        </h4>
                                        {linkTitle.map((data) => {
                                            return (
                                                <div key={data.linkTopic} className='mt-[24px]'>
                                                    <ul>
                                                        <li className='font-Montserrat font-normal text-base text-black200 hover:text-orange transition-all ease-linear duration-75'>
                                                            <Link to={data.to}>
                                                                {data.linkTopic}
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            )
                                        })
                                        }
                                    </div>
                                )
                            })
                        }
                        <div>
                            <h4 className='font-Poppins font-semibold text-xl text-black01'>
                                Payments
                            </h4>
                            <div className='mt-[25px] flex justify-between items-center gap-x-2'>
                                <img src={visa} alt="visa..." />
                                <img src={mastercard} alt="mastercard..." />
                                <img src={applepay} alt="applepay..." />
                                <img src={paypal} alt="paypal..." />
                            </div>
                            <div className='mt-[43px]'>
                                <h4 className='font-Poppins font-semibold text-xl text-black01'>
                                    Follow Us
                                </h4>
                                <ul className='mt-[24px]'>
                                    <li className='font-Montserrat font-normal text-base text-black200 hover:text-orange transition-all ease-linear duration-75 mb-[12px]'>
                                        <Link to="">
                                            Twitter
                                        </Link>
                                    </li>
                                    <li className='font-Montserrat font-normal text-base text-black200 hover:text-orange transition-all ease-linear duration-75 mb-[12px]'>
                                        <Link to="">
                                            Instagram
                                        </Link>
                                    </li>
                                    <li className='font-Montserrat font-normal text-base text-black200 hover:text-orange transition-all ease-linear duration-75'>
                                        <Link to="">
                                            Facebook
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-20 border-t border-t-black100 flex flex-col md:flex-row justify-between items-center py-2'>
                    <span className='font-montserrat font-normal text-xs md:text-sm text-black200'>Copyright © 2025 E-Shop. All Rights Reserved.</span>
                    <div className='flex items-center gap-x-2'>
                        <Link to="" className='font-montserrat font-normal text-black200 text-xs lg:text-sm'>Privacy Policy</Link>
                        <span className='text-black200'>|</span>
                        <Link to="" className='font-montserrat font-normal text-black200 text-xs lg:text-sm'>Terms & Condition</Link>
                        <span className=' text-black200'>|</span>
                        <Link to="" className='font-montserrat font-normal text-black200 text-xs lg:text-sm'>Sitemap</Link>
                    </div>
                </div>
            </footer>
        </Container >
    )
}

export default Footer