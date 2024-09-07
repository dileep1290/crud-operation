export function appendData(data, parentDiv){
    console.log("Iam from scripts with file name of appendData()");
    data.forEach(({title, images}) => {
        let subContainer = document.createElement("div");
        let image = document.createElement("img");
        image.src = images;
        let p = document.createElement("p");
        p.innerHTML = title;
        subContainer.append(image, p);
        parentDiv.append(subContainer);
    });
}