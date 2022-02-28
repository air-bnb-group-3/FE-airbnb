import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { compose, applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "../store/reducers";

const composeEnhancers = compose;
const Store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={Store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
