import React from 'react'
import { useState,useEffect } from 'react'
import { api } from './api';


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
    <h2  style={{color:'red',fontSize:'20px',border:'1px solid red',padding:'10px',textAlign:'center',width:'100%'}}>olá teste</h2>
    
    </>
  )
}

export default Paginacao