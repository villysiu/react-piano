import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { fetchMusic, deleteMusic } from '../actions/musicAction.js'
import NoMatch from "./NoMatch.js"

class MusicRoute extends Component {
    componentDidMount() {
       let { id } = this.props.computedMatch.params || {id: null}
        this.props.fetchMusic(id)
    }
    
    render(){
        console.log(this.props)
        
        let { music, errors, loading, routerProps, children, deleteMusic } = this.props
        
        if (loading || (music === null && errors.length === 0) ) {
            return (
              <h2>Loading.. </h2>
              )
        }
        else {
            return(
                <Route {...routerProps} render={() =>  
                    // errors.length ===0 ? children : <NoMatch />
                  errors.length === 0 ? (
                    React.cloneElement(children, { music, deleteMusic })
                  ) : (
                    <NoMatch />
                  )
                
                } />
            )
        }
    }
}
const mapStateToProps = state => {
  return {
    // musics: state.musics,
    music: state.musicsReducer.music,
    loading: state.musicsReducer.loading,
    errors: state.musicsReducer.errors,
  
  }
}
const mapDispatchToProps = dispatch => {
  return{
    fetchMusic: (id) => dispatch(fetchMusic(id)),
    deleteMusic: (id, history) => dispatch(deleteMusic(id, history))
  }
}
export default connect(mapStateToProps, mapDispatchToProps) (MusicRoute)