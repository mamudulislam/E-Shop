import React from 'react'
import { useLocation } from 'react-router-dom'
import BlogCard from '../../Golobalcomponentes/Blogcard/Blogcard';
import Container from '../../Golobalcomponentes/Container';
import { Helmet } from 'react-helmet-async';

const Blog = () => {
    const pathname = useLocation();
    console.log(pathname)
    return (
        <div>
            <Helmet>
                <title>Blog</title>
            </Helmet>
            <Container>
                <BlogCard pathname={pathname} />
            </Container>
        </div>
    )
}

export default Blog