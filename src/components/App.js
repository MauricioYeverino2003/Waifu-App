import React, { useEffect, useState } from 'react';
import Display from './Display';
import './app.css'

const App = () => {
  const [url, setUrl] = useState(null)
  const [sfw, setSfw] = useState(true);
  const [gallery, setGallery] = useState({
    urls: ['https://i.waifu.pics/i~RQhRD.png',
      'https://i.waifu.pics/jDrf_Ch.jpg',
      'https://i.waifu.pics/paoaXKS.com_0173.jpg'],
    size: 3
  });
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    fetchImage();
  }, [])

  useEffect(()=>{console.log(gallery)},[gallery])

  const handleSwitch = () => {
    if (sfw) {
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
      if (!response.ok) {
        throw new Error(`Response Status: ${response.status}`);
      }
      setUrl(image.url);
    } catch (error) {
      console.error(error.message);
    }
  }

  const handleSave = (prevState) => {
    const oldUrls =  gallery.urls;
    const newUrls = [...oldUrls, url]

    setGallery((prevState) => ({
      urls: newUrls,
      size: prevState.size + 1
    }));
  }
  
  const handleDisplay = () => {
    if(!display){
      setDisplay(true);
    }
    else{
      setDisplay(false);
    }
  }

  if(display) return <Display 
  gallery={gallery} 
  setGallery={setGallery}
  setDisplay={setDisplay}
  />


  return (
    <div className='container'>
      <div className='image-container'>
        <img src={url} alt='img' />
      </div>
      <div className='button-container'>
      <button onClick={fetchImage}>
        Generate
      </button>
      <button onClick={handleSwitch}>
        {sfw ? 'SFW' : 'NSFW'}
      </button>
      <button onClick={handleSave}>
        Save
      </button>
      </div>
      <button onClick={handleDisplay}>
        Display
      </button>
    </div>
  )
}

export default App;