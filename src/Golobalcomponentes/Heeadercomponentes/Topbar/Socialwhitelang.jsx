import { Select } from 'antd';
import i18n from '../../../settings/i18n';
import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Socialwhitelang = () => {
    const currencyOptions = [
        { value: 'TAKA', label: 'TAKA' },
        { value: 'USD', label: 'USD' },
    ];

    const languageOptions = [
        {
            value: "en",
            Language: "en",
            label: (
                <div className="flex items-center gap-x-2">
                    <img src="https://flagcdn.com/us.svg" alt="flag" className="w-[20px] h-[20px]" />
                    <span>English</span>
                </div>
            )
        },
        {
            value: "bd",
            Language: "bd",
            label: (
                <div className="flex items-center gap-x-2">
                    <img src="https://flagcdn.com/bd.svg" alt="flag" className="w-[20px] h-[20px]" />
                    <span>Bangladesh</span>
                </div>
            )
        },
    ];

    const handleLanguageChange = (value) => {
        const selectedLang = languageOptions.find((lang) => lang.value === value);
        if (selectedLang) {
            i18n.changeLanguage(selectedLang.Language || "en");
        }
    };

    const handleCurrencyChange = (value) => {
        console.log("Currency changed to:", value);
    };

    return (
        <div className='flex items-center w-full gap-x-2 lg:gap-x-5 lg:justify-end'>
            <div>
                <Select
                    defaultValue={currencyOptions[0].value}
                    style={{ width: 120 }}
                    onChange={handleCurrencyChange}
                    options={currencyOptions}
                    className="custom-select"
                />
            </div>
            <div className='w-[1px] h-[32px] bg-black100'></div>
            <div>
                <Select
                    defaultValue={languageOptions[0].value}
                    style={{ width: 120 }}
                    onChange={handleLanguageChange}
                    options={languageOptions}
                    className="custom-select"
                />
            </div>
            <div className='w-[1px] h-[32px] bg-black100 hidden lg:block'></div>
            <div className='lg:flex items-center gap-x-4 hidden'>
                <Link to="https://www.facebook.com">
                    <FaFacebookF color='#303030' />
                </Link>
                <Link to="https://www.twitter.com">
                    <FaTwitter color='#303030' />
                </Link>
                <Link to="https://www.instagram.com">
                    <FaInstagram color='#303030' />
                </Link>
            </div>
        </div>
    );
};

export default Socialwhitelang;
