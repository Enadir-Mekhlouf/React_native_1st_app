import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const itemSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    additem: (state, action) => {
      state.items.push(action.payload);
    },
    removeitem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    updateitem: (state, action) => {
      const {id, updates} = action.payload;
      const index = state.items.findIndex(item => item.id === id);
      if (index !== -1) {
        state.items[index] = {...state.items[index], ...updates};
      }
    },
  },
});

export const {additem, removeitem, updateitem} = itemSlice.actions;
export default itemSlice.reducer;
