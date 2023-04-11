/* NPM */
import { configureStore } from '@reduxjs/toolkit'
/* REDUCERS */
import contactsReducer from './reducers/contacts'
import filterReducer from './reducers/filter'

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
