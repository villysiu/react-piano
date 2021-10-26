const musicsReducer = (
    state = {
        errors: [],
        musics:[],
        music: null,
        loading: false

    }, action) => {

    console.log(action)
    switch (action.type){
        case "LOADING_MUSICS":
        case "LOADING_MUSIC":
        case "ADDING_MUSIC":
        case "DELETING_MUSIC":
        case "UPDATING_MUSIC":
        
            return {
                ...state,
                musics: [...state.musics],
                music: null,
                loading: true,
                errors: [],
            }

        case "SHOW_MUSICS":
        // case "DELETE_MUSIC":
            return {
                ...state,
                musics: action.musics,
                // music: null,
                loading: false,
                // errors: [],
                
            }
        case "SHOW_MUSIC":
            
            action.music.notes = noteStrToArr(action.music.notes)
            return {
                ...state,
                music: action.music,
                loading: false, 
                // errors: [],
            }

        case "REDIRECT":
             console.log(action)
         
            if (action.music)  {
                action.music.notes = noteStrToArr(action.music.notes)
            }
            return {
                ...state,
                errors: action.errors,
                music: action.music,
                loading: false,
                
            }
        default:
            return state;
    }
}

export default musicsReducer;

const noteStrToArr = (notes) => {
    return (
        notes.split(/\s*(?:,|$)\s*/).map((r) => r.split(/\s/))
    )
}