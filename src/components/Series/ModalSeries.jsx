import React, { useState } from "react";
import Modal from "react-modal"
import { ButtonFechar, ContainerModal, ImageFilmes, Informacao } from "../Modal/ModalStyles"

Modal.setAppElement("#root");

function modal(series, id) {
  const img_path = "https://image.tmdb.org/t/p/original/"

  console.log(series.info)
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }


  return (
    <ContainerModal>
      <button style={{ backgroundColor: "transparent", border: "none", color: "red", fontSize: "30px", fontWeight: "bold" }} onClick={openModal}>
        <span>
          <i style={{ cursor: 'pointer' }} className="fa-solid fa-play"></i>
        </span>
      </button>
      <Modal
        key={id}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <ButtonFechar onClick={closeModal}>X</ButtonFechar>
        <ImageFilmes src={img_path + series.info.backdrop_path} />

        <Informacao style={{ color: "black", fontSize: "50px", fontWeight: "bold" }}>     {series.info.name} </Informacao>
        <Informacao>
          {series.info.overview}
        </Informacao>
        <Informacao>{series.info.vote_average}</Informacao>

        <Informacao>{"Data de lançamento: " + series.info.first_air_date.slice(0, 4)}</Informacao>

      </Modal>
    </ContainerModal>
  );
}

export default modal;