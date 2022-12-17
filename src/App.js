import './App.css'
import React, { useState, useEffect } from 'react'
import Trivia from './component/Trivia'
import Timer from './component/Timer'
import Start from './component/Start'

function App() {
  const [questionNumber, setQuestionNumber] = useState(1)
  const [clock, setClock] = useState(false)
  const [earned, setEarned] = useState('$ 0')
  const [userName, setUserName] = useState(null)
  const data = [
    {
      id: 1,
      question: 'Olumo is found in which state in Nigeria ?',
      answers: [
        {
          text: 'Gigawa',
          correct: false,
        },
        {
          text: 'Lagos',
          correct: false,
        },
        {
          text: 'Ogun',
          correct: true,
        },
        {
          text: 'Osun',
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: 'How many continents make the world?',
      answers: [
        {
          text: '8',
          correct: false,
        },
        {
          text: '7',
          correct: true,
        },
        {
          text: '5',
          correct: false,
        },
        {
          text: '10',
          correct: false,
        },
      ],
    },
    {
      id: 1,
      question: 'The capital city of United States of America is?',
      answers: [
        {
          text: 'Washington DC',
          correct: true,
        },
        {
          text: 'Newyork DC',
          correct: false,
        },
        {
          text: 'Florida DC',
          correct: false,
        },
        {
          text: 'Texas DC',
          correct: false,
        },
      ],
    },
  ]

  const moneyPyramid = [
    { id: 1, amount: '$ 100' },
    { id: 2, amount: '$ 200' },
    { id: 3, amount: '$ 300' },
    { id: 4, amount: '$ 500' },
    { id: 5, amount: '$ 1000' },
    { id: 6, amount: '$ 2000' },
    { id: 7, amount: '$ 4000' },
    { id: 8, amount: '$ 8000' },
    { id: 9, amount: '$ 16000' },
    { id: 10, amount: '$ 32000' },
    { id: 11, amount: '$ 64000' },
    { id: 12, amount: '$ 125000' },
    { id: 13, amount: '$ 250000' },
    { id: 14, amount: '$ 500000' },
    { id: 15, amount: '$ 1000000' },
  ].reverse()

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount)
  })
  return (
    <div className='app'>
      {userName ? (
        <>
          <div className='main'>
            {clock ? (
              <h1 style={{ textAlign: 'center' }}> You earn: {earned}</h1>
            ) : (
              <>
                <div className='topContainer'>
                  <div className='timer'>
                    <Timer
                      setClock={setClock}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className='buttomContainer'>
                  <Trivia
                    data={data}
                    setClock={setClock}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                  />
                </div>
              </>
            )}
          </div>

          <div className='pyramid'>
            {moneyPyramid.map(({ id, amount }, i) => (
              <li
                className={
                  questionNumber === id ? 'moneyList active' : 'moneyList'
                }
                key={i}
              >
                <span className='moneyListItemNumber'>{id}</span>
                <span className='moneyListItemAmount'>{amount}</span>
              </li>
            ))}
          </div>
        </>
      ) : (
        <Start setUserName={setUserName} />
      )}
    </div>
  )
}

export default App
