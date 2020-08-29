import "./Feed.css"

import React from 'react'
import StoryReel from './StoryReel'
import MessegeSender from "./MessegeSender"
import Post from "./Post"

function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessegeSender />
            <Post 
                profilePic="https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/40100586_1017185758483703_8515243719153156096_o.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=N6cz86OslgAAX_svdRG&_nc_ht=scontent-sea1-1.xx&oh=510b6bcb8710f4773e47f4e960c36fc3&oe=5F71373A"
                message= "Wow this works"
                timestamp="{This is a timestamp}"
                username="Saad Hassan"
                image="https://i.pinimg.com/originals/ea/0a/87/ea0a876eccc439c4f0909d00dca544c4.jpg"/>
            <Post 
                profilePic="https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/40100586_1017185758483703_8515243719153156096_o.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=N6cz86OslgAAX_svdRG&_nc_ht=scontent-sea1-1.xx&oh=510b6bcb8710f4773e47f4e960c36fc3&oe=5F71373A"
                message="This is working"
            />
            
            <Post />

        </div>
    )
}

export default Feed
