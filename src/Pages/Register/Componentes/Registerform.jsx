import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5';

const RegisterForm = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => {
        setShowPassword(prev => !prev);
    };

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            username: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Email is required'),
            password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
            username: Yup.string().min(3, 'Username must be at least 3 characters').required('Username is required')
        }),
        onSubmit: (values) => {
            console.log('Form submitted:', values);
        }
    });

    return (
        <div className="max-w-md w-full sm:w-[95%] md:w-[90%] lg:w-[80%] xl:max-w-md mx-auto mt-10 p-8 bg-white02 rounded-xl shadow-md">
            <form onSubmit={formik.handleSubmit} className="space-y-5">
                <div>
                    <label className="block text-gray-700 font-medium mb-1">Email Address</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="example@email.com"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-orange-500"
                    />
                    {formik.touched.email && formik.errors.email && (
                        <p className="text-sm text-red-500 mt-1">{formik.errors.email}</p>
                    )}
                </div>
                <div className="relative">
                    <label className="block text-gray-700 font-medium mb-1">Password</label>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        placeholder="********"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-orange-500 pr-12"
                    />
                    <span
                        className="absolute right-4 top-13 transform -translate-y-1/2 cursor-pointer text-gray-500"
                        onClick={togglePassword}
                    >
                        {showPassword ? <IoEyeOutline size={22} /> : <IoEyeOffOutline size={24} />}
                    </span>
                    {formik.touched.password && formik.errors.password && (
                        <p className="text-sm text-red-500 mt-1">{formik.errors.password}</p>
                    )}
                </div>
                <div>
                    <label className="block text-gray-700 font-medium mb-1">Username</label>
                    <input
                        type="text"
                        name="username"
                        placeholder="yourusername"
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-orange-500"
                    />
                    {formik.touched.username && formik.errors.username && (
                        <p className="text-sm text-red-500 mt-1">{formik.errors.username}</p>
                    )}
                </div>
                <button
                    type="submit"
                    className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white text-lg font-semibold rounded-lg transition-all duration-300"
                >
                    Create Account
                </button>
            </form>
        </div>
    );
};

export default RegisterForm;
