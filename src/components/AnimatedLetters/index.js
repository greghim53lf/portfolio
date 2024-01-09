import { useEffect, useState } from 'react';
import './index.scss';

export default function AnimatedLetters({ word, delay, timeout }) {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, timeout||2000)

    return () => { 
      clearTimeout(timer)
    }
  }, [timeout])

  const wordArr = word.split("")

  return (
    <span>
      {wordArr.map((char, i) => {
        return <span key={char + i} className={`${letterClass} _${delay + i}`}>{char}</span>
      })}
    </span>
  )
}