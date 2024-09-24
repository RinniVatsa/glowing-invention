import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import BlogGridWithSidebar from './components/BlogGridWithSidebar';
import blogs from './assets/blogs.json';
import "./App.css"
const App = () => {
    // Blog post data
    const blogData = [{
            title: "Blog Post 1",
            description: "This is a brief description of blog post 1.",
            image: "path-to-image1.jpg",
            date: "September 23, 2024",
        },
        {
            title: "Blog Post 2",
            description: "This is a brief description of blog post 2.",
            image: "path-to-image2.jpg",
            date: "September 22, 2024",
        },
        {
            title: "Blog Post 3",
            description: "This is a brief description of blog post 3.",
            image: "path-to-image3.jpg",
            date: "September 21, 2024",
        },
        {
            title: "Blog Post 4",
            description: "This is a brief description of blog post 4.",
            image: "path-to-image4.jpg",
            date: "September 20, 2024",
        },
        {
            title: "Blog Post 5",
            description: "This is a brief description of blog post 5.",
            image: "path-to-image5.jpg",
            date: "September 19, 2024",
        },
        {
            title: "Blog Post 6",
            description: "This is a brief description of blog post 6.",
            image: "path-to-image6.jpg",
            date: "September 18, 2024",
        },
    ];
    return ( <
        div >
        <
        Header username = "Robert Fox"
        userImage = "/download.jpeg" / >
        <
        div className = "layout" >

        <
        BlogGridWithSidebar blogs = { blogs }
        />

        <
        /
        div > < /
        div >
    );
}

export default App;