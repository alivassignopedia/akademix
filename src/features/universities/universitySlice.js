import { createSlice } from '@reduxjs/toolkit'
import { universities } from '../../data/universities'

const initialState = {
  universities,
  selectedUniversity: null,
  universityFilters: {
    country: null,
    department: null,
  },
}

const universitySlice = createSlice({
  name: 'universities',
  initialState,
  reducers: {
    setUniversityFilters(state, action) {
      state.universityFilters = { ...state.universityFilters, ...action.payload }
    },
    setSelectedUniversity(state, action) {
      state.selectedUniversity = action.payload
    },
  },
})

export const { setUniversityFilters, setSelectedUniversity } = universitySlice.actions
export default universitySlice.reducer
