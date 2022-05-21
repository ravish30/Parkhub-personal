import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from './slices/authSlice'
import loaderReducer from './slices/loaderSlice'
import parkReducer from './slices/parkSlice'
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
import { authApi } from "./reducers/auth";
import { parkingApi } from "./reducers/parking.tsx";
import { setupListeners } from "@reduxjs/toolkit/query";

// const persistConfig = {
//   key: 'root',
//   version: 1,
//   storage,
// }

// const rootReducer = combineReducers({
//   auth: authReducer,
//   loader: loaderReducer,
//   parking: parkReducer,
//   [authApi.reducerPath]: authApi.reducer,
//   [parkingApi.reducerPath]: parkingApi.reducer
// })

// const persistedReducer = persistReducer(persistConfig, rootReducer)



// export const store = configureStore({
//   reducer: {
//     auth: authReducer,
//     loader: loaderReducer,
//     parking: parkReducer,
//     [authApi.reducerPath]: authApi.reducer,
//     [parkingApi.reducerPath]: parkingApi.reducer
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }).concat(parkingApi.middleware),
// })

// const persistor = persistStore(store);

// export { persistor }


export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [parkingApi.reducerPath]: parkingApi.reducer,
    auth: authReducer,
    loader: loaderReducer,
    parking: parkReducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(parkingApi.middleware),
})



setupListeners(store.dispatch)