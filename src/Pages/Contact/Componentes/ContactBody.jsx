import React from 'react'
import ContactForm from './ContactForm'
import { Link, useLocation } from 'react-router-dom'
import { FaPhoneAlt } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';
import { FaLocationDot } from 'react-icons/fa6';

const ContactBody = () => {
    const { pathname } = useLocation();
    const pageName = pathname.split("/").slice(1)[0];
    console.log(pageName)

    return (
        <div className='grid grid-cols-[2fr_1fr] gap-x-3'>
            <div>
                <h1 className="font-montserrat text-black01 my-[64px]">
                    <Link className="font-normal" to="/">
                        Home
                    </Link>{" "}
                    | <span className="font-bold"> {pageName}</span>
                </h1>
                <ContactForm />
            </div>
            <div>
                <div className='bg-white02 p-10 mt-40 rounded-[25px]'>
                    <h3 className='font-Poppins font-semibold text-[24px] text-black01 pb-4'>Let’s Keep in Touch!</h3>
                    <p className='font-Montserrat font-normal text-[18px] leading-[30px] text-black100'>We would love to hear from you. Contact us for
                        any inquiries you might have for us.</p>
                    <div className='mt-10'>
                        <div>
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
                    <div className='mt-10'>
                        <h4 className='font-Montserrat font-bold text-[20px]'>Opening Hours</h4>
                        <div className='border border-b-3 border-orange w-[159px]'></div>
                    </div>
                    <div className='mt-6 gap-y-2'>
                        <div className='flex gap-x-3'>
                            <h4 className='font-Montserrat font-bold text-[16px] text-black01'>MON to FRI:</h4><span className='font-Montserrat font-normal text-[16px] text-black01'>08:00 AM - 04:00 PM</span>
                        </div>
                        <div className='flex gap-x-3'>
                            <h4 className='font-Montserrat font-bold text-[16px] text-black01'>SAT to SUN:</h4><span className='font-Montserrat font-normal text-[16px] text-black01'>09:00 AM - 03:00 PM</span>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ContactBody