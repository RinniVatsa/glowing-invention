import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
    return ( <
        nav className = "sidebar" >
        <
        a href = "#dashboard" > Dashboard < /a> <
        a href = "#blogs" > Blogs < /a> <
        a href = "#finances" > Finances < /a> <
        a href = "#pitches" > Pitches < /a> <
        a href = "#settings" > Settings < /a> <
        a href = "#logout" > Log Out < /a> < /
        nav >


    );
};

export default Sidebar;