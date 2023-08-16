import { useContext, useState } from "react";
import { Imagecontext } from "../App";

const Searchfield = () => {
  const [searchvalue, setsearchvalue] = useState("");
  const { fetchdata, setsearchimage } = useContext(Imagecontext);
  const handleInputChange = (e) => {
    setsearchvalue(e.target.value);
  };
  const handleButtonSearch = () => {
    fetchdata(
      `search/collections?page=1&query=${searchvalue}&client_id=PBOYhj_qmT4NMfdWuIkIaiPE5VKsbbbg1_SeWcdIK3U`
    );
    setsearchvalue("");
    setsearchimage(searchvalue);
  };
  const handleEnter = (e) => {
    if (e.key === "Enter") {
      fetchdata(
        `search/collections?page=1&query=${searchvalue}&client_id=PBOYhj_qmT4NMfdWuIkIaiPE5VKsbbbg1_SeWcdIK3U`
      );
      setsearchvalue("");
      setsearchimage(searchvalue);
    }
  };
  return (
    <div className="flex">
      <input
        className="bg-gray-50 border border-gray-300 text-sm w-full indent-2 p-2.5 outline-none focus:border-blue-500 focus:ring-2 rounded-tl rounded-bl"
        type="search"
        placeholder="Type your image name..."
        value={searchvalue}
        onChange={handleInputChange}
        onKeyDown={handleEnter}
      />
      <button
        onClick={handleButtonSearch}
        disabled={!searchvalue}
        className="bg-red-600 px-6 py-2.5 text-white rounded-tr rounded-br focus: ring-2 focus:ring-blue-300 disabled:bg-gray-400"
      >
        Search
      </button>
    </div>
  );
};

export default Searchfield;
