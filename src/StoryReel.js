import "./StoryReel.css"

import React from 'react'
import Story from "./Story"

function StoryReel() {
    return (
        <div className="storyReel">
            <Story 
                image="https://i.pinimg.com/736x/62/2f/9d/622f9d0cfaf3bdd69fba4046103363e2.jpg"
                profileSrc="https://scontent-sea1-1.xx.fbcdn.net/v/t31.0-8/28423982_10211366795026145_5255427655667958394_o.jpg?_nc_cat=104&_nc_sid=09cbfe&_nc_ohc=MBm6GBf0ABwAX9J7GIp&_nc_ht=scontent-sea1-1.xx&oh=39717e6953218f60d5106f18a5b41eba&oe=5F6DFBC5"
                title="Katy Valencia"
            />
            <Story 
                image="https://i.pinimg.com/originals/24/9a/bc/249abcf9ed3423ff5a4b9d7c7397f310.jpg"
                profileSrc="https://scontent-sea1-1.xx.fbcdn.net/v/t31.0-8/15003408_336396776736512_1902028458050878824_o.jpg?_nc_cat=102&_nc_sid=09cbfe&_nc_ohc=nqirhglcaukAX_pfssY&_nc_ht=scontent-sea1-1.xx&oh=4a2b72f10787dbf34aeba08d23d52470&oe=5F6F678B"
                title="Audrey Budlong"
            />
            <Story 
                image="https://www.gizbot.com/img/600x40/img/2016/11/whatsapp-error-lead-image-08-1478607387.jpg"
                profileSrc="https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/78491113_2814826788551284_18006233776652288_n.jpg?_nc_cat=110&_nc_sid=09cbfe&_nc_ohc=8fQjFkMU60YAX-ubsLS&_nc_ht=scontent-sea1-1.xx&oh=c5f0c666b292976fb29a385b94cc7dc9&oe=5F6E0E65"
                title="Raymond park"
            />
            <Story 
                image="https://i.pinimg.com/736x/50/df/34/50df34b9e93f30269853b96b09c37e3b.jpg"
                profileSrc="https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/116563472_767739163972003_3755228539869551616_n.jpg?_nc_cat=108&_nc_sid=09cbfe&_nc_ohc=sZCpUVoSI4EAX-sSVph&_nc_ht=scontent-sea1-1.xx&oh=b13aba3b5a6db78aaf5ad858f59a79f4&oe=5F6DF072"
                title="Sylvia Wang"
            />
            <Story
                image="https://wallpapercave.com/wp/wp2550666.jpg"
                profileSrc="https://d17zbv0kd7tyek.cloudfront.net/wp-content/uploads/2015/06/leonardo-dicaprio-fb.jpg"
                title="Leonardo Dicaprio"
            />
        </div>
    )
}

export default StoryReel
