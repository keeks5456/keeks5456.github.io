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
            .then(info => {
                console.log(info)
                // profile info
                const avatar = info.feed.image
                const link = info.feed.link
                const title = info.feed.title
                const url = info.feed.url

                //Filter the array
                const blogs = info.items
                const post = blogs.filter(item => item.categories.length > 0)

                //setState our data
                setProfile(prev => ({ ...prev, profilePic: avatar, profileUrl: url }))
                setBlogs(blog => ({ item: post, isLoading: false }))
            }) //end of fetch
            .catch(err => setBlogs({ error: err.message }))
    }, [fetch])// end of useEffect

    function shortText(text, start, len) {
        return text.length > len ? `${text.slice(start, len)}...` : text;
    }

    function allBlogs() {
        if (blogs.item) {
            console.log(blogs.item)
            return blogs.item.map((post, index) => (
                <div className='whole-card' key={index}>
                <div className='card-image'>
                <img src={post.thumbnail} className="blog__topImg"></img>
                    <div className='authorImg'>
                        <a href={profile.profileUrl} rel='noopener noreferrer' target='_blank'></a>
                    </div>
                </div>
                <div className='card-body'>
                    <h5 className='card-title'>
                    <a href={post.link} className='postTitle' rel="noreferrer" target='_blank'>{shortText(post.title, 0, 80)}</a></h5>
                    <p className='cardText'>{shortText(toText(post.description), 0, 850)}</p>
                </div>
            </div>

            ))
        }
    }


    return (
        <div className="container">
            <img className="blog-image" src={profile.profilePic} />
            <div className="blogs-container"></div>
            {blogs.isLoading ? 'Loading...' : allBlogs()}
        </div>
    );
}

export default Blogs;