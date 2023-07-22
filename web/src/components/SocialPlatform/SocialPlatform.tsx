interface Props {
  name: SocialPlatforms
  link: string
}
export enum SocialPlatforms {
  TWITTER = 'twitter',
  INSTAGRAM = 'instagram',
  FACEBOOK = 'facebook',
  SNAPCHAT = 'snapchat',
  YOUTUBE = 'youtube',
  LINKEDIN = 'linkedin',
  APPLE_MUSIC = 'appleMusic',
  SPOTIFY = 'spotify',
  YOUTUBE_MUSIC = 'youtubeMusic',
  PANDORA = 'pandora',
  DEEZER = 'deezer',
}
const socialPlatformImages = {
  twitter:
    'https://www.edigitalagency.com.au/wp-content/uploads/twitter-logo-black-png.png',
  instagram: 'https://cdn-icons-png.flaticon.com/512/87/87390.png',
  facebook: 'https://cdn-icons-png.flaticon.com/512/4406/4406234.png',
  snapchat: 'https://cdn-icons-png.flaticon.com/512/4902/4902485.png',
  youtube: 'https://cdn-icons-png.flaticon.com/512/48/48968.png',
  linkedin: 'https://cdn-icons-png.flaticon.com/512/61/61109.png',
  appleMusic:
    'https://cdn.icon-icons.com/icons2/2389/PNG/512/apple_music_logo_icon_145488.png',
  amazonMusic:
    'https://static-00.iconduck.com/assets.00/amazon-music-icon-2048x2048-o1p1azjv.png',
  spotify: 'https://cdn-icons-png.flaticon.com/512/2111/2111685.png',
  youtubeMusic:
    'https://cdn.icon-icons.com/icons2/3237/PNG/512/platform_social_media_media_youtube_music_youtube_music_icon_197269.png',
  pandora: 'https://cdn-icons-png.flaticon.com/512/732/732117.png',
  deezer: 'https://cdn-icons-png.flaticon.com/512/5968/5968860.png',
}

const SocialPlatform = ({ name, link }: Props) => {
  return (
    <>
      <img
        className=" social-platform relative w-[100%]"
        src={socialPlatformImages[name]}
        alt={name}
        onClickCapture={() => window.open(link, '_blank')}
      />
    </>
  )
}

export default SocialPlatform
