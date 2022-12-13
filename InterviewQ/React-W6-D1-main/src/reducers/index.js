import modifiers from "./Reducer"
import { combineReducers } from "@reduxjs/toolkit"

const allReducers = combineReducers({
    modifiers
})

export default allReducers;