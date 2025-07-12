import { useFormik } from 'formik';
import React from 'react';
import { contactSchema, initialValues } from './Schema';

const ContactForm = () => {
    const { handleSubmit, values, handleChange, errors, handleBlur, touched } =
        useFormik({
            initialValues: initialValues,
            validationSchema: contactSchema,
            onSubmit: async (values) => {
                console.log("submitted", values);
            },
        });

    return (
        <div>
            <h2 className='font-Poppins font-semibold text-4xl text-black01'>Contact Us</h2>
            <p className='font-Montserrat text-xl text-black01 font-normal mt-3 mb-[48px]'>
                Have any questions for us? Don’t hesitate to contact us.
            </p>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className='block font-Montserrat text-xl font-bold text-black01 mb-2'>
                        Name <span className='text-orange'>*</span>
                    </label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Mamudul Islam"
                        className='w-full border border-black100 p-5 rounded-[10px] outline-none'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                    />
                    {touched.name && errors.name && (
                        <p className='font-Montserrat font-medium text-orange'>{errors.name}</p>
                    )}
                </div>

                <div className='grid grid-cols-2 gap-x-4 my-8'>
                    <div>
                        <label className='block font-Montserrat text-xl font-bold text-black01 mb-2'>
                            Phone Number <span className='text-orange'>*</span>
                        </label>
                        <input
                            type="number"
                            name="phone"
                            placeholder="+8801234567890"
                            className='w-full border border-black100 p-5 rounded-[10px] outline-none'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.phone}
                        />
                        {touched.phone && errors.phone && (
                            <p className='font-Montserrat font-medium text-orange'>{errors.phone}</p>
                        )}
                    </div>
                    <div>
                        <label className='block font-Montserrat text-xl font-bold text-black01 mb-2'>
                            Email Address <span className='text-orange'>*</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="mamudulislam@gmail.com"
                            className='w-full border border-black100 p-5 rounded-[10px] outline-none'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                        />
                        {touched.email && errors.email && (
                            <p className='font-Montserrat font-medium text-orange'>{errors.email}</p>
                        )}
                    </div>
                </div>

                <div>
                    <label className='block font-Montserrat text-xl font-bold text-black01 mb-2'>
                        Message <span className='text-orange'>*</span>
                    </label>
                    <textarea
                        name="message"
                        placeholder="message ..."
                        className='w-full border border-black100 p-5 rounded-[10px] outline-none resize-none h-[241px]'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.message}
                    />
                    {touched.message && errors.message && (
                        <p className='font-Montserrat font-medium text-orange'>{errors.message}</p>
                    )}
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
    );
};

export default ContactForm;
