import React from 'react';
// import { Link } from 'react-router-dom';
import toText from "../Utilities/toText"

function Blogs({ blogs, profile }) {

 console.log(blogs, profile)
    function shortText(text, start, len) {
        return text.length > len ? `${text.slice(start, len)}...` : text;
    }

    function allBlogs() {
        if (blogs.item) {
            console.log(blogs.item)
            return blogs.item.map((post, index) => (
                <div className='whole-card' key={index} >
                    <div className='card-image' style={{width: '10vw'}}>
                        <img src={post.thumbnail} className="blog__topImg" alt="thumbnail"></img>
                        <div className='authorImg'>
                            <a href={profile.profileUrl} rel='noopener noreferrer' target='_blank' aria-hidden="true"></a>
                        </div>
                    </div>
                    <div className='card-body'>
                        <h5 className='card-title'>
                            <a href={post.link} className='postTitle' rel="noreferrer" target='_blank'>{shortText(post.title, 0, 80)}</a></h5>
                        <p className='cardText'>{shortText(toText(post.description), 0, 300)}</p>
                    </div>
                </div>

            ))
        }
    }


    return (
        <div>
            <div className="blog-container">
                <div className="blogs-container"></div>
                {blogs.isLoading ? 'Loading...' : allBlogs()}
            </div>
        </div>
    );
}

export default Blogs;