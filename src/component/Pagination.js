// const Pagination = () => {
// const {page,nbpages}= useGlobalContext();
//   return (
//     <>
//     <div className="PaginationBtn">
//         {/* <button onClick={()=> getPrevPage()}> Prev</button> */}
//     <p>
//         {page} of {nbpages}
//     </p>
//     {/* <button onClick={()=> getNextPage()}></button> */}

//     h1

//     </div>
//     </>
//   )
// }
import React, { useState, useEffect } from "react";
import Searchfield from "./Searchfield";

const itemsPerPage = 10;

const Pagination = ({ searchvalue, fetchdata }) => {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetchdata(
          `search/collections?page=${currentPage}&query=${searchvalue}&client_id=PBOYhj_qmT4NMfdWuIkIaiPE5VKsbbbg1_SeWcdIK3U`
        );
        const data = await response.json();
        setImages(data.hits);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, [currentPage]);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <ul>
        {images.map((image) => (
          <li key={image.id}>
            <img src={image.webformatURL} alt={image.tags} />
          </li>
        ))}
      </ul>
      <div>
        <button onClick={handlePrevPage}>Previous Page</button>
        <button onClick={handleNextPage}>Next Page</button>
      </div>
    </div>
  );
};

export default Pagination;
