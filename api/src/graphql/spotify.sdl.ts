export const schema = gql`
  type Track {
    title: String!
    trackId: String!
    preview: String
    cover: String
    release_date: String
    trackAudioFeatures: TrackAudioFeatures
  }

  type TrackAudioFeatures {
    acousticness: String
    danceability: String
    energy: String
    time_signature: String
    valence: String
    track_description_info: String
  }

  type Query {
    track(recency: Int!): Track! @skipAuth
  }
`
