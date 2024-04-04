import { configureStore } from '@reduxjs/toolkit'
import todosSlice from '../features/Todos/todosSlice'

export const store = configureStore({
  reducer: {
    todos: todosSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch