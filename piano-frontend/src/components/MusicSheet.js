// import React from 'react'
import {Link, useHistory, useLocation } from 'react-router-dom'
import StaffLines from '../data/staff_lines.js'
import Note from './Note.js'

const MusicSheet = (props) => {
    console.log(props)
    let {music, deleteMusic} = props
    let history = useHistory();
    let location = useLocation();

    return(
         <div id="music_sheet">
           { location.state ? <h4>{location.state.msg}</h4> : null }
             <div>
                 {music.name}
                <Link to={ `/musics/${music.id}/edit` } ><button type="button" >Edit</button></Link>
                <button onClick={() => deleteMusic(music.id, history)} > X </button>
            </div>
            
            <div id='staff-container'>
                {music.notes.map((row, idx) =>
                    <div className='staff-row' key={idx}>    
                        <StaffLines />
                        <div className="grid-container">
                            {row.map((note, idx) => <Note key={idx} column={idx} note={note}/>)}
                        </div> 
                    </div>
                )} 
            </div>   
        </div>
    )
}
export default MusicSheet