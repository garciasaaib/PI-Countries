import { 
  createStore, // crea la base del store
  applyMiddleware, // permite usar middlewares como thunk para el async
  compose // auxiliar para usar la devtool de navegador
} from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index"

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)))