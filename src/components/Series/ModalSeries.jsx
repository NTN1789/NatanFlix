import React, { useState } from "react";
import Modal from "react-modal"

import "./ModalSeries.css"
// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

function modal(series, id) {
  const img_path= "https://image.tmdb.org/t/p/w500/"

 
  
console.log(series.info)
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

   <h1>     {series.info.name} </h1>
        {
         <img src={img_path + series.info.backdrop_path} />
        }
      
      <h4>
          {series.info.overview}
        </h4>
        <h4>{series.info.vote_average}</h4>
         

         <h4>{"Data de lançamento: " + series.info.first_air_date.slice(0,4)}</h4>


      
      </Modal>
    </div>
  );
}

export default modal;