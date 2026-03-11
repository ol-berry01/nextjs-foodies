'use client'

import { useRef } from 'react'

import classes from './image-picker.module.css'

const ImagePicker = ( { label, name } ) => {
  const [ pickedImage, setPickedImage ] = useState()

  const imageInput = useRef()

  const handlePickClick = () => {
    imageInput.current.click()
  }

  const handleImageChange = ( event ) => {
    const file = event.target.files[ 0 ]

    if ( !file ) {
      setPickedImage( null )
      return
    }
  }

  return (
    <div className={ classes.picker }>
      <label htmlFor={ name }>{ label }</label>
      <div className={ classes.controls }>
        <input 
          className={ classes.input }
          type="file" 
          id={ name } 
          name={ name } 
          accept="image/png, image/jpeg" 
          ref={ imageInput}
          onChange={ handleImageChange }
        />
        <button 
          className={ classes.button } 
          type='button'
          onClick={ handlePickClick }
        >
          Pick an image
        </button>
      </div>
    </div>
  )
}

export default ImagePicker