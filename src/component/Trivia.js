import React, { useState, useEffect } from 'react'
import useSound from 'use-sound'
import play from '../assest/play.mp3'
import wrong from '../assest/wrong.mp3'
import correct from '../assest/correct.mp3'

const Trivia = ({ data, questionNumber, setQuestionNumber, setClock }) => {
 const [question, setQuestion] = useState(null)
 const [selectedAnswer, setSelectedAnswer] = useState(null)
 const [className, setClassName] = useState('answer')
 const [letPlay] = useSound(play)
 const [correctAnswer] = useSound(correct)
 const [wrongAnswer] = useSound(wrong)

 useEffect(() => {
   letPlay()
 }, [letPlay])

 useEffect(() => {
   setQuestion(data[questionNumber - 1])
 }, [data, questionNumber])

 const delay = (duration, callback) => {
   setTimeout(() => {
     callback()
   }, duration)
 }

  const handleSubmit = (text, correct) => {
    setSelectedAnswer(text)
    setClassName('answer active')
    delay(3000, () => setClassName(correct ? 'answer correct' : 'answer wrong'))

    delay(3000, () => {
      if (correct) {
        correctAnswer()
        delay(1000, () => {
          setQuestionNumber((next) => next + 1)
          setSelectedAnswer(null)
        })
      } else {
        wrongAnswer()
        delay(1000, () => {
          setClock(true)
        })
      }
    })
  }

  return (
    <div className='trivia'>
      <div className='question'>
        <p>{question?.question}</p>
      </div>
      <div className='answers'>
        {question?.answers.map(({ text, correct }, i) => (
          <div
            className={selectedAnswer === text ? className : 'answer'}
            onClick={() => handleSubmit(text, correct)}
            key={i}
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Trivia
