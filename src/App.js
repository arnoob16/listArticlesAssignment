import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Card from './Card';

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
          title = {result.title}
          byline = {result.byline}
        />
      })}
    </div>
  )
}

export default App;
