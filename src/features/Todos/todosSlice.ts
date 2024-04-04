import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "./../../common/types"

const todosFromLocalStorage = localStorage.getItem("todos");
let intialTodos: Todo[] = [];
if(todosFromLocalStorage) {
    intialTodos = JSON.parse(todosFromLocalStorage);
}

const initialState: { todos: Todo[] } = {
    todos: intialTodos,
}
  
export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers:  {
    addTodo: (state, action: PayloadAction<Todo>) => {
        state.todos = [...state.todos, action.payload]
        localStorage.setItem("todos", JSON.stringify(state.todos))
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
        state.todos = state.todos.filter( todo => todo.id !== action.payload)
    },
    toggleTodoCompletion: (state, action: PayloadAction<string>) => {
        state.todos = state.todos.map( todo => {
            if(todo.id === action.payload) {
                return {
                    ...todo,
                    isTodoCompleted: !todo.isTodoCompleted
                }
            } else {
                return todo
            }
        })
        localStorage.setItem("todos", JSON.stringify(state.todos))
    },
  }
});

export const { addTodo, deleteTodo, toggleTodoCompletion } = todosSlice.actions
export default todosSlice.reducer