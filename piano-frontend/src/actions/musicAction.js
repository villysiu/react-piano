export const fetchMusics = () => {
    return (dispatch) => {
        dispatch({ type: "LOADING_MUSICS"})
        fetch("http://localhost:3000/musics")
            .then( response => {
                return response.json()
            })
            .then( responseJSON => {
                dispatch({ type: "SHOW_MUSICS", musics: responseJSON})
            })
    }
}
export const fetchMusic = (id) => {
    return (dispatch) => {
        dispatch({ type: "LOADING_MUSIC"})
        fetch(`http://localhost:3000/musics/${id}`)
            .then((response) => {
                return (
                    response.ok ? response.json() : Promise.reject(response)
                )
            })
            .then((responseJSON) => {
                dispatch({ type: "SHOW_MUSIC", music: responseJSON})
            })
            .catch(err => {
                console.error(err);
    
                err.text().then( errorMessage => {
                    let errObj = JSON.parse(errorMessage)
                    console.error(errObj.exception);
                    dispatch({ type: "REDIRECT", errors: errObj.exception })
                })
            } );
    }
}

export const createMusic = (music, history) => {
    console.log(history)
    return (dispatch) => {
        dispatch({ type: "ADDING_MUSIC"})
        fetch("http://localhost:3000/musics", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(music)
        })
        .then((response) => {
            console.log(response)
            return (
                response.ok ? response.json() : Promise.reject(response)
            )
        })
        .then((responseJSON) => { 
            console.log(responseJSON)
            // dispatch({ type: "ADD_MUSIC", music: responseJSON})
             history.push(`/musics/${responseJSON.id}` )
        })
        .catch(err => {
            console.error(err);
            err.text().then( errorMessage => {
                 let errObj = JSON.parse(errorMessage)
                 dispatch({ type: "REDIRECT", errors: errObj["errors"] })
              })
        } );
    }
}
export const deleteMusic = (id, history) => {
    
    return (dispatch) => {
        dispatch({ type: "DELETING_MUSIC"})
        fetch(`http://localhost:3000/musics/${id}`, {
            method: 'DELETE'
        })
        .then(response => {
            return response.json()
        })
        .then((responseJSON) => {
            // dispatch({ type: "DELETE_MUSIC", musics: responseJSON})
            history.replace({pathname: '/musics', state: { msg: `${responseJSON.name} deleted`}} )
        })
        
    }
}
export const editMusic = (music, history) => {
    console.log(music)
    return (dispatch) => {
        dispatch({ type: "UPDATING_MUSIC"})
        fetch(`http://localhost:3000/musics/${music.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(music)
        })
        .then((response) => {
            return (
                response.ok ? response.json() : Promise.reject(response) 
            )
        })
        .then((responseJSON) => { 
            // dispatch({ type: "EDIT_MUSIC", music: responseJSON})
            history.push({pathname: `/musics/${responseJSON.id}`,  state: { msg: `ID ${responseJSON.id} updated`}} )
        })
        .catch(err => {
            err.text().then( errorMessage => {
                let errObj = JSON.parse(errorMessage)
                dispatch({ type: "REDIRECT", music: errObj["music"], errors: errObj["errors"]  })
              })
        } );
    }
}

