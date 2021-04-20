import { applyMiddleware, createStore } from "redux";
import storage from "redux-persist/es/storage";
import { persistReducer, persistStore } from "redux-persist";
import { apiMiddleware } from "redux-api-middleware";
import { composeWithDevTools } from "redux-devtools-extension";

import { routerMiddleware } from "connected-react-router";
import interceptor from "redux-api-middleware-interceptor";
import pgReducer from "./reducers";

const storeMain = (history) => {
  const reducer = persistReducer(
    {
      timeout: null,
      key: 'nBloom-dev',
      whitelist: [
        "auth","ui"
      ],
      storage: storage,
    },
    pgReducer(history)
  );

  const store = createStore(
    reducer,
    composeWithDevTools(
      applyMiddleware(
        apiMiddleware,
        routerMiddleware(history),
      )
    )
  );

  persistStore(store);
  return store;
};

export default storeMain;