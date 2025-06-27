import React from 'react'
import { useLocation } from 'react-router-dom'
import BlogCard from '../../Golobalcomponentes/Blogcard/Blogcard';

const Blog = () => {
    const pathname = useLocation();
    console.log(pathname)
    return (
        <div>
            <BlogCard pathname={pathname} />
        </div>
    )
}

export default Blog