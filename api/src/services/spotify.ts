import type { QueryResolvers, Track, TrackAudioFeatures } from 'types/graphql'

import { logger } from 'src/lib/logger'

let token
export const track: QueryResolvers['track'] = async (input) => {
  return await getJacobsTrack(input.recency)
}

function setNewToken() {
  const url = 'https://accounts.spotify.com/api/token'
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `grant_type=client_credentials&client_id=${process.env.SPOTIFY_CLIENT_ID}&client_secret=${process.env.SPOTIFY_CLIENT_SECRET}`,
  })
    .then((res) => res.json())
    .then((body) => {
      token = body['access_token']
    })
    .catch((e) => {
      console.error(e)
    })
}

const getJacobsTrack = async (trackNumber): Promise<Track> => {
  const trackInfo: Track = { title: null, trackId: null }
  trackInfo['track_num'] = trackNumber

  await setNewToken()
  const albums = await getAlbums()
  const albumId = albums['items'][trackNumber]['id']

  const tracks = await getTracks(albumId)
  trackInfo['title'] = tracks['tracks']['items'][0]['name']
  trackInfo['preview'] = tracks['tracks']['items'][0]['preview_url']
  trackInfo['cover'] = tracks['images'][0]['url']
  trackInfo['release_date'] = tracks['release_date']
  const trackId = tracks['tracks']['items'][0]['id']
  logger.debug({}, `Track Id : ${trackId}`)
  trackInfo['trackId'] = trackId

  const trackAudioFeatures = await getTrackAudioFeatures(trackId)
  const trackDescriptionInfo: TrackAudioFeatures = {}
  trackDescriptionInfo['acousticness'] = trackAudioFeatures['acousticness']
  trackDescriptionInfo['danceability'] = trackAudioFeatures['danceability']
  trackDescriptionInfo['energy'] = trackAudioFeatures['energy']
  trackDescriptionInfo['time_signature'] = trackAudioFeatures['time_signature']
  trackDescriptionInfo['valence'] = trackAudioFeatures['valence']
  trackInfo['trackAudioFeatures'] = trackDescriptionInfo

  return trackInfo
}

const getAlbums = async () => {
  const url = `https://api.spotify.com/v1/artists/${process.env.JACOB_SPOTIFY_URI}/albums`
  return fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((body) => {
      return body
    })
    .catch((error) => console.error(error))
}

const getTracks = async (albumId) => {
  const url = `https://api.spotify.com/v1/albums/${albumId}`
  return fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((jsonRes) => {
      return jsonRes
    })
    .catch((e) => console.error(e))
}

const getTrackAudioFeatures = async (trackId) => {
  const url = `https://api.spotify.com/v1/audio-features/${trackId}`
  return fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((jsonRes) => {
      return jsonRes
    })
    .catch((e) => console.error(e))
}
