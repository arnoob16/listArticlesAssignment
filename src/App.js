import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Card from './Card';
import './App.css';

function App() {
  const url = "https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=v4tV9pjJksBAGKxc0J8iGTj3Tdlo4MtU"
  
  const [results, setResults] = useState([])
  
  useEffect(() => {
      axios.get(url)
      .then((res) => res.data)
      .then(data => {
        setResults(data.results);
      })
      .catch(err => console.log("Error", err))
  }, [])

  return (
    <div className="cardContainer">
      {results.map((result) => {
        return <Card
          key = {result.id}
          url = {result.url}
          date = {result.published_date}
          title = {result.title}
          byline = {result.byline}
          imageUrl = {result.media[0]["media-metadata"][2].url}
          altText = {result.media[0].caption}
          topic = {result.section}
        />
      })}
    </div>
  )
}

export default App;
