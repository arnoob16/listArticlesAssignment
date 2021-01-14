import React from 'react'

const Card = ({url, date, title, topic, imageUrl, byline, altText}) => {
    return (
        <div className="card">
            <img src={imageUrl} alt={altText}/>
            <div className="overlay">
                <a href={url}><i class="fas fa-external-link-alt"></i>Check News</a>
            </div>
            <div className="cardContent">
                <strong>{title}</strong>
                <span className="byline">{byline}</span>
                <span className="date">{date}</span>
                <span className="topic">{topic}</span>
            </div>
        </div>
    );
}

export default Card;