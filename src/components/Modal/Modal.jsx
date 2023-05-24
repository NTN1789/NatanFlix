import React, { useState , useEffect } from "react";
import Modal from "react-modal"
import {ButtonFechar, ContainerModal, ImageFilmes, Informacao} from "./ModalStyles"
import { FaStar } from "react-icons/fa";

Modal.setAppElement("#root");

function modal(movie, id) {
  const img_path= "https://image.tmdb.org/t/p/original/"


  const genrs =   `https://api.themoviedb.org/3/genre/movie/list?api_key=971f03eef96c481fd72b934bef826ce4&language=pt-BR${movie.informacao.id}  `


const VideosApi =  `https://api.themoviedb.org/3/movie/${movie.informacao}?api_key=971f03eef96c481fd72b934bef826ce4&language=pt-BR&append_to_response=videos`



const [videos, setVideos] = useState([])

useEffect(() => { 
  fetch(VideosApi, genrs)
  .then(response => response.json())
  .then(data => {
    setVideos(data.videos.results)
    setVideos(data.genres.results)
  })
})


console.log(videos)


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
  
        <Informacao>
          {
              (videos.length === 0) ?<p>Carregando...</p> : videos.map((Videos ) => {

                 return(
                    <>
                   <iframe key={id}
                   src={`https://www.youtube.com/embed/${Videos.movie}`}
                   
                   
                   
                   ></iframe>
                   </>
                   ) 
                
                
              })
              }
              </Informacao>
      

      </Modal>
    </ContainerModal>
  );
}

export default modal;