import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  educationLevel: null,
  department: null,
  subject: null,
  country: null,
  interest: null,
}

const journeySlice = createSlice({
  name: 'journey',
  initialState,
  reducers: {
    setEducationLevel(state, action) {
      state.educationLevel = action.payload
    },
    setJourneyDepartment(state, action) {
      state.department = action.payload
    },
    setJourneySubject(state, action) {
      state.subject = action.payload
    },
    setJourneyCountry(state, action) {
      state.country = action.payload
    },
    setInterest(state, action) {
      state.interest = action.payload
    },
    resetJourney() {
      return initialState
    },
  },
})

export const {
  setEducationLevel,
  setJourneyDepartment,
  setJourneySubject,
  setJourneyCountry,
  setInterest,
  resetJourney,
} = journeySlice.actions

export default journeySlice.reducer
