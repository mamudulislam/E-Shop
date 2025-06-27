import { t } from 'i18next'
import React from 'react'
import { CgArrowLongRight } from 'react-icons/cg'
import { Link, useLocation } from 'react-router-dom'
import { TechTalksData } from './TechTalksData'
import BlogCard from '../../../../Golobalcomponentes/Blogcard/Blogcard'

const TechTalk = () => {
    const { pathname } = useLocation();
    return (
        <>
            <div className='mt-20'>
                <div className='flex justify-between'>
                    <div className='w-[70%] lg:w-fit'>
                        <h3 className='font-poppins text-lg md:text-[36px] font-semibold text-black01'>
                            {t("Tech Talk")}
                        </h3>
                        <p className='font-montserrat font-normal text-sm lg:text-xl text-black01 mt-1 lg:mt-4'>Stay up to date with the latest trends, reviews, and insights from our experts.</p>
                    </div>
                    <Link to="/Product" className='flex items-center gap-x-2 font-montserrat font-bold text-sm lg:text-base text-orange group self-end'>
                        {t("View All")}{" "}
                        <span className='group-hover:translate-x-2 transition-transform duration-400'>
                            <CgArrowLongRight size={30} />
                        </span>
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 md:gap-x-5 lg:gap-x-10 mt-12">
                    {TechTalksData.slice(0, 3).map((blog) => (
                        <BlogCard pathname={pathname} {...blog} />
                    ))}
                </div>
            </div >
        </>
    )
}

export default TechTalk