import React, { useState } from "react";
import Modal from "react-modal"

import "./Modal.css"
// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

function modal(movie, id) {
  const img_path= "https://image.tmdb.org/t/p/w500/"

 
  
console.log(movie.informacao)
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  

  

  return (
    <div className="Container">
      <button onClick={openModal}>Open Modal</button>
      <Modal
        key={id}
      
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        overlayClassName="modal-overlay"
        className="modal-content"
      >
       
   <button onClick={closeModal}>X</button>

   <h1>     {movie.informacao.title } </h1>
        {
         <img src={img_path + movie.informacao.backdrop_path} />
        }
      
      <h4>
          {movie.informacao.overview}
        </h4>
        <h4>{movie.informacao.vote_average}</h4>
         

         <h4>{"Data de lançamento: " + movie.informacao.release_date.slice(0,4)}</h4>
     <h4>{"Idioma original: " + movie.informacao.original_language}</h4>
     <h4>{"Idioma original: " + movie.informacao.original_title}</h4>

      
      </Modal>
    </div>
  );
}

export default modal;