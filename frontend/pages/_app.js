import Header from "../components/Header";
import "../styles/globals.css";
import { store } from "./store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Provider store={store}>
        <Header />
        <Component {...pageProps} />
      </Provider>
    </div>
  );
}

export default MyApp;
