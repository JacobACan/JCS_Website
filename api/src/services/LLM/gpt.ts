import { CreateChatCompletionRequest, OpenAIApi, Configuration } from 'openai'
import { Track } from 'types/graphql'

import { logger } from 'src/lib/logger'

const configuration = new Configuration({
  organization: `${process.env.OPEN_AI_ORGANIZATION_ID}`,
  apiKey: `${process.env.OPEN_AI_SECRET}`,
})
const openai = new OpenAIApi(configuration)

export const generateSpotifyTrackDescription = async (
  trackInfo: Track
): Promise<string> => {
  const exampleTrackDescription =
    'Emerge from the blues of 2020 with this mellow lofi piece that blossoms like a flower - from melancholy to enlightening hopefulness. American producer Jacob Canedy brings warmth and assurance for a brighter future.  The first single "Left it all out in the open" envelops captivating guitars and smooth beats - a sound theyve proven to be dear to theyre audience.'

  const prompt = `Write a paragraph long Spotify track description like the one shown here : (${exampleTrackDescription}), but based on the track ${
    trackInfo.title
  }.
  The description should incorporate these track audio features (${JSON.stringify(
    trackInfo.trackAudioFeatures
  )}), but not state the number values specifically.
  Make the description a good balance between a story, an artistic approach, and the process behind creating the song.`
  logger.debug({}, `The prompt is : ${prompt}`)

  const body: CreateChatCompletionRequest = {
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'system', content: `${prompt}` }],
    max_tokens: 500,
    n: 1,
  }
  try {
    const completion = await openai.createChatCompletion(body)
    logger.debug(
      {},
      `The completion is ${JSON.stringify(await completion.data)}`
    )

    return completion.data.choices[0].message.content
  } catch (e) {
    if (e.response) {
      logger.info({}, e.response.status)
      logger.info({}, JSON.stringify(e.response.data))
    } else {
      logger.info({}, e.message)
    }
  }
  return ''
}
