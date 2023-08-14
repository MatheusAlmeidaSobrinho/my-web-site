import { useState, useRef } from 'react'

const MusicPlayer = () => {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  const handleEnded = () => {
    setIsPlaying(false)
    audioRef.current.currentTime = 0
  }

  return (
    <div>
      <audio ref={audioRef} onEnded={handleEnded}>
        <source src="./music.mp3" type="audio/mpeg" />
      </audio>
      <button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
    </div>
  )
}

export default MusicPlayer
