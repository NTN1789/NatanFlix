import React, { useState , useEffect } from "react";
import axios from "axios";
import Modal from "react-modal"
import { useQuery } from "react-query";
import {ButtonFechar, ContainerModal, ImageFilmes, Informacao} from "./ModalStyles"
import { FaStar } from "react-icons/fa";

Modal.setAppElement("#root");

function modal(movie, id) {
  const img_path= "https://image.tmdb.org/t/p/original/"


  const genrs =   `https://api.themoviedb.org/3/genre/movie/list?api_key=971f03eef96c481fd72b934bef826ce4&language=pt-BR${movie.informacao.id}  `


  const {data , isLoading} = useQuery ("videos" , () => {
    return axios.get(    `https://api.themoviedb.org/3/movie/${movie.informacao.id}?api_key=971f03eef96c481fd72b934bef826ce4&language=pt-BR&append_to_response=videos`)
    .then((response) => response.data)

  });


if(isLoading){ 
  return <p>Carregando...</p>


}



console.log(data)


  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }


  

  return (
    <ContainerModal>
      <button style={{backgroundColor: "transparent", border: "none", color: "red", fontSize: "40px", cursor: "pointer"}} onClick={openModal}>
      <span>
                        <i style={{cursor:'pointer'}}   className="fa-solid fa-play"></i>
          
                        </span>
          </button>
      <Modal
        key={id}
      
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
     
   
      >
       
   <ButtonFechar onClick={closeModal}>X</ButtonFechar>


        {
         <ImageFilmes key={id} src={img_path + movie.informacao.backdrop_path} />
        }
      
      <Informacao  style={{color:"gray"}} key={id}>     { ` Titulo: ${movie.informacao.title}`} </Informacao>
      <Informacao>
          {movie.informacao.overview}
        </Informacao>
        <Informacao>{movie.informacao.vote_average}
        <FaStar style={{color: "gold"}} size={20} />
        </Informacao>
 
         

         <Informacao>{`Data de lançamento:  ${ movie.informacao.release_date.slice(0,4)}`}</Informacao>
     <Informacao>{`Idioma original: ${ movie.informacao.original_language}`}</Informacao>
     <Informacao>{`titulo original:  ${ movie.informacao.original_title} `}</Informacao>
     <Informacao>{`Genero:  ${movie.informacao.id.genres} `}</Informacao>
  
        <Informacao  key={id}>
        {data.videos.results.length > 0 && (
                                <iframe
                                     
                                    src={`https://www.youtube.com/embed/${data.videos.results[1].key}`}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    title="YouTube video player"
                                    allowFullScreen
                                ></iframe>
                            )}
         
              </Informacao>
      

      </Modal>
    </ContainerModal>
  );
}

export default modal;