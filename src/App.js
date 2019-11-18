import React, { Component } from 'react'
import Notifications, { notify } from 'react-notify-toast'
import Spinner from './Spinner'
import Images from './Images'
import Buttons from './Buttons'

import { API_URL } from './config'
import './App.css'

const alertColor = { 
  background: '#ffcc99', 
  text: '#99003d' 
}

export default class App extends Component {
  
  state = {
    loading: true,
    uploading: false,
    images: []
  }

  componentDidMount() {
    fetch(`${API_URL}/image-loader`)
      .then(res => {
        if (res.ok) {
          return this.setState({ loading: false })  
        }
        const msg = 'error Loading Heroku' 
        this.toast(msg, 'custom', 2000, alertColor)
      })
  }

  toast = notify.createShowQueue()

  onChange = e => {
    const files = Array.from(e.target.files)


    const formData = new FormData()
    const types = ['image/png', 'image/jpeg', 'image/gif']

    files.forEach((file, i) => {

    formData.append(i, file)
    })

    this.setState({ uploading: true })

    fetch(`${API_URL}/image-upload`, {
      method: 'POST',
      body: formData
    })
    .then(res => {
      if (!res.ok) {
        throw res
      }
      return res.json()
    })
    .then(images => {
      this.setState({
        uploading: false, 
        images
      })
    })
  }
  render() {
    const { loading, uploading, images } = this.state
    
    const content = () => {
      switch(true) {
        case loading:
          return <image-loader />
        case uploading:
          return <Spinner />
        case images.length > 0:
          return <Images 
                  images={images}
                 />
        default:
          return <Buttons onChange={this.onChange} />
      }
    }
    return (
      <div className='card'>
        {content()}
       <Notifications />
        
        <h1>Aman Kumar</h1>
        <p class="title">Frontend Developer</p>
        <p>Dr. A.P.J. Abdul Kalaam Technical University</p>
        <a href="#"><i class="fa fa-linkedin"></i></a>
       </div>
    )
  }
}
