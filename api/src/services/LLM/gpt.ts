import { Track } from 'types/graphql'

import { db } from 'src/lib/db'

export const makeSpotifyTrackDescription = async (
  trackInfo: Track
): Promise<string> => {
  let description: string

  const track = await db.track.findFirst({
    where: { trackId: { equals: trackInfo.trackId } },
    select: { description: true },
  })
  if (!track) {
    description = 'Fake Description 1'
    await db.track.create({
      data: { trackId: trackInfo.trackId, description: description },
    })
  } else {
    if (!track.description) {
      description = 'Fake Description 2'
      await db.track.update({
        data: { description: description },
        where: { trackId: trackInfo.trackId },
      })
    }
  }

  return description
}
