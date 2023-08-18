import { useState } from 'react'
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

  const audioSrc = musicList[currentTrackIndex]

  const playNextTrack = () => {
    const nextTrackIndex = (currentTrackIndex + 1) % musicList.length
    setCurrentTrackIndex(nextTrackIndex)
  }

  const handleNextButtonClick = () => {
    playNextTrack()
    const audioElement = document.getElementById('audio-element')
    if (audioElement) {
      audioElement.load() // Reiniciar o elemento de áudio
      audioElement.play() // Iniciar a próxima música
    }
  }

  return (
    <div className={`player ${theme}`}>
      <audio id="audio-element" controls onEnded={playNextTrack}>
        <source src={audioSrc} type="audio/mpeg" />
        Seu navegador não suporta a reprodução de áudio.
      </audio>
      <button onClick={handleNextButtonClick}>Próxima Música</button>
    </div>
  )
}

export default Player
