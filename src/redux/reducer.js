
const initState = {
    filters: {
        search: '',
        status: 'All',
        proriry: []
    },
    todoList: [
        { id: 1, name: 'Learn redux', prioriry: 'Medium', completed: true, },
        { id: 2, name: 'Learn Nodejs', prioriry: 'Hight', completed: false, },
        { id: 3, name: 'Learn NextJs', prioriry: 'Low', completed: true, }
    ]
}

const rootReducer = (state = initState, action) => {

    switch (action.type) {
        case 'todoList/addTodo':
            console.log(state)
            return {
                ...state,
                todoList: [
                    ...state.todoList,
                    action.payload
                ]
            }
        case 'filters/SeacrhFilters':
            return {
                ...state,
                filters: {
                    ...state.filters,
                    search: action.payload
                }
            }
        default:
            return {...state}
    }
}

export default rootReducer


// import { combineReducers } from "redux";
// import todoListSliceReducer from "../components/TodoList/todoListSliceReducer";
// import filtersSliceReducer from "../components/TodoList/todoListSliceReducer";

// const rootReducer = combineReducers({
//     filters: filtersSliceReducer,
//     todoList: todoListSliceReducer
// })



// const rootReducer = (state={} , action) => {

//     return{
//         filters: filtersSliceReducer(state.filters, action),
//         todoList: todoListSliceReducer(state.todoList,action)
//     }
// }