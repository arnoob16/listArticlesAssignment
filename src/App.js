import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Card from './Card';
import './App.css';

function App() {
  const url = "https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=Bn2PozsOaZopQDIwCOGNc3KVmHBCXiMc"
  
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
      {results.map((result, index) => {
        if(result.multimedia === null || result.byline === ""){
          return null;
        }
        return <Card
          key = {index}
          url = {result.url}
          date = {result.published_date.substring(0, result.published_date.indexOf("T"))}
          title = {result.title}
          byline = {result.byline}
          imageUrl = {result.multimedia[2].url}
          source = {result.source}
          topic = {result.section}
        />
      })}
    </div>
  )
}

export default App;
