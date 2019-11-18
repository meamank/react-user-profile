import React from 'react'

export default props => 
  props.images.map((image, i) =>
    <div key={i} className='fadein'>
      <img
        className="upload-img" 
        src={image.secure_url} 
        alt='' 
        onError={() => props.onError(image.public_id)}
      />
    </div>
  )