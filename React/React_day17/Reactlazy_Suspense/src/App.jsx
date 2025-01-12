import React, { lazy, Suspense, useState } from "react";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";

const Main = React.lazy(() => import("./page/Main"));
const Detail = React.lazy(() => import("./page/Detail"));
const Search = React.lazy(() => import("./page/Search"));

function App() {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  return (
    <>
      <header>
        <h1>💚 동물 조아 💚</h1>
        <input
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button onClick={() => navigate(`/search?animal=${inputValue}`)}>
          검색
        </button>
      </header>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/detail/:id" element={<Detail />}></Route>
          <Route path="/search" element={<Search />}></Route>
        </Routes>
      </Suspense>

      <footer>all rights reserved to OZ</footer>
    </>
  );
}

export default App;
