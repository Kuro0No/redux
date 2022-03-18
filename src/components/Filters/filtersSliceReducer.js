const initState = {
    search: '',
    status: 'All',
    priority: []
}

const filtersSliceReducer = (state = initState, action) => {

    switch (action.type) {
        case 'filters/SeacrhFilters':
            return {
                ...state,
                search: action.payload
            }
        case 'filters/statusFilters':
            return {
                ...state,
                status: action.payload
            }
        case 'filters/priorityFilters':
            return {
                ...state,
                priority: action.payload
            }
        default:
            return { ...state }
    }
}

export default filtersSliceReducer