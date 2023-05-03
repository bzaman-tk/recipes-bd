import React, { useEffect } from 'react';

const Blog = () => {
    useEffect(() => {
        document.title = 'Recipes BD | Blog'
    }, [])
    return (
        <div>
            <h2>Hi Blog</h2>
        </div>
    );
};

export default Blog;