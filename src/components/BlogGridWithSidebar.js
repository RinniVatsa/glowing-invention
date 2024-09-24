import React, { useState } from 'react';
import './BlogGridWithSidebar.css';

const BlogGridWithSidebar = ({ blogs }) => {
    const [scenario, setScenario] = useState('Default');

    const handleScenarioChange = (event) => {
        setScenario(event.target.value);
    };

    return ( <
        div className = "main-layout" > { /* Sidebar */ } <
        nav className = "sidebar" >
        <
        a href = "#dashboard" >
        <
        img src = "/home.png"
        alt = "Dashboard Icon"
        className = "sidebar-icon" / >
        Dashboard <
        /a> <
        a href = "#blog" >
        <
        img src = "/Plan.png"
        alt = "home Icon"
        className = "sidebar-icon" / >
        Blogs <
        /a><
        a href = "#Finance" >
        <
        img src = "/Vector (Stroke).png"
        alt = "home Icon"
        className = "sidebar-icon" / >
        Finance <
        /a><
        a href = "#Pitches" > <
        img src = "/Diagram.png"
        alt = "home Icon"
        className = "sidebar-icon" / >
        Pitche <
        /a> <
        a href = "#Setting" > <
        img src = "/settings.png"
        alt = "home Icon"
        className = "sidebar-icon" / >
        Setting <
        /a>  <
        a href = "#Logout" > <
        img src = "/Vector.png"
        alt = "home Icon"
        className = "sidebar-icon" / >
        Log out <
        /a>  < /
        nav >

        { /* Blog Section */ } <
        div className = "blog-content" >
        <
        div className = "blog-header" >
        <
        h1 > Blog < /h1> <
        div className = "buttons" >
        <
        button className = "add-button" > Add New < /button> <
        button className = "preview-button" > Preview < /button> < /
        div > <
        /div>

        <
        div className = "blog-container" > {
            blogs.map((blog, index) => ( <
                div key = { index }
                className = "blog-card" >
                <
                img src = { blog.image }
                alt = { blog.title }
                className = "blog-image" /
                >
                <
                h3 className = "blog-title" > { blog.title } < /h3> <
                p className = "blog-description" > { blog.description } < /p> <
                div className = "blog-footer" >
                <
                span className = "blog-date" > { blog.date } < /span> < /
                div > <
                /div>
            ))
        } <
        /div> < /
        div > <
        /div>
    );
};

export default BlogGridWithSidebar;