import { applyMiddleware, createStore } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const midderwares = [];

if(process.env.NODE_ENV === "development"){
    midderwares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...midderwares));

export const persistor = persistStore(store);

export default { store, persistor };
