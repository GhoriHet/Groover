import { createSlice } from '@reduxjs/toolkit';

const selectcategorySlice = createSlice({
  name: 'category',
  initialState: {},
  reducers: {
    setSelectedCategory(state, action) {
      console.log(action.payload);
      state.selectedCategory = action.payload;
    },
  },
});

export const { setSelectedCategory } = selectcategorySlice.actions;
export default selectcategorySlice.reducer;