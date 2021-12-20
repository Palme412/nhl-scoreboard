import { render } from '@testing-library/react';
import React, { Component } from 'react';

const cardsData = [
    {
        id: 1,
        image: 'https://source.unsplash.com/h-ACUrBngrw/1280x720',
        avatar: 'https://avatars.dicebear.com/api/initials/john%20doe.svg',
        user: {
            name: 'Okinami',
            handle: 'twitterid',
            title: 'Lead Developer'
        },
        content: 'The Beast stumbled in the dark for it could no longer see the path. It started to fracture and weaken, trying to reshape itself into the form of metal. Even the witches would no longer lay eyes upon it, for it had become hideous and twisted.'
    },
    {
        id: 1,
        image: 'https://source.unsplash.com/h-ACUrBngrw/1280x720',
        avatar: 'https://avatars.dicebear.com/api/initials/john%20doe.svg',
        user: {
            name: 'Okinami',
            handle: 'twitterid',
            title: 'Lead Developer'
        },
        content: 'The Beast stumbled in the dark for it could no longer see the path. It started to fracture and weaken, trying to reshape itself into the form of metal. Even the witches would no longer lay eyes upon it, for it had become hideous and twisted.'
    },
    {
        id: 1,
        image: 'https://source.unsplash.com/h-ACUrBngrw/1280x720',
        avatar: 'https://avatars.dicebear.com/api/initials/john%20doe.svg',
        user: {
            name: 'Okinami',
            handle: 'twitterid',
            title: 'Lead Developer'
        },
        content: 'The Beast stumbled in the dark for it could no longer see the path. It started to fracture and weaken, trying to reshape itself into the form of metal. Even the witches would no longer lay eyes upon it, for it had become hideous and twisted.'
    },
    {
        id: 1,
        image: 'https://source.unsplash.com/h-ACUrBngrw/1280x720',
        avatar: 'https://avatars.dicebear.com/api/initials/john%20doe.svg',
        user: {
            name: 'Okinami',
            handle: 'twitterid',
            title: 'Lead Developer'
        },
        content: 'The Beast stumbled in the dark for it could no longer see the path. It started to fracture and weaken, trying to reshape itself into the form of metal. Even the witches would no longer lay eyes upon it, for it had become hideous and twisted.'
    },
    {
        id: 1,
        image: 'https://source.unsplash.com/h-ACUrBngrw/1280x720',
        avatar: 'https://avatars.dicebear.com/api/initials/john%20doe.svg',
        user: {
            name: 'Okinami',
            handle: 'twitterid',
            title: 'Lead Developer'
        },
        content: 'The Beast stumbled in the dark for it could no longer see the path. It started to fracture and weaken, trying to reshape itself into the form of metal. Even the witches would no longer lay eyes upon it, for it had become hideous and twisted.'
    },
    {
        id: 1,
        image: 'https://source.unsplash.com/h-ACUrBngrw/1280x720',
        avatar: 'https://avatars.dicebear.com/api/initials/john%20doe.svg',
        user: {
            name: 'Okinami',
            handle: 'twitterid',
            title: 'Lead Developer'
        },
        content: 'The Beast stumbled in the dark for it could no longer see the path. It started to fracture and weaken, trying to reshape itself into the form of metal. Even the witches would no longer lay eyes upon it, for it had become hideous and twisted.'
    },
    {
        id: 1,
        image: 'https://source.unsplash.com/h-ACUrBngrw/1280x720',
        avatar: 'https://avatars.dicebear.com/api/initials/john%20doe.svg',
        user: {
            name: 'Okinami',
            handle: 'twitterid',
            title: 'Lead Developer'
        },
        content: 'The Beast stumbled in the dark for it could no longer see the path. It started to fracture and weaken, trying to reshape itself into the form of metal. Even the witches would no longer lay eyes upon it, for it had become hideous and twisted.'
    },
]



class CardsDataTwo extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div>{cardsData}
                <h1>Hello</h1></div>
        );
    }
}

export default CardsDataTwo;