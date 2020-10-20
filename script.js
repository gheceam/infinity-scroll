// Unsplash API
const count = 20;
const apiKey = '4c_DtMFLzXxnn02M7pQKb4j_oZSC6H5mqib6Kb0o7zM'; // enter api key here
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`


// Get photos from Unsplash API

async function getPhotos(){
    try{
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
        displayPhotos(data);
    }
    catch(error){
        // Catch error here
        console.log("Oops, request didn't go through...",error);
    }
}

function displayPhotos(data){
    
    const imageContainer = document.getElementById("image-container");
    
    // Loop through data array and 
    // extract the image url, alt title and link to unsplash page
    data.forEach(photo => {
        const image_src = photo.urls.regular;
        const image_alt = photo.alt_description;
        const unsplash_link = photo.links.html;
        imageContainer.appendChild(createImageNode(image_src, image_alt,unsplash_link));
    })
}

function createImageNode(image_src,image_alt="",unsplash_link){
    const image_node = document.createElement("img");
    const link_node = document.createElement("a");
    link_node.setAttribute("href",unsplash_link);
    link_node.setAttribute("target","_blank");
    image_node.setAttribute("src",image_src);
    image_node.setAttribute("alt",image_alt);
    image_node.setAttribute("title",image_alt);
    link_node.appendChild(image_node);
    return link_node;
}
// On Load

getPhotos();