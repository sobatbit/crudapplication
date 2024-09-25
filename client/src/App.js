import React, { useState } from 'react'
import './App.css'
import Axios from 'axios'

function App() {

  const [movieName, setMovieName] = useState([])
  const [review, setReview] = useState([])

  const submitReview = () => {
    Axios.post('http://localhost:3001/api/insert', {
      movieName: movieName, 
      movieReview: review,
    }).then(()=> {
      alert('Successful Insert!')
    })
  }

  return (
    <div className="App">
     <h1>CRUD APPLICATION</h1>
      <div className='form'>
        <label>Movie Name :</label>
          <input type='text' name='movieName' onChange={(e) => {
            setMovieName(e.target.value)
          }}/>
        <label>Review</label>
          <input type='text' name='movieReview' onChange={(e) => {
            setReview(e.target.value)
          }}/>

          <button onClick={submitReview}>Submit</button>
      </div>  
    </div>
  );
}

export default App;
