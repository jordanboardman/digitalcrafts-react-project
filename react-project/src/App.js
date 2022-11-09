// App.js v1
import React from "react";
import Home from "./pages/Home";
import { useState, useEffect } from "react";

const App = () => {
  return (
    <div>
      <Home />
    </div>
    // <div>
    //   <div>
    //     <SearchForm />
    //   </div>
    //   <CocktialList />
    // </div>
  );
};

export default App;

// App.js v2
// import React from "react";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import AddFavorites from "./pages/AddFavorites";
// import JordansFavorites from "./pages/JordansFavorites";
// import Error from "./pages/Error";
// import SingleCocktail from "./pages/SingleCocktail";
// // import { reducer } from "./reducers/reducer";
// // import Header from "./components/layout/Header";
// import BaseLayout from "./components/layout/BaseLayout";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// // Old Routes
// // import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// const App = () => {
//   return (
//     <Router>
//       <BaseLayout>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/favorites" element={<AddFavorites />} />
//           <Route path="/jordan" element={<JordansFavorites />} />
//           <Route path="/about" element={<About />} />
//           <Route path="*" element={<Error />} />
//           <Route path="/cocktail/:id" element={<SingleCocktail />} />
//         </Routes>
//       </BaseLayout>
//     </Router>
//   );
// };

// export default App;
