import { configureStore } from "@reduxjs/toolkit";
import bookmarkReducer from "./bookmarkSlice";

const appStore = configureStore({
  reducer: {
    bookmark: bookmarkReducer,
  },
});


// ✅ Add these type exports:
export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;
export default appStore;

//steps
//1. Created a Redux store file — where you configure your store using configureStore from Redux Toolkit.
//2. Initialized the store with an empty reducer object (reducer: {}) — a placeholder to add your state slices later.
//3. Exported the store as the default export for use elsewhere in your app.
//4. Wrapped your React app with <Provider store={appStore}> in your root file to make the Redux store available throughout your app.
