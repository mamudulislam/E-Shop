import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { billingInitialValues, billingDetailsSchema } from './Schema';

const Billingdetails = () => {
    return (
        <div className="max-w-3xl mx-auto p-6">
            <h2 className="font-semibold mb-6 font-Poppins text-[36px] text-black">
                Billing Details
            </h2>

            <Formik
                initialValues={billingInitialValues}
                validationSchema={billingDetailsSchema}
                validateOnBlur={false}
                validateOnChange={false}
                onSubmit={(values, { setTouched }) => {
                    // Log values, including orderNotes, inside onSubmit
                    console.log('Order Notes:', values.orderNotes);  // Access orderNotes from values
                    setTouched(
                        Object.keys(values).reduce((acc, key) => {
                            acc[key] = true;
                            return acc;
                        }, {})
                    );
                    alert('Form submitted successfully!');
                    console.log('Submitted data:', values);
                }}
            >
                {({ errors, touched }) => (
                    <Form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-[20px] font-medium mb-1 font-Montserrat">
                                First Name <span className="text-red-500">*</span>
                            </label>
                            <Field
                                name="firstName"
                                type="text"
                                placeholder="Amelia Robert"
                                className={`w-full px-4 py-2 border rounded-md outline-none ${errors.firstName && touched.firstName
                                    ? 'border-red-500'
                                    : 'border-gray-300'
                                    }`}
                            />
                            <ErrorMessage
                                name="firstName"
                                component="div"
                                className="text-red-500 text-sm mt-1"
                            />
                        </div>

                        <div>
                            <label className="block text-[20px] font-medium mb-1 font-Montserrat">
                                Last Name <span className="text-red-500">*</span>
                            </label>
                            <Field
                                name="lastName"
                                type="text"
                                placeholder="Watson"
                                className={`w-full px-4 py-2 border rounded-md outline-none ${errors.lastName && touched.lastName
                                    ? 'border-red-500'
                                    : 'border-gray-300'
                                    }`}
                            />
                            <ErrorMessage
                                name="lastName"
                                component="div"
                                className="text-red-500 text-sm mt-1"
                            />
                        </div>

                        <div>
                            <label className="block text-[20px] font-medium mb-1 font-Montserrat">
                                Phone Number <span className="text-red-500">*</span>
                            </label>
                            <Field
                                name="phoneNumber"
                                type="tel"
                                placeholder="+123 456 7890"
                                className={`w-full px-4 py-2 border rounded-md outline-none ${errors.phoneNumber && touched.phoneNumber
                                    ? 'border-red-500'
                                    : 'border-gray-300'
                                    }`}
                            />
                            <ErrorMessage
                                name="phoneNumber"
                                component="div"
                                className="text-red-500 text-sm mt-1"
                            />
                        </div>

                        <div>
                            <label className="block text-[20px] font-medium mb-1 font-Montserrat">
                                Email Address <span className="text-red-500">*</span>
                            </label>
                            <Field
                                name="email"
                                type="email"
                                placeholder="amelia.watson@eshop.com"
                                className={`w-full px-4 py-2 border rounded-md outline-none ${errors.email && touched.email
                                    ? 'border-red-500'
                                    : 'border-gray-300'
                                    }`}
                            />
                            <ErrorMessage
                                name="email"
                                component="div"
                                className="text-red-500 text-sm mt-1"
                            />
                        </div>

                        <div className="md:col-span-2">
                            <label className="block text-[20px] font-medium mb-1 font-Montserrat">
                                Address <span className="text-red-500">*</span>
                            </label>
                            <Field
                                name="address"
                                type="text"
                                placeholder="Home Address, Auxiliary St. 12345, Anywhere State"
                                className={`w-full px-4 py-2 border rounded-md outline-none ${errors.address && touched.address
                                    ? 'border-red-500'
                                    : 'border-gray-300'
                                    }`}
                            />
                            <ErrorMessage
                                name="address"
                                component="div"
                                className="text-red-500 text-sm mt-1"
                            />
                        </div>

                        <div>
                            <label className="block text-[20px] font-medium mb-1 font-Montserrat">
                                Country <span className="text-red-500">*</span>
                            </label>
                            <Field
                                as="select"
                                name="country"
                                className={`w-full px-4 py-2 border rounded-md outline-none ${errors.country && touched.country
                                    ? 'border-red-500'
                                    : 'border-gray-300'
                                    }`}
                            >
                                <option value="Indonesia">Indonesia</option>
                            </Field>
                            <ErrorMessage
                                name="country"
                                component="div"
                                className="text-red-500 text-sm mt-1"
                            />
                        </div>

                        <div>
                            <label className="block text-[20px] font-medium mb-1 font-Montserrat">
                                State <span className="text-red-500">*</span>
                            </label>
                            <Field
                                as="select"
                                name="state"
                                className={`w-full px-4 py-2 border rounded-md outline-none ${errors.state && touched.state
                                    ? 'border-red-500'
                                    : 'border-gray-300'
                                    }`}
                            >
                                <option value="Kalimantan Timur">Kalimantan Timur</option>
                            </Field>
                            <ErrorMessage
                                name="state"
                                component="div"
                                className="text-red-500 text-sm mt-1"
                            />
                        </div>

                        <div>
                            <label className="block text-[20px] font-medium mb-1 font-Montserrat">
                                City <span className="text-red-500">*</span>
                            </label>
                            <Field
                                as="select"
                                name="city"
                                className={`w-full px-4 py-2 border rounded-md outline-none ${errors.city && touched.city
                                    ? 'border-red-500'
                                    : 'border-gray-300'
                                    }`}
                            >
                                <option value="Samarinda">Samarinda</option>
                            </Field>
                            <ErrorMessage
                                name="city"
                                component="div"
                                className="text-red-500 text-sm mt-1"
                            />
                        </div>

                        <div>
                            <label className="block text-[20px] font-medium mb-1 font-Montserrat">
                                ZIP Code
                            </label>
                            <Field
                                name="zipCode"
                                type="text"
                                placeholder="555555"
                                className={`w-full px-4 py-2 border rounded-md outline-none ${errors.zipCode && touched.zipCode
                                    ? 'border-red-500'
                                    : 'border-gray-300'
                                    }`}
                            />
                            <ErrorMessage
                                name="zipCode"
                                component="div"
                                className="text-red-500 text-sm mt-1"
                            />
                        </div>

                        <div className="md:col-span-2">
                            <label className="block text-[20px] font-medium mb-1 font-Montserrat">
                                Order Notes
                            </label>
                            <Field
                                as="textarea"
                                name="orderNotes"
                                rows={4}
                                placeholder="Enter your order notes ..."
                                className={`w-full px-4 py-2 border rounded-md resize-none outline-none ${errors.orderNotes && touched.orderNotes
                                    ? 'border-red-500'
                                    : 'border-gray-300'
                                    }`}
                            />
                            <ErrorMessage
                                name="orderNotes"
                                component="div"
                                className="text-red-500 text-sm mt-1"
                            />
                        </div>

                        <div className="md:col-span-2">
                            <button
                                type="submit"
                                className="bg-orange text-white px-6 py-3 rounded-md mt-4"
                            >
                                Submit
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Billingdetails;
