
export const addTodoAction = (data) => {
    return {
        type:'todoList/addTodo',
        payload: data
    }
}
export const searchFilterAction = (text) => {
    return {
        type: 'filters/SeacrhFilters',
        payload: text
    }
}

export const statusFilterAction = (status) => {
    return {
        type: 'filters/statusFilters',
        payload: status
    }
}

export const priorityFilterAction = (status) => {
    return {
        type: 'filters/priorityFilters',
        payload: status
    }
}