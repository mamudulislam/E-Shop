import React from 'react'

const ContactForm = () => {
    return (
        <>
            <div>
                <h2 className='font-Poppins font-semibold text-4xl text-black01'>Contact Us</h2>
                <p className='font-Montserrat text-xl text-black01 font-normal mt-3 mb-[48px]'>Have any questions for us? Don’t hesitate to contact us.</p>
                <form>
                    <div>
                        <label className='block font-Montserrat text-xl font-bold text-black01 mb-2'>Name <span className='text-orange'>*</span></label>
                        <input type="text" placeholder='Mamudul Islam' className='w-full border border-black100 p-5 rounded-[10px] outline-none' />
                    </div>
                    <div className='grid grid-cols-2 gap-x-4 my-8'>
                        <div>
                            <label className='block font-Montserrat text-xl font-bold text-black01 mb-2'>Phone Number <span className='text-orange'>*</span></label>
                            <input type="text" placeholder='+8801234567890' className='w-full border border-black100 p-5 rounded-[10px] outline-none' />
                        </div>
                        <div>
                            <label className='block font-Montserrat text-xl font-bold text-black01 mb-2'>Email Address <span className='text-orange'>*</span></label>
                            <input type="email" placeholder='mamudulislam@gmail.com' className='w-full border border-black100 p-5 rounded-[10px] outline-none' />
                        </div>
                    </div>
                    <div>
                        <label className='block font-Montserrat text-xl font-bold text-black01 mb-2'>Message<span className='text-orange'>*</span></label>
                        <textarea placeholder='message ...' className='w-full border border-black100 p-5 rounded-[10px] outline-none resize-none h-[241px]' />
                    </div>
                    <button
                        type="submit"
                        className="!bg-orange !px-10 !h-12 !border-none !mt-[16px] rounded-[10px] cursor-pointer"
                    >
                        <span className="font-montserrat font-bold text-lg text-white">
                            Submit
                        </span>
                    </button>
                </form>
            </div>
        </>
    )
}

export default ContactForm