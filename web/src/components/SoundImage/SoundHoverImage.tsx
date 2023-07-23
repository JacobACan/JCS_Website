import { useEffect, useState } from 'react'

interface Props {
  imageLink: string
  soundLink: string
  action?: () => void
  altText?: string
  className?: string
}

const SoundHoverImage = ({
  imageLink,
  soundLink,
  action,
  altText,
  className,
}: Props) => {
  const [audio] = useState(new Audio(soundLink))
  const id = imageLink + soundLink

  useEffect(() => {
    const maxVolume = 0.2
    audio.volume = maxVolume
    const thisElement = document.getElementById(id)

    thisElement.style.animationDuration = '1s'
    thisElement.style.animationIterationCount = '20'

    thisElement.addEventListener('mouseenter', () => {
      thisElement.style.animationName = 'active'
      audio.play()
    })
    thisElement.addEventListener('mouseleave', () => {
      thisElement.style.animationName = ''
      audio.pause()
    })
  })

  return (
    <>
      <img
        onClickCapture={action}
        id={id}
        src={imageLink}
        alt={altText}
        className={className}
      />
    </>
  )
}

export default SoundHoverImage
