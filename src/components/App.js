import React, { useEffect, useState } from 'react';
import './app.css'

const App = () => {
  const [ url, setUrl] = useState(null)
  const [ sfw, setSfw] = useState(true);

  useEffect(() => {
    fetchImage();
  }, [])

  const handleSwitch = () => {
    if (sfw){
      setSfw(false);
    } else {
      setSfw(true);
    }
  }

  const fetchImage = async () => {
    //const url = `https://api.waifu.pics/${type}/${category}`;
    const type = sfw ? 'sfw' : 'nsfw';
    const url = `https://api.waifu.pics/${type}/waifu`;
    try {
      const response = await fetch(url);
      const image = await response.json();
      if(!response.ok){
        throw new Error(`Response Status: ${response.status}`);
      }
      setUrl(image.url);
    } catch (error) {
      console.error(error.message);
    }
  }


  return(
    <div className='container'>
      <div className='image-container'>
        <img src={url} alt='img'/>
      </div>
      <button onClick={fetchImage}>
        Generate
      </button>
      <button onClick={handleSwitch}>
        { sfw ? 'sfw' : 'nsfw'}
      </button>
    </div>
  )
}

export default App;