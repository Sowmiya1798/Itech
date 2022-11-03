import {useState} from "react";



export const useData = () => {


const initState = [
    { id: 1, Name: "kavya", Type:"teacher", Email: "kavya@gmail.com", Access:"admin" },
    { id: 2, Name: "Jaga", Type:"teacher", Email: "arun@gmail.com", Access:"admin"},
    { id: 3, Name: "Riya", Type:"student", Email: "riya@gmail.com", Access:"admin"},
    { id: 4, Name: "saba", Type:"student", Email: "saba@gmail.com", Access:"admin"},
    { id: 5, Name: "payal", Type:"student", Email: "payal@gmail.com", Access:"admin"}
  ];
  const [states, setState] = useState(initState);

  return [states]
}

