import React, { Component } from 'react'
import loading from './loading.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center' >
        <img src={loading} alt="loading"  width='50px'/>
      </div>
    )
  }
}

export default Spinner
