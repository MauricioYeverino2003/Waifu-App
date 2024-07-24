import React, { useEffect, useState } from 'react';
import './app.css';

const Display = ({ gallery, setGallery, setDisplay }) => {

  const [pointer, setPointer] = useState(0);
  
  useEffect(()=>{

  },[])

  const handleNext = ()=>{
    if(pointer < gallery.size - 1) setPointer(prevState => prevState + 1);
  }

  const handlePrevious = ()=>{
    if(pointer > 0) setPointer(prevState => prevState - 1);
  }

  const handleBack = ()=>{
    setDisplay(false);
  }

  const handleDelete = ()=>{

  }

  return (
    <div className='container'>
      <p>{pointer + 1} of {gallery.size}</p>
      <div className='image-container'>
        <img src={gallery.urls.at(pointer)} alt='img' />
      </div>
      <div className='button-container'>
        <button onClick={handlePrevious}>
          Previous
        </button>
        <button onClick={handleBack}>
          Back
        </button>
        <button onClick={handleNext}>
          Next
        </button>
      </div>
      <button onClick={null}>
        Delete
      </button>
    </div>
  )
}

export default Display