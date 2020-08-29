import React from 'react'
import "./Sidebar.css"
import SidebarRow from "./SidebarRow"
import LocalHospitalIcon from "@material-ui/icons/LocalHospital"
import EmojiFlagIcon from "@material-ui/icons/EmojiFlags"
import PeopleIcon from "@material-ui/icons/People"
import ChatIcon from "@material-ui/icons/Chat"
import StoreFrontIcon from "@material-ui/icons/Storefront"
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary"
import { ExpandMoreOutlined } from "@material-ui/icons"

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow src= "https://avatars3.githubusercontent.com/u/39425395?s=460&u=0415fa20d956b8a43030dd8583cb9b5913dea627&v=4" title="Saad Hassan"/> 
            <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Information Center"/>
            <SidebarRow Icon={EmojiFlagIcon} title= "Pages"/>
            <SidebarRow Icon={PeopleIcon} title= "Friends"/>
            <SidebarRow Icon={ChatIcon} title= "Messenger"/>
            <SidebarRow Icon={StoreFrontIcon} title= "Marketplace"/>
            <SidebarRow Icon={VideoLibraryIcon} title="Videos"/>
            <SidebarRow Icon={ExpandMoreOutlined} title= "Marketplace"/>
                        
        </div>
    )
}

export default Sidebar
