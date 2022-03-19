// const initState = {
//     search: '',
//     status: 'All',
//     priority: []
// }

// const filtersSliceReducer = (state = initState, action) => {

//     switch (action.type) {
//         case 'filters/SeacrhFilters':
//             return {
//                 ...state,
//                 search: action.payload
//             }
//         case 'filters/statusFilters':
//             return {
//                 ...state,
//                 status: action.payload
//             }
//         case 'filters/priorityFilters':
//             return {
//                 ...state,
//                 priority: action.payload
//             }
//         default:
//             return { ...state }
//     }
// }

import { createSlice } from "@reduxjs/toolkit"


const filtersSliceReducer = createSlice({
    name: 'filters',
    initialState: {
        search: '',
        status: 'All',
        priority: []
    },
    reducers: {
        SeacrhFilters: (state, action) => {
            state.search= action.payload
        },
        statusFilters: (state, action) => {
            state.status= action.payload
        },
        priorityFilters: (state, action) => {
            state.priority= action.payload
        }
    }
})

export default filtersSliceReducer