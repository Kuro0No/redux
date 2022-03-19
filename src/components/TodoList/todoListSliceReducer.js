// const initState = [
//     { id: 1, name: 'Learn redux', prioriry: 'Medium', completed: true, },
//     { id: 2, name: 'Learn Nodejs', prioriry: 'High', completed: false, },
//     { id: 3, name: 'Learn NextJs', prioriry: 'Low', completed: true, }
// ]

import { createSlice } from "@reduxjs/toolkit"

// const todoListSliceReducer = (state = initState, action) => {
//     switch (action.type) {
//         case 'todoList/addTodo':
//             return [
//                 ...state,
//                 action.payload

//             ]
//         default:
//             return state 
//     }
// }

const todoListSliceReducer = createSlice({
    name: 'todoList',
    initialState: [
        { id: 1, name: 'Learn redux', prioriry: 'Medium', completed: true, },
        { id: 2, name: 'Learn Nodejs', prioriry: 'High', completed: false, },
        { id: 3, name: 'Learn NextJs', prioriry: 'Low', completed: true, }
    ],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload)
        }
    }
})

export default todoListSliceReducer

