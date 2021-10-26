import React, { Component } from "react";
import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom'
import { fetchMusic, editMusic } from '../actions/musicAction.js'
import InputForm from './InputForm.js'
import Error from './Error.js'

class MusicEdit extends Component { 

    componentDidMount() {
        let { id } = this.props.match.params
        this.props.fetchMusic(id)
    }
    
    editMusicCb = (cbMusic) => {
      let { history } = this.props
        this.props.editMusic(cbMusic, history)
    }

    render() {
      console.log(this.props)
 
        let { loading, music, errors } = this.props
        if (loading || (music===null && errors.length===0)  ) {
         
            return (
              <h2>Loading.. </h2>
            )
        }
        else {
          let music = {
            id: this.props.music.id,
            name: this.props.music.name,
            notes: this.props.music.notes.map((r) => r.join(" ")).join(", ") 
          }
            return (
              <div>
                  <Error errors={this.props.errors} />
                  <InputForm defaultValue={music} callback={this.editMusicCb} />
                  {/* <InputForm music={this.props.music ? this.props.music : this.state.music} cbMusic={this.cbMusic} /> */}
              </div>
            )
        }
    }
}
const mapStateToProps = state => {
  console.log(state)
  return {
    music: state.musicsReducer.music,
    loading: state.musicsReducer.loading,
    errors: state.musicsReducer.errors,
  }
}
const mapDispatchToProps = dispatch => {
  return{
     fetchMusic: (id) => dispatch(fetchMusic(id)),
     editMusic: (music, history, l) => dispatch(editMusic(music, history))
  
  }
}
export default connect(mapStateToProps, mapDispatchToProps) (MusicEdit)