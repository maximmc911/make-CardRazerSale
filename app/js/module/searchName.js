import { CreatCard } from "./makeCard.js";
 export const searchName = (data, parentDiv) => {
    let search = document.querySelector(`.search_Name input`);
    console.log(search);
 search.addEventListener(`input`, () =>{
 const text = search.value;
 console.log(text);
  const searchCard = data.filter(item => 
   item.name.toLowerCase().includes(text.toLowerCase()));
   CreatCard(searchCard, parentDiv);
 });
 }; 