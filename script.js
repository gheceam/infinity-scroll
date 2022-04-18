// Unsplash API
const count = 20;
const apiKey = NULL; // enter api key here
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`
const loader = document.getElementById("loader");


// Get photos from Unsplash API

async function getPhotos(){
    try{
        const response = await fetch(apiUrl);
        const arrayOfPhotos = await response.json();
        displayPhotos(arrayOfPhotos);
    }
    catch(error){
        // Catch error here
        console.log("Oops, request didn't go through...",error);
    }
}

function displayPhotos(arrayOfPhotos){
    
    const imageContainer = document.getElementById("image-container");
    
    // Loop through arrayOfPhotos and 
    // extract the image url, alt title and the link to unsplash page
    arrayOfPhotos.forEach(photo => {
        const image_src = photo.urls.regular;
        const image_alt = photo.alt_description;
        const unsplash_link = photo.links.html;
        imageContainer.appendChild(createImageNode(image_src, image_alt,unsplash_link));
    })
}

function createImageNode(image_src,image_alt="",unsplash_link){
    
    // image element to hold image returned from unsplash api
    const image_node = document.createElement("img");
    // anchor element to link to unsplash page of image
    const link_node = document.createElement("a");

    // set the attributes for anchor element
    link_node.setAttribute("href",unsplash_link);
    link_node.setAttribute("target","_blank");
    // set the attribues for the images returned from Unsplash
    image_node.setAttribute("src",image_src);
    image_node.setAttribute("alt",image_alt);
    image_node.setAttribute("title",image_alt);
    // append the image node to the anchor node
    link_node.appendChild(image_node);
    // return anchor with image node embeded back to image-container
    return link_node;
}
// On Load
// Check to see if there is scrolling to the bottom of page
window.addEventListener("scroll", ()=>{
    console.log(`scroll-y: ${window.scrollY}\nwindow-in-height: ${window.innerHeight}\ndocument.body.offsetHeight: ${document.body.offsetHeight}`);
});
getPhotos();
