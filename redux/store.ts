import { configureStore } from "@reduxjs/toolkit";
import { todosAPI } from "@/redux/slice/api";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    [todosAPI.reducerPath]: todosAPI.reducer,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(todosAPI.middleware),
});
setupListeners(store.dispatch);
