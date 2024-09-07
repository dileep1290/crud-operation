import { naBar } from "./components/navbar.js";
import {appendData} from "./scripts/appendData.js"
let navContainer = document.getElementById("navbar");
let postDiv = document.getElementById("post");
navContainer.innerHTML = naBar();

const getData = async ()=>{
    try{
        const response = await fetch("http://localhost:3000/posts");
        const data = await response.json();
        console.log(data);
        appendData(data, postDiv);
    }
    catch(error){
        console.log("Error when Fetcching Data", error);
    }
    
}
getData();