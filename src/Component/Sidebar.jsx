import React from "react";
import Navbar from '../Component/Navbar'
import Search from '../Component/Search'
import Chats from '../Component/Chats';
const Sidebar =()=>{
    return (
        <div className="sidebar">
            <Navbar/>
            <Search/>
            <Chats/>
        </div>
    );
};
export default Sidebar