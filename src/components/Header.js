import React from 'react';
import './Header.css';

const Header = ({ username, userImage }) => {
    return ( <
        header className = "header" >
        <
        div className = "logo" >


        <
        img src = "/logo.png"
        alt = "Jadwa Logo"
        className = "logo-image" / >
        <
        /
        div > < div className = "dropdown-container" >
        <
        select className = "dropdown" >
        <
        option > Afterglow < /option>  <
        option > Default < /option> < /
        select > <
        span className = "scenario" >
        Scenario < span className = "scenario-default" > Default < /span> < /
        span > <
        /div> < img className = 'profile-image'
        alt = 'icon'
        src = "/folder.png" /
        >
        <
        div className = "search-bar" >
        <
        input type = "text"
        placeholder = "Search..." / >
        <
        /div> <
        div className = "user-info" >
        <
        span > { username } < /span> <
        img src = { userImage }
        alt = "User"
        className = "user-image" / >

        <
        /
        div > <
        /header>



    );



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
};





export default Header;