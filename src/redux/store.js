// import { createStore } from 'redux'
// import rootReducer from './reducer'
// import {composeWithDevTools} from 'redux-devtools-extension'

// const composeEnhancers = composeWithDevTools()

// const store = createStore(rootReducer,composeEnhancers)
// export default store

import { configureStore } from "@reduxjs/toolkit";
import filtersSliceReducer from "../components/Filters/filtersSliceReducer";
import todoListSliceReducer from "../components/TodoList/todoListSliceReducer";

const store = configureStore({
    reducer: {
        filters: filtersSliceReducer.reducer,
        todoList: todoListSliceReducer.reducer,
    }
})

export default store
