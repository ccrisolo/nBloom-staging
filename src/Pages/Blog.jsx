import React from 'react'
import BackgroundImage from '../Components/BackgroundImage'
import BlogContainer from '../Components/Blog/BlogContainer'
import BottomNavigation from '../Components/BottomNavigation'

function Blog() {
    return (
        <div>
            <BackgroundImage />
            <BottomNavigation />
            <div className="container-fluid bp-container px-0">
                <div className="container-xxl px-0 mx-0 pb-5 pb-lg-1">
                    <BlogContainer />
                </div>
            </div>
        </div>
    )
}

export default Blog
