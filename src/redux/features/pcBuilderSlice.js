import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  components: {
    cpu: {},
    motherboard: {},
    ram: {},
    psu: {},
    storage: {},
    monitor: {},
  },
};

export const pcBuilderSlice = createSlice({
  name: 'pcBuilder',
  initialState,
  reducers: {
    addComponent: (state, action) => {
      const componentName = action.payload.componentName.toLowerCase();

      //   const newComponent = state.components[componentName];

      console.log(state.components[componentName]);
    },
  },
});

export const { addComponent } = pcBuilderSlice.actions;

export default pcBuilderSlice.reducer;
