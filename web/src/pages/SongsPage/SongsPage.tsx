import { useEffect, useState } from 'react'

import { BounceLoader } from 'react-spinners'

import { MetaTags, useQuery } from '@redwoodjs/web'

import Arrow, { ArrowType } from 'src/components/Arrow/Arrow'
import { phoneWidth } from 'src/Routes'

import PatternGreen from './media/PatternGreen.png'

const SongsPage = () => {
  const [isPhone, setIsPhone] = useState(window.innerWidth < phoneWidth)
  window.addEventListener('resize', (e: any) => {
    e.target && e.target.innerWidth < phoneWidth
      ? setIsPhone(true)
      : setIsPhone(false)
  })
  const responsitivity = (): string => {
    return isPhone ? '-phone' : '-desktop'
  }
  const [audio, setAudio] = useState(new Audio())
  audio.addEventListener('pause', () => {
    resetCoverAnimation()
    setIsPlaying(false)
  })
  audio.addEventListener('ended', () => {
    resetCoverAnimation()
    setIsPlaying(false)
  })
  audio.addEventListener('play', () => {
    startCoverAnimation()
    setIsPlaying(true)
  })
  const resetCoverAnimation = () => {
    const cover = document.getElementById('songs-page-song-cover')
    cover.style.animationName = 'scale-up'
  }
  const startCoverAnimation = () => {
    const cover = document.getElementById('songs-page-song-cover')
    cover.style.animationName = 'scale-down'
  }
  const [isPlaying, setIsPlaying] = useState(false)
  const [songRecency, setSongRecency] = useState(1)
  const TRACK_QUERY = gql`
    query Track($recency: Int!) {
      track(recency: $recency) {
        title
        cover
        release_date
        preview
        description
        trackAudioFeatures {
          acousticness
          danceability
          energy
          time_signature
          valence
        }
      }
    }
  `
  const {
    data: trackData,
    loading,
    refetch,
  } = useQuery(TRACK_QUERY, {
    variables: { recency: songRecency },
    onCompleted: async (data) => {
      setAudio(new Audio(`${data.track.preview}`))
    },
  })

  const handleCoverClick = () => {
    const background = document.getElementById('songs-page-background')
    if (!loading) {
      if (!isPlaying) {
        background.style.animationName = 'scroll-right'
        audio.volume = 0.2
        audio.play()
        setIsPlaying(true)
        setTimeout(() => {
          background.style.animationName = ''
        }, 60000)
      } else {
        audio.pause()
        setIsPlaying(false)
      }
    }
  }

  useEffect(() => {
    audio.pause()
  }, [trackData])

  return (
    <>
      <MetaTags title="Songs" description="Songs page" />
      <div id="songs-page-position"></div>
      <div className={`theme-background${responsitivity()}`}>
        <img
          src={trackData ? trackData.track.cover : PatternGreen}
          className={`background-image${responsitivity()} blurdark`}
          id="songs-page-background"
          alt=""
        />
        <section className="margin-box mt-[10vh] h-[90vh]">
          <h1 id="songs-page-title">Latest Music</h1>

          {trackData ? (
            <>
              <h1 id="song-title" className={`song-title${responsitivity()}`}>
                {trackData.track.title}
              </h1>
              <img
                src={trackData ? trackData.track.cover : ''}
                alt={`${trackData ? trackData.track.title : ''}`}
                className={`song-cover song-cover${responsitivity()}`}
                onClickCapture={() => handleCoverClick()}
                id="songs-page-song-cover"
              />
              {loading ? (
                <div className={`song-cover-loader${responsitivity()}`}>
                  <BounceLoader size={100} />
                </div>
              ) : (
                <></>
              )}
              <h2 className={`song-date${responsitivity()}`}>
                {trackData.track.release_date}
              </h2>
              {trackData.track.trackAudioFeatures ? (
                <p className={`song-description${responsitivity()}`}>
                  {trackData.track.description}
                </p>
              ) : (
                <></>
              )}
              <div className={`right-arrow-song-placement${responsitivity()}`}>
                <Arrow
                  type={ArrowType.Right}
                  handleClick={() => {
                    songRecency < 10
                      ? setSongRecency(songRecency + 1)
                      : setSongRecency(1)
                    refetch()
                  }}
                />
              </div>
              <div className={`left-arrow-song-placement${responsitivity()}`}>
                <Arrow
                  type={ArrowType.Left}
                  handleClick={() => {
                    songRecency > 0
                      ? setSongRecency(songRecency - 1)
                      : setSongRecency(10)
                    refetch()
                  }}
                />
              </div>
            </>
          ) : (
            <div className={`song-cover-loader${responsitivity()}`}>
              <BounceLoader size={100} />
            </div>
          )}
        </section>
      </div>
    </>
  )
}

export default SongsPage
