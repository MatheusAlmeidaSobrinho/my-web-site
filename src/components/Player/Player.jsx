import { useState, useEffect, useRef, useMemo } from 'react'
import './Player.scss'
import { useTheme } from '../../hooks/useTheme'
import musicOne from '../../assets/musics/backgroundMusic.mp3'
import musicTwo from '../../assets/musics/backgroundMusicTwo.mp3'
import musicThree from '../../assets/musics/backgroundMusicThree.mp3'
import { useLanguage } from '../../hooks/useLanguage'
import { contents } from '../../assets/translate/contents'

function Player() {
  const { theme } = useTheme()
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0)

  const musicList = useMemo(() => [musicOne, musicTwo, musicThree], [])

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

  const { currentLanguage } = useLanguage()

  return (
    <div className={`player ${theme}`}>
      <audio className="audio-element" ref={audioRef} controls>
        <source src={musicList[currentTrackIndex]} type="audio/mpeg" />
        {contents.player.yourNavegator[currentLanguage]}
      </audio>
      <div className="buttonDiv">
        <button onClick={handleNextButtonClick}>
          {contents.player.nextMusic[currentLanguage]}
        </button>
      </div>
    </div>
  )
}

export default Player
