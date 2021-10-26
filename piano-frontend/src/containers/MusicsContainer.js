import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchMusics } from '../actions/musicAction.js'
import MusicList from '../components/MusicList'
class MusicsContainer extends Component {
    componentDidMount() {
        this.props.fetchMusics()
    }
   
    render() {
        console.log(this.props)
        let { loading, musics, location } = this.props

        return (
            musics.length === 0 ? (
                loading ? (
                  <h2>Loading...</h2>
                ) : (
                  <h2>Music list is empty. Please 
                    <Link to={ '/musics/new' } > create </Link> the first song. </h2>
                )
            ) : (
                <div id="music_container">
                  { location && location.state ? <h4>{location.state.msg}</h4> : null }
                  <MusicList musics={musics} />
                </div>
            )
        )
    }
}
const mapStateToProps = state => {
  console.log(state)
  return {
     musics: state.musicsReducer.musics,
    // musics: [],
    loading: state.musicsReducer.loading,
  
  }
}
const mapDispatchToProps = dispatch => {
  return{
    fetchMusics: () => dispatch(fetchMusics()),
  }
}

 export default connect(mapStateToProps, mapDispatchToProps)(MusicsContainer)
