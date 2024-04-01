import { useEffect, useState, useContext } from "react";
import { GiphyResponse } from "../models/GiphyResponse";
import { getTrendingGifs, searchGif } from "../services/GiphyService";
import { SearchForm } from "./SearchForm";
import { ResultsList } from "./ResultsList";
import UserContext from "../context/UserContext";
import "../css/Main.css";
export function Main() {
  const [giphyResponse, setGiphyResponse] = useState<GiphyResponse | null>(
    null
  );
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { darkTheme } = useContext(UserContext);
  //useEffect *React 19 this fades away
  //first argument is a function, second an array
  useEffect(() => {
    //you cannot directly call async in useEffect
    if (searchTerm !== "") {
      getGiphyResponse(searchTerm);
    } else {
      getTrendingGifs().then((res) => setGiphyResponse(res));
    }
  }, [searchTerm]);

  const getGiphyResponse = async (searchTerm: string) => {
    try {
      let response = await searchGif(searchTerm);
      setGiphyResponse(response);
    } catch (error: any) {
      console.log("Api request failed");
    }
  };

  return (
    <div className={`Main${darkTheme ? " dark" : ""}`}>
      <SearchForm formSubmit={setSearchTerm} />
      {giphyResponse?.data && <ResultsList images={giphyResponse.data} />}
    </div>
  );
}
