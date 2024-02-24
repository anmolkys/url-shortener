import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [link,setLink] = useState("")
  const [short,setShort] = useState("")
  const baseURL = "https://link-shortener-production-13e4.up.railway.app/i/"

  async function createPost() {
    if(!link){
      return null
    }
    else{
      if(!short){
        document.getElementById("phone").innerHTML="Loading...";

      }
      await axios.post(baseURL, {longURL: link,})
      .then((response) => {
        setShort("https://www.molify.xyz/i/"+response.data.shortURL);
      });
    }
  }



  return (
    <div className="App">
      <div className='card level-3'>
      <h3 id="logo">URL Shortener</h3>
      <form onSubmit={(e)=>{e.preventDefault(); createPost()}}>
      <input type='url'id='url' onChange={(e)=>{setLink(e.target.value)}} placeholder='https://www.url.com'></input>
      <input type='submit' id='button' value="↩"></input>
      </form>
      </div>
      <a href={short}><h2 id='phone'>{short}</h2></a>
    </div>
  );
}

export default App;
