import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import payloadReducer from "../features/checkApi/api";
import createLogger from "redux-logger";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const config = {
  key: "profile",
  storage: storage,
};

// const middleware = [];
// middleware.push(createLogger());
// const enhancers = [...middleware];
const rootReducers = combineReducers({
  counter: counterReducer,
  berita: payloadReducer,
});
const reducers = persistReducer(config, rootReducers);
// const persistConfig = enhancers ;
export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(createLogger),
  // middleware:enhancers
});

export const persistor = persistStore(store);
