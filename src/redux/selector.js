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

export const filterPrioritySelector = (state) => {
    return state.filters.priority
}


export const todosRemainingSelector = createSelector(todoListSelector, searchTextSelector, filterStatusSelector, filterPrioritySelector,
    (todoList, searchText, filterStatus, priority) => {
        console.log(priority)

        return todoList.filter(todo => {
            

            if (filterStatus === 'All') {
                return priority.length
                    ? todo.name.includes(searchText) && priority.includes(todo.prioriry)
                    : todo.name.includes(searchText)
            }

            return todo.name.includes(searchText) &&
                (filterStatus === 'Completed' ? todo.completed : !todo.completed)
                && (priority.length ? priority.includes(todo.prioriry) : true)
        })
    })
