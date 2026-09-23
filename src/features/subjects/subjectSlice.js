import { createSlice } from '@reduxjs/toolkit'
import { subjectCategories, allSubjects } from '../../data/subjects'

const initialState = {
  categories: subjectCategories,
  subjects: allSubjects,
  selectedSubject: null,
  subjectCategory: null,
}

const subjectSlice = createSlice({
  name: 'subjects',
  initialState,
  reducers: {
    setSelectedSubject(state, action) {
      state.selectedSubject = action.payload
    },
    setSubjectCategory(state, action) {
      state.subjectCategory = action.payload
    },
  },
})

export const { setSelectedSubject, setSubjectCategory } = subjectSlice.actions
export default subjectSlice.reducer
