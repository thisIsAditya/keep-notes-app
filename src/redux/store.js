import { configureStore } from "@reduxjs/toolkit";

import createRootReducer from "./index";

const configAppStore = () => {
  const store = configureStore({ reducer: createRootReducer() });
  return { store };
};

export default configAppStore;
