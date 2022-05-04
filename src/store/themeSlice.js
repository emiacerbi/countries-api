import { createSlice } from '@reduxjs/toolkit'

let initialState = {
  theme: localStorage.getItem('theme') || 'light'
};

export const themeSlice = createSlice({
  // Name equivale al Type
  name: 'theme',
  initialState,
  reducers: {
    switchTheme: (state) => {
      state.theme === 'dark' ?
        state.theme = 'light' :
        state.theme = 'dark'
    }
  },
})

// Action creators are generated for each case reducer function
export const { switchTheme } = themeSlice.actions

export default themeSlice.reducer