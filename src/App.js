import { BrowserRouter, Route, Routes } from "react-router-dom";
import {BookDetails , HomePage} from "../src/utils/constanst";
import ErrorPage from "./components/ErrorPage";
import SearchPage from "./components/SearchPage";

function App() {
  return (
    <div>
      <BrowserRouter basename="/Book.Store">
        <Routes>
          <Route exact path="/" element={<HomePage/>}/>
          <Route path="/book/:id" element={<BookDetails/>}/>
          <Route path="/search/:searchTerm" element={<SearchPage/>}/>
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
