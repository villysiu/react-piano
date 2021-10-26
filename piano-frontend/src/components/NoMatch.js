import { useLocation, useHistory, Link } from "react-router-dom";

const NoMatch = () => {
  
  let location = useLocation();
  let history = useHistory();
  
  setTimeout(() => {
    history.replace('/musics')
  }, 2000);

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code><br />
        Redirecting to <Link to={'/musics/'} >Musics</Link>
      </h3>
    </div>
  );
}
export default NoMatch