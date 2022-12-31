import { useEffect, useState } from 'react'
import './App.css'

function App() {
  // const Dday = new Date('2023-01-01 00:00:00')
  const Dday = new Date('January 1, 2023, 0:00:00')
  let today = new Date()
  const [gap, setGap] = useState(0)
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  
  
  const ReFresh = () => {
    setGap(Dday.getTime() - today.getTime())
    setDays(Math.floor(gap / (1000 * 60 * 60 *24)))
    setHours(Math.floor(gap % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)))
    setMinutes(Math.floor(gap % (1000 * 60 * 60) / (1000 * 60)))
    setSeconds(Math.floor(gap % (1000 * 60) / 1000))
    
    // console.log(`Days: ${days}, Hours: ${hours}, Minutes: ${minutes}, Seconds: ${seconds}`)
  }

  setInterval(() => { ReFresh() }, 1000)

  return (
    <div className="App">
      <div className='contain'>
        <div className="d-day">{ `${Intl.DateTimeFormat('kr').format(Dday)} 까지` }</div>
        <div className='now'>{ `${days}일 ${hours}시간 ${minutes}분 ${seconds}초` }</div>
        <div className="asdf">남음</div>
      </div>
    </div>
  )
}

export default App
