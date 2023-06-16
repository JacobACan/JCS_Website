import Song from '../Song/Song'

const Songs = () => {
  return (
    <>
      <div className="page_section_blue">
        <h2 className="section_title">Songs</h2>
        <div className="song_container">
          <Song></Song>
          <Song></Song>
          <Song></Song>
          <Song></Song>
        </div>
      </div>
    </>
  )
}

export default Songs
