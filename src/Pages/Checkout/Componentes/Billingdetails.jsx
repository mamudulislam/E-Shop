import React from 'react'

const Billingdetails = () => {
    return (
        <>
            <div className="max-w-3xl mx-auto p-6">
                <h2 className="font-semibold mb-6 font-Poppins text-[36px] text-black">Billing Details</h2>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-[20px] font-medium mb-1 font-Montserrat">
                            First Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Amelia Robert"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-[20px] font-medium mb-1 font-Montserrat">
                            Last Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Watson"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-[20px] font-medium mb-1 font-Montserrat">
                            Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="tel"
                            placeholder="+123 456 7890"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-[20px] font-medium mb-1 font-Montserrat">
                            Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            placeholder="amelia.watson@eshop.com"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none"
                        />
                    </div>
                    <div className="md:col-span-2">
                        <label className="block text-[20px] font-medium mb-1 font-Montserrat">
                            Address <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Home Address, Auxiliary St. 12345, Anywhere State"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-[20px] font-medium mb-1 font-Montserrat">
                            Country <span className="text-red-500">*</span>
                        </label>
                        <select className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none">
                            <option>Indonesia</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-[20px] font-medium mb-1 font-Montserrat">
                            State <span className="text-red-500">*</span>
                        </label>
                        <select className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none">
                            <option>Kalimantan Timur</option>
                            <option>Kalimantan Timur</option>
                            <option>Kalimantan Timur</option>
                            <option>Kalimantan Timur</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-[20px] font-medium mb-1 font-Montserrat">
                            City <span className="text-red-500">*</span>
                        </label>
                        <select className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none">
                            <option>Samarinda</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-[20px] font-medium mb-1 font-Montserrat">ZIP Code</label>
                        <input
                            type="text"
                            placeholder="555555"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none"
                        />
                    </div>

                    <div className="md:col-span-2">
                        <label className="block text-[20px] font-medium mb-1 font-Montserrat">Order Notes</label>
                        <textarea
                            rows={4}
                            placeholder="Enter your order notes ..."
                            className="w-full px-4 py-2 border border-gray-300 rounded-md resize-none outline-none"
                        ></textarea>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Billingdetails