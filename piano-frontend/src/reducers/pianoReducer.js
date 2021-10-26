const pianoReducer = (
    state = {
        pianoKey: '',
    }, action
) => {
    console.log(action)
    switch (action.type) {
        case 'RESET_PIANO_KEY': 
            return { pianoKey: ''}

        case 'KEY_PRESSED':
            return { pianoKey: action.payload }
            
        default: 
            return state
    }
}
export default pianoReducer