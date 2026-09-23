import { createSlice } from '@reduxjs/toolkit'
import { professors } from '../../data/professors'

const initialState = {
  professors,
  selectedProfessor: null,
  professorFilters: {
    query: '',
    country: null,
    department: null,
    subject: null,
    university: null,
    educationLevel: null,
    guidance: null,
    language: null,
    minExperience: 0,
    availability: null,
    sort: 'recommended',
  },
  selectedExperts: [], // ids of professors chosen for guidance
  favoriteExperts: [],
  comparedExperts: [],
}

const professorSlice = createSlice({
  name: 'professors',
  initialState,
  reducers: {
    setProfessorFilters(state, action) {
      state.professorFilters = { ...state.professorFilters, ...action.payload }
    },
    clearProfessorFilters(state) {
      state.professorFilters = { query: '', country: null, department: null, subject: null, university: null, educationLevel: null, guidance: null, language: null, minExperience: 0, availability: null, sort: 'recommended' }
    },
    setSelectedProfessor(state, action) {
      state.selectedProfessor = action.payload
    },
    selectExpertForGuidance(state, action) {
      if (!state.selectedExperts.includes(action.payload)) {
        state.selectedExperts.push(action.payload)
      }
    },
    toggleFavoriteProfessor(state, action) {
      const index = state.favoriteExperts.indexOf(action.payload)
      if (index >= 0) state.favoriteExperts.splice(index, 1)
      else state.favoriteExperts.push(action.payload)
    },
    toggleCompareProfessor(state, action) {
      const index = state.comparedExperts.indexOf(action.payload)
      if (index >= 0) state.comparedExperts.splice(index, 1)
      else if (state.comparedExperts.length < 3) state.comparedExperts.push(action.payload)
    },
    clearComparedProfessors(state) {
      state.comparedExperts = []
    },
  },
})

export const {
  setProfessorFilters,
  clearProfessorFilters,
  setSelectedProfessor,
  selectExpertForGuidance,
  toggleFavoriteProfessor,
  toggleCompareProfessor,
  clearComparedProfessors,
} = professorSlice.actions

export default professorSlice.reducer
