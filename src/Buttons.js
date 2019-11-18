import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'

export default props => 
  <div className='buttons fadein'>
    
    <div className='button'>
      <label htmlFor='single'>
        <FontAwesomeIcon icon={faImage} color='#00ffff' size='10x' />
      </label>
      <input type='file' id='single' onChange={props.onChange} /> 
    </div>

  </div>