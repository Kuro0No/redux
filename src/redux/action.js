
export const addTodoAction = (data) => {
    return {
        type:'todoList/addTodo',
        payload: data
    }
}
// export const searchFilterAction = (text) => {
//     return {
//         type: 'filters/SeacrhFilters',
//         payload: text
//     }
// }