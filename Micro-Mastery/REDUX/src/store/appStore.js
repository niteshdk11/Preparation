import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter"

let appStore = configureStore({
reducer:{
    counter : counterReducer
}
}) ;

export default appStore ;