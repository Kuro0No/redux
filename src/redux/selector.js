import { createSelector } from 'reselect'

export const todoListSelector = (state) => {
    return state.todoList
}
export const searchTextSelector = (text) => {
    return text.filters.search
}


