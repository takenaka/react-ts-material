import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
  drawer: false
};

const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setDrawer: (state, action: PayloadAction<boolean>) => {
      return Object.assign({}, state, { drawer: action.payload });
    },
    toggleDrawer: state => {
      return Object.assign({}, state, { drawer: !state.drawer });
    }
  }
});

export default slice;
