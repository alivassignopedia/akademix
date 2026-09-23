import { createSlice } from '@reduxjs/toolkit'
import { countries } from '../../data/countries'

const initialState = {
  countries,
  selectedCountry: null,
}

const countrySlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    setSelectedCountry(state, action) {
      state.selectedCountry = action.payload
    },
  },
})

export const { setSelectedCountry } = countrySlice.actions
export default countrySlice.reducer
