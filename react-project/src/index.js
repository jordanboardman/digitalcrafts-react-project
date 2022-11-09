// index.js v1
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./App";
import About from "./pages/About";
import AddFavorites from "./pages/AddFavorites";
import JordansFavorites from "./pages/JordansFavorites";
import Error from "./pages/Error";
// import SingleCocktail from "./pages/SingleCocktail";
import reducer from "./reducers/reducer";
// import Header from "./components/layout/Header";
import BaseLayout from "./components/layout/BaseLayout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  // Need React.StrictMode ?
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <BaseLayout>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/favorites" element={<AddFavorites />} />
            <Route path="/jordan" element={<JordansFavorites />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Error />} />
            {/* <Route path="/cocktail/:id" element={<SingleCocktail />} /> */}
          </Routes>
        </BaseLayout>
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// index.js v2
// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// // import { createStore } from "redux";
// // import { Provider } from "react-redux";
// import App from "./App";
// import AppProvider from "./context";

// ReactDOM.render(
//   // Need React.StrictMode ?
//   <React.StrictMode>
//     {/* <Provider store={store}> */}
//     <AppProvider>
//       <App />
//     </AppProvider>
//     {/* </Provider> */}
//   </React.StrictMode>,
//   document.getElementById("root")
// );
