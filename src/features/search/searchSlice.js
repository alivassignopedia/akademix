import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  searchQuery: '',
  searchCategory: 'all', // all | professors | subjects | universities | courses | countries
}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchQuery(state, action) {
      state.searchQuery = action.payload
    },
    setSearchCategory(state, action) {
      state.searchCategory = action.payload
    },
  },
})

export const { setSearchQuery, setSearchCategory } = searchSlice.actions
export default searchSlice.reducer
