import { configureStore } from '@reduxjs/toolkit'
import countryReducer from '../features/countries/countrySlice'
import professorReducer from '../features/professors/professorSlice'
import subjectReducer from '../features/subjects/subjectSlice'
import universityReducer from '../features/universities/universitySlice'
import searchReducer from '../features/search/searchSlice'
import journeyReducer from '../features/journey/journeySlice'

export const store = configureStore({
  reducer: {
    countries: countryReducer,
    professors: professorReducer,
    subjects: subjectReducer,
    universities: universityReducer,
    search: searchReducer,
    journey: journeyReducer,
  },
})
