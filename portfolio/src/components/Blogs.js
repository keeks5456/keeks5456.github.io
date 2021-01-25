import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import toText from "../Utilities/toText"

function Blogs() {

    // {blogs, setBlogs, profile, setProfile} 

    const [profile, setProfile] = useState({
        name: "Akiko Green",
        profilePic: "",
        ProfileUrl: ""
    })

    const [blogs, setBlogs] = useState({
        item: [],
        isLoading: true,
        error: null
    })

    const mediumURL =
        "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@agreen17";

    useEffect(() => {
        fetch(mediumURL)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                // profile info
                const avatar = data.feed.image
                const profileLink = data.feed.link
                const profileTitle = data.feed.title
                const url = data.feed.url

                //Filter the array
                const response = data.items
                const post = response.filter(item => item.categories.length > 0)
                console.log(post, 'post')

                //setState our data
                setProfile(prev => ({ ...prev, profilePic: avatar, profileUrl: url }))
                setBlogs(blog => ({ item: post, isLoading: false }))
            }) //end of fetch
            .catch(err => setBlogs({ error: err.message }))
    }, [fetch])// end of useEffect

    function truncateText(text, start, len) {
        return text.length > len ? `${text.slice(start, len)}...` : text;
    }

    function allBlogs() {
        if (blogs.item) {
            return blogs.item.map((post, index) => (
                <div className='grid card ab border shadow' key={index}>
                <div className='card-image tb' style={{backgroundImage: `url(${post.thumbnail})`}}>
                    <div className='authorImg'>
                        <a href={profile.profileUrl} rel='noopener noreferrer' target='_blank' style={{backgroundImage: `url(${profile.profileImage})`}}></a>
                    </div>
                </div>
                <div className='card-body'>
                    <h5 className='card-title'>
                    <a href={post.link} className='postTitle' rel="noreferrer" target='_blank'>{truncateText(post.title, 0, 80)}</a></h5>
                    <p className='cardText'>{truncateText(toText(post.description), 0, 265)}</p>
                </div>
            </div>

            ))
        }
    }


    return (
        <div className="container">
            <img className="blog-image">{blogs.profilePic}</img>
            <div className="blogs-container"></div>
            {blogs.isLoading ? 'Loading' : allBlogs()}
        </div>
    );
}

export default Blogs;