import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  components: {
    cpu: {},
    motherboard: {},
    ram: {},
    power: {},
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

      if (componentName === 'cpu') {
        state.components[componentName] = action.payload.item;
      } else if (componentName === 'motherboard') {
        state.components[componentName] = action.payload.item;
      } else if (componentName === 'ram') {
        state.components[componentName] = action.payload.item;
      } else if (componentName === 'power') {
        state.components[componentName] = action.payload.item;
      } else if (componentName === 'storage') {
        state.components[componentName] = action.payload.item;
      } else if (componentName === 'monitor') {
        state.components[componentName] = action.payload.item;
      }
    },
  },
});

export const { addComponent } = pcBuilderSlice.actions;

export default pcBuilderSlice.reducer;
