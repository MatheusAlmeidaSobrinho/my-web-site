import { useState, useEffect, useRef } from 'react'
import './Player.scss'
import { useTheme } from '../../hooks/useTheme'
import musicOne from '../../assets/musics/backgroundMusic.mp3'
import musicTwo from '../../assets/musics/backgroundMusicTwo.mp3'
import musicThree from '../../assets/musics/backgroundMusicThree.mp3'

function Player() {
  const { theme } = useTheme()
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0)

  const audioOneSrc = musicOne
  const audioTwoSrc = musicTwo
  const audioThreeSrc = musicThree

  const musicList = [audioOneSrc, audioTwoSrc, audioThreeSrc]

  const audioRef = useRef(null)

  useEffect(() => {
    const audioElement = audioRef.current

    const playNextTrack = () => {
      const nextTrackIndex = (currentTrackIndex + 1) % musicList.length
      setCurrentTrackIndex(nextTrackIndex)
      audioElement.src = musicList[nextTrackIndex]
      audioElement.load()
      audioElement.play()
    }

    audioElement.addEventListener('ended', playNextTrack)

    return () => {
      audioElement.removeEventListener('ended', playNextTrack)
    }
  }, [currentTrackIndex, musicList])

  const handleNextButtonClick = () => {
    const nextTrackIndex = (currentTrackIndex + 1) % musicList.length
    setCurrentTrackIndex(nextTrackIndex)
    const audioElement = audioRef.current
    audioElement.src = musicList[nextTrackIndex]
    audioElement.load()
    audioElement.play()
  }

  return (
    <div className={`player ${theme}`}>
      <audio className="audio-element" ref={audioRef} controls>
        <source src={musicList[currentTrackIndex]} type="audio/mpeg" />
        Seu navegador não suporta a reprodução de áudio.
      </audio>
      <button onClick={handleNextButtonClick}>Próxima Música</button>
    </div>
  )
}

export default Player
