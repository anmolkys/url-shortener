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
        setShort("https://anmolkys.onrender.com/i/"+response.data.shortURL);
      });
    }
  }



  return (
    <div className="App">
      <h3 id="logo">URL Shortener</h3>
      <form onSubmit={(e)=>{e.preventDefault(); createPost()}}>
      <input type='url'id='url' onChange={(e)=>{setLink(e.target.value)}} placeholder='https://www.url.com'></input>
      <input type='submit' id='button'></input>
      </form>
      <h2>Shortened URL is :</h2>
      <h2>{short}</h2>
    </div>
  );
}

export default App;
