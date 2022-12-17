import React, { useRef } from 'react'

const Start = ({ setUserName }) => {
  const inputRef = useRef()

  const handleClick = () => {
    // inputRef.current.value &&
    setUserName(inputRef.current.value)
  }
  return (
    <div className='start'>
      <input type='text' placeholder='enter your name' ref={inputRef} />
      <button type='submit' onClick={handleClick}>
        Start
      </button>
    </div>
  )
}

export default Start
