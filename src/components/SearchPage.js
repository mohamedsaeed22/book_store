import { useParams } from "react-router-dom";
import { CardList, NavBar } from "../utils/constanst";

const SearchPage = () => {
  const { searchTerm } = useParams();
  return (
    <div>
      <NavBar />
      <h2 className="container mt-3 text-center">
        Search About
        <span style={{ color: "red", marginLeft: "10px" }}>{searchTerm}</span>
      </h2>
      <CardList search={searchTerm} />
    </div>
  );
};

export default SearchPage;
