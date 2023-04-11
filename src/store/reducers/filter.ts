import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type SearchFilter = {
  term?: string
}
const initialState: SearchFilter = {
  term: ''
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    alterFilter: (state, action: PayloadAction<string>) => {
      state.term = action.payload
    }
  }
})

export const { alterFilter } = filterSlice.actions
export default filterSlice.reducer
