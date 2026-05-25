import React from 'react'
import Child from './Child'

const Parent = ({currentMovie}) => {
  return (
    <div>
        <Child currentMovie = {currentMovie}/>  
    </div>
  )
}

export default Parent
