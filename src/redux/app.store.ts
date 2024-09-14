import {configureStore} from '@reduxjs/toolkit';
import agentReducer from './slice/agent.slice';
import appReducer from './slice/app.slice';
export const store = configureStore({
  reducer: {
    agent: agentReducer,
    app: appReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
