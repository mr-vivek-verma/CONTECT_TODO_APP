import { useState } from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddPage from "./pages/AddPage";
import ListPage from "./pages/ListingPage";
import SinglePage from "./pages/SinglePage";
import { userData, UserDataProvider } from "./context";

function App() {
  return (
    <UserDataProvider>
      <BrowserRouter>
        <div className="App">
          <div className='class="bw0 br2 bg-dwyl-teal pa2 white fw1 tc ttu tracked"'>
            <h5>TODO LIST</h5>
            <Routes>
              <Route exact path="/" element={<AddPage />} />
              <Route exact path="/listingPage" element={<ListPage />} />
              {/* <Route exact path='/listingPage/:data' element={<ListPage/>}/> */}
              <Route
                exact
                path="/singlePage"
                element={<SinglePage data={userData} />}
              />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </UserDataProvider>
  );
}

export default App;
