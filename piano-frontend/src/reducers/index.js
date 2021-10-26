import { combineReducers } from "redux";
import musicsReducer from "./musicsReducer";
import pianoReducer from "./pianoReducer";

export default combineReducers ({
    musicsReducer,
    pianoReducer

})