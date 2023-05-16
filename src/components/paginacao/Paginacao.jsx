import React from 'react'
import { useState,useEffect } from 'react'
import { api } from './api';
import List from './List';




 const Paginacao = () => {
  const[data,setData]=useState([]);
  const fetchData =async(url)=>{
   try {
    setData(await api(url))
    
   } catch (e) {
      console.log(e)
   } 

  };


  useEffect(()=>{
      fetchData()

   , []})

   const fetchNextPage = async(url)=>{ 
    fetchData(url)
   

   }

   const fetchPreviousPage = async(url)=>{ 
    fetchData(url)
   }

  return (
    <>
 
    <List data={data}  
    fetchNextPage={(url) => fetchNextPage(url)}
    fetchPreviousPage={(url) => fetchPreviousPage(url)}
  />
    </>
  )
}

export default Paginacao