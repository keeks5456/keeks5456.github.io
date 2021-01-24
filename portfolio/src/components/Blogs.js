import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';


function Blogs() {
    const mediumURL =
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@agreen17";

    useEffect(() =>{
        fetch(mediumURL)
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            //Filter the array
            const response = data.items
            const post = response.filter(item => item.categories.length > 0)

            function toText(node){ //move this to utilities later and import from there
                console.log(node)
                let tag = document.createElement('div')
                tag.innerHTML = node
                node = tag.innerText
                return node
                
            } //end of toText
        })

    }, [])// end of useEffect


    return (
        <div>
            <h1>Hello from blogs</h1>
        </div>
    );
}

export default Blogs;