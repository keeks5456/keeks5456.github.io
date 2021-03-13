import React, { useState, useEffect } from 'react';

function QuotesGenerator() {

    const [quote, setQuote] = useState('')
    const [author, setAuthor] = useState('')

    useEffect(() =>{
        getQuotes()
    }, [])


    
    const getQuotes = () =>{
        const inspo = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json` 
        fetch(inspo)
        .then(res => res.json())
        .then(data => {
            let dataQuotes = data.quotes
            //gives us our array of quotes
            let randomNum = Math.floor(Math.random() * dataQuotes.length) 
            //randomization: this is iterating a random number from 0 to length of array, this gives us a random number 
            let randomQuote = data.quotes[randomNum] 
            //accessing a random quote corresponding with that random number

            setQuote(randomQuote.quote) //now set the new quote 
            setAuthor(randomQuote.author) //set the new author
        })
    }
    
    const handleClick = () =>{
        getQuotes();
    }
    //whenever we click the button, it invokes our getQuotes function

    //generate random quote

    return (
        <div id="quotes-box">
            <div id="text">{quote}</div>
            <div id="author">{author}</div>
            <button onClick={handleClick} id="new-quote">New quote</button>
        </div>
    );
}

export default QuotesGenerator;