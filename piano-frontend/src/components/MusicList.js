// import React from 'react'
import { Link } from 'react-router-dom';
const MusicList = (props) => {
    return (   
        <div id="music_list">
            {props.musics.map((music) => 
            <li key={music.id}>
                <Link to={`/musics/${music.id}`} > {music.name}</Link>
            </li> )}
        </div>
        )
}
export default MusicList



