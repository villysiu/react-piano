import React, { Component } from 'react';
import { connect } from 'react-redux';

class PianoKey extends Component {

  state = {
    color: this.props.color
  }

  hanleMouseDown = (n) => {
    // this.setState(() => {
    //   return { color: 'grey' }
    // })
    this.setState({
       color: 'grey' 
    })
    this.playAudio(n)
    this.props.keyPressed(n)
  }

  playAudio = (n) => {
      console.log(n)
      let soundfile = `https://d1pzp51pvbm36p.cloudfront.net/FluidR3_GM/acoustic_grand_piano-mp3/${n}.mp3`
  //  let soundfile="‎⁨file:///Users/Villy/Flatiron/react-piano/piano-frontend/public/piano_E.mp3"
      let noteAudio = new Audio(soundfile)
      noteAudio.play()
  }

  hanleMouseUp = () => {
    this.setState({ 
      color: this.props.color 
    })
  }

  render() {
    
    return (
        <div className="key" 
          onMouseDown={() => this.hanleMouseDown(this.props.note)}
          onMouseUp={() => this.hanleMouseUp()}
          style={{backgroundColor: this.state.color}} >
              {this.props.note} 
        </div> 
            
    )
  }
}
const mapDispatchToProps = dispatch => {
  return {
    keyPressed: formData => dispatch({ type: 'KEY_PRESSED', payload: formData })
  }
}
export default connect(null, mapDispatchToProps) (PianoKey)