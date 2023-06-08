import { CreatCard } from "./makeCard.js";
import { searchName } from "./searchName.js";


let parentDiv = document.querySelector(".cards");

const  RAZER_URL =  `https://razer-api.onrender.com/devices`;

export const cardMake = async () =>{
    try {
        let {data} = await axios(RAZER_URL);    
        CreatCard(data, parentDiv);  
       
        searchName();
   
    }  catch (err) {
        parentDiv.innerHTML = `<p style="text-align: center;font-size: 45px; color: red; font-weight: bold;">Упс, произошла ошибка сервера</p>`;
    };
};
