import React, { useState, useEffect } from 'react'

const Timer = ({ setClock, questionNumber }) => {
  const [timer, setTimer] = useState(30)

  useEffect(() => {
    if (timer === 0) return setClock(true)
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [timer, setClock])

  useEffect(() => {
    setTimer(30)
  }, [questionNumber])

  return <div>{timer}</div>
}

export default Timer
