import React from 'react'
import { useLocation } from 'react-router-dom'
import BlogCard from '../../Golobalcomponentes/Blogcard/Blogcard';
import Container from '../../Golobalcomponentes/Container';

const Blog = () => {
    const pathname = useLocation();
    console.log(pathname)
    return (
        <div>
            <Container>
                <BlogCard pathname={pathname} />
            </Container>
        </div>
    )
}

export default Blog