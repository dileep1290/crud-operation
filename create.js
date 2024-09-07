


let subBtn = document.getElementById("submitButton");
let images;
subBtn.disabled = true;

async function addPost(){
    let titleValue = document.getElementById("title");
    let title = titleValue.value;
    let set_this_data = {
        title,
        images
    };
    try{
        let response = await fetch("http://localhost:3000/posts", {
            method: "POST",
            body: JSON.stringify(set_this_data),
            headers:{
                "Content-Type": "application/json"
            }
        });
        let data = await response.json();
        console.log(data);
    }
    catch(error){
        console.log("Error When Uploading the Data into LocalStorage")
    }
}

// Image Uploading to server
let  apiKey = "8d5a6a911762eb3599d50f4db2aaa299";
const handleImage = async (event)=>{
    let file = document.getElementById('image');
    let form = new FormData();
    form.append("image", file.files[0]);

    try{
        let response = await fetch(`https://api.imgbb.com/1/upload?expiration=600&key=${apiKey}`, {
            method: "POST",
            body: form
        })
        let data = await response.json();
        images = data.data.display_url;
        subBtn.disabled = false;
    }
    catch(error){
        console.log("Error When Uploading Image to server", error);
    }
}

let deletePost = async ()=>{
    let deleteId = document.getElementById("delete").value;
    try{
        let response = await fetch(`http://localhost:3000/posts/${deleteId}`,{
            method: "DELETE",
            headers:{
                "Content-Type": "application/json"
            }
        });
    }
    catch(error){
        console.log("Error When Deleting the POST");
    }
}
let UpdatePost = async ()=>{
    let id = document.getElementById("updateId").value;
    let updateTile = document.getElementById("updateTitle").value;
    let set_data = {
        title: updateTile
    }
    try{
        let response = await fetch(`http://localhost:3000/posts/${id}`,{
            method: "PATCH",
            body: JSON.stringify(set_data),
            headers:{
                "Content-Type": "application/json"
            }

        })
    }
    catch(error){
        console.log("Error When Updating the image", error);
    }
}

const replaceBtn = async ()=>{
    let id = document.getElementById('replaceId').value;
    let NewT = document.getElementById("ReplaceTitle").value;
    let setData = {
        title: NewT
    }
    try{
        let response = await fetch(`http://localhost:3000/posts/${id}`, {
            method: "PUT",
            body: JSON.stringify(setData),
            headers:{
                "Content-Type": "application/json"
            }
        })
    }
    catch(error){
        console.log("Error Wnem Replacing the Title or Image", error)
    };
}
