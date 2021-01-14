import React from 'react'

const Card = ({url, date, title, topic, imageUrl, byline, altText}) => {
    return (
        <div className="card">
            <img src={imageUrl} alt={altText}/>
            <div className="overlay">
                <a href={url}><i className="fas fa-external-link-alt"></i>Check News</a>
            </div>
            <div className="cardContent">
                <strong>{title}</strong>
                <span className="mutedText">{byline}</span>
                <div className="cardFooter">
                    <span className="mutedText">{topic}</span>
                    <span className="mutedText">{date}</span>
                </div>
            </div>
        </div>
    );
}

export default Card;