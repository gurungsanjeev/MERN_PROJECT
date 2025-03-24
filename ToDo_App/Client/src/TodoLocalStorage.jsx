import { useEffect } from "react";

const todoKey = "reactToDO"
export const getLocalStorageData=()=>{
    const rawTodos = localStorage.getItem(todoKey);
    try{

        if(!rawTodos) return [];
        return JSON.parse(rawTodos);
    }
    catch(err){
        console.log(err);
        return [];
    }
  }

  export const setLocalStorageData=(list)=>{
       return localStorage.setItem(todoKey, JSON.stringify(list))
      
  }