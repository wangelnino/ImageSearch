import { createContext, useState } from "react";
import UseAxios from "./Hooks/UseAxios";
import Images from "./component/Images";
import Jumbotron from "./component/Jumbotron";
import Searchfield from "./component/Searchfield";

export const Imagecontext = createContext();

function App() {
  const [searchimage, setsearchimage] = useState("");
  const { response, isLoading, error, fetchdata } = UseAxios(
    `search/collections?page=1&query=office&client_id=PBOYhj_qmT4NMfdWuIkIaiPE5VKsbbbg1_SeWcdIK3U`
  );
  const value = {
    response,
    isLoading,
    error,
    fetchdata,
    searchimage,
    setsearchimage,
  };

  return (
    <>
      <Imagecontext.Provider value={value}>
        <Jumbotron>
          <Searchfield />
        </Jumbotron>

        <Images />
      </Imagecontext.Provider>
    </>
  );
}

export default App;
