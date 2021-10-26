import { Route } from 'react-router-dom';
import MusicSheet from '../components/MusicSheet'

function ActionRoute({ children, ...rest }) {
    console.log("IN ACTIONROUTE")
    console.log({...rest})
    return (
        // <Route {...rest} render={({ location }) =>
        //   (:id exists from music list ) ? (
        //       children
        //   ) : (
        //       <Redirect to={{pathname: "/musics", state: {from: location }}} />
        //   )

        // } />
         <Route {...rest} render={() => <MusicSheet />} />
        
    )
}
export default ActionRoute;