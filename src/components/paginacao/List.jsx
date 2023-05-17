import React from 'react'
import  { useState } from 'react';

export const List = ({
  //  pagination,
  //  fetchNextPage,
   // fetchPreviousPage,
  }) => {
    const [currentPage, setCurrentPage] = useState(1);
  
    const previousPage = pagination?.prev ? currentPage - 1 : null;
    const nextPage = currentPage !== pagination?.pages ? currentPage + 1 : null;
  
    const previousPageDisabledButton = !previousPage;
    const nextPageDisabledButton = currentPage === pagination?.pages;
  
    const handlePreviousPage = () => {
      setCurrentPage((prevState) => prevState - 1);
      fetchPreviousPage(pagination?.prev);
    };
  
    const handleNextPage = () => {
      setCurrentPage((prevState) => prevState + 1);
      fetchNextPage(pagination?.next);
    };
  
    return (
    <>
        <button
          onClick={handlePreviousPage}
          disabled={previousPageDisabledButton}
        >
          &lt;
        </button>
        <div className="container-page">
          <p className="page">{previousPage}</p>
          <p className="current-page">{currentPage}</p>
          <p className="page">{nextPage}</p>
        </div>
  
        <button onClick={handleNextPage} disabled={nextPageDisabledButton}>
          &gt;
        </button>
    
          </>
    );
  };