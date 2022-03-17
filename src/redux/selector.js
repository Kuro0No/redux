import { createSelector } from 'reselect'

export const todoListSelector = (state) => {
    return state.todoList
}
export const searchTextSelector = (state) => {
    return state.filters.search
}

export const filterStatusSelector = (state) => {
    return state.filters.status
}


export const todosRemainingSelector = createSelector(todoListSelector, searchTextSelector, filterStatusSelector,
    (todoList, searchText, filterStatus) => {
        console.log(filterStatus)

        return todoList.filter(todo => {

            if (filterStatus === 'All') {
                return todo.name.includes(searchText)
            }

            return todo.name.includes(searchText) && (filterStatus === 'Completed' ? todo.completed : !todo.completed)
        })
    })
