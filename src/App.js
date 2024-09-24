import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import BlogGridWithSidebar from './components/BlogGridWithSidebar';
import blogs from './assets/blogs.json';
import "./App.css"
const App = () => {

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