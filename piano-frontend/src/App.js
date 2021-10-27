import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import KeyboardContainer from "./containers/KeyboardContainer.js"
import MusicsContainer from "./containers/MusicsContainer.js"
import MusicCreate from "./components/MusicCreate.js"
import MusicEdit from "./components/MusicEdit.js"
import NoMatch from "./components/NoMatch.js"
import NavBar from './components/NavBar';
import MusicSheet from "./components/MusicSheet.js"
import MusicRoute from "./components/MusicRoute.js"
import ScrollToTop from "./components/ScrollToTop.js"

const App = () => {
    return (
      
      <div id="app">
      <h2>My Baby Piano</h2>
      
      <Router>
        <ScrollToTop />
        <NavBar />
      
        <Switch>
          <MusicsContainer exact path='/musics'/> 
          <Route exact path='/' render={() => <Redirect to='/musics' />} />
          {/* <Route exact path='/' render={() => <MusicsContainer />} /> */}

          <Route exact path="/musics/new" render={(routerProps) => <MusicCreate {...routerProps}/>} /> 
          <MusicRoute exact path='/musics/:id'>
              <MusicSheet />
          </MusicRoute>
          
          <Route exact path='/musics/:id/edit' render={(routerProps) => <MusicEdit {...routerProps} />} />

          <Route path="*" render={(routerProps) => <NoMatch  {...routerProps} />} />

        </Switch>
        
      </Router>
      
      <KeyboardContainer />
      </div>

    )
}
export default App
