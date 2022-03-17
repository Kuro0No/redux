const initState = {
    search: '',
    status: '',
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
        default:
            return { ...state }
    }
}

export default filtersSliceReducer