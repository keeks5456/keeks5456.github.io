import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import toText from "../Utilities/toText"

function Blogs({blogs, setBlogs, profile, setProfile}) {

 

    const mediumURL =
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@agreen17";

    useEffect(() =>{
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
            setProfile(prev => ({...prev, profilePic: avatar, profileUrl: url}))
            setBlogs(blog =>({item: post, isLoading: false}))
        }) //end of fetch
        .catch(err => setBlogs({error: err.message}))
    }, [fetch])// end of useEffect

    function allBlogs(){
        if(blogs.item){
            console.log(blogs.item)
            return blogs.item.map((post, index)=> (
                <div className="card" key={index}>
                    <div className="card-image" style={{backgroundImage: `url(${post.thumbnail})`}}></div>
                </div>
            ))
        }
    }

    
    return (
        <div>
            {allBlogs()}
        </div>
    );
}

export default Blogs;