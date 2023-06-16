import Play_Head from './media/Playhead.png'
import Shooting_Star_Img from './media/Shooting_Star.png'

const Song = () => {
  return (
    <>
      <div className=" block">
        <h1 className="song_title">Shooting Star</h1>
        <div className="flex space-x-6">
          <div className="song_player">
            <img className=" song_cover " src={Shooting_Star_Img} alt="" />
            <img className="play_head" src={Play_Head} alt="" />
          </div>
          <div className="block">
            <h2 className="song_release_date">2023</h2>
            <p className=" song_description  ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              quo ut nulla nam dolorem ipsam, fuga vel dolores! Laborum quaerat
              cupiditate libero itaque doloribus eum ullam delectus reiciendis
              nobis quos vero cumque, voluptatum cum fugiat suscipit dolores
              quasi! Dolores rem temporibus inventore minus ab non repellendus
              quo recusandae. Fugiat, minus?{' '}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Song
