import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [link,setLink] = useState("")
  const [short,setShort] = useState("")
  const baseURL = "https://anmolkys.onrender.com/i"

  async function createPost() {
    if(!link){
      return null
    }
    else{
      await axios.post(baseURL, {longURL: link,})
      .then((response) => {
        setShort("anmolkys.in/i/"+response.data.shortURL);
      });
    }
  }



  return (
    <div className="App">
      <h3 id="logo">URL Shortener</h3>
      <input type='url'id='url' onChange={(e)=>{setLink(e.target.value)}} placeholder='Enter URL'></input>
      <button onClick={createPost}>Shorten</button>
      <h2>Shortened URL is :</h2>
      <h2>{short}</h2>
    </div>
  );
}

export default App;
