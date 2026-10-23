import { useRef, useState } from 'react'
import { DarkSoulsHoloCard } from './shaders/dark-souls-holo-card/DarkSoulsHoloCard'
import './shaders/threeui.css'
import { config } from './config'

export default function App() {
  const audioRef = useRef(null)
  const [opened, setOpened] = useState(false)

  function open() {
    setOpened(true)
    audioRef.current?.play().catch(() => {})
  }

  return (
    <main className="stage">
      <div className="shader-frame">
        <DarkSoulsHoloCard variant="ashen-one" />
      </div>

      {config.song && <audio ref={audioRef} src={config.song} loop preload="auto" />}

      {!opened && (
        <button className="intro" onClick={open}>
          <span className="intro-eyebrow">Today is your day</span>
          <span className="intro-title">{config.name}</span>
          <span className="intro-cta">Tap to open your card</span>
        </button>
      )}
    </main>
  )
}
