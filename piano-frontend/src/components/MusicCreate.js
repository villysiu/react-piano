import React, {Component} from "react";
import { connect } from 'react-redux';
import { createMusic } from '../actions/musicAction.js'
import InputForm from './InputForm.js'
import Error from './Error.js'

class MusicCreate extends Component {
    createMusicCb = (cbMusic) => {
        let { history } = this.props
        this.props.createMusic(cbMusic, history)
    }
    render() {
         console.log(this.props)
        let music = {
            id: null,
            name: '',
            notes: ''
        }
        return (
            <div>
                <Error errors={this.props.errors} />
                <InputForm defaultValue={music} callback={this.createMusicCb} pianoKey={this.props.pianoKey} resetPianoKey={this.props.resetPianoKey} />
            </div>
        )
    }  
}
const mapDispatchToProps = dispatch => {
    return {
      createMusic: (formData, history) => dispatch(createMusic(formData, history)),
      resetPianoKey: () => dispatch({type: 'RESET_PIANO_KEY'})
    }
  }
  const mapStateToProps = state => {
      return {
          errors: state.musicsReducer.errors,
          pianoKey: state.pianoReducer.pianoKey,
      }
  }
  export default connect(mapStateToProps, mapDispatchToProps) (MusicCreate)