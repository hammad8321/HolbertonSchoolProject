function openLightbox(imgElement) {
    alert("I saw you ")
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightbox-image");
   
    // Set the source of the lightbox image to the clicked image's source
    lightboxImage.src = imgElement.src;
    
    // Display the lightbox
    lightbox.style.display = "flex";
}

function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none";
}





// // document.addEventListener("DOMContentLoaded", function(event) {
// // alert("Hello!")
// // });

// function smartClick() {
//    // alert("hajh");
//    var thumbnailElement = document.getElementById("smart_thumbnail");

//     // Check if the element has the "small" class
//     if (thumbnailElement.className === "small") {
//         // Remove the "small" class to make the image big
//         thumbnailElement.id = "lightbox";
//     } else {
//         // Add the "small" class to make the image small again
//         thumbnailElement.className = "small";
//     }
// }



// // thumbnailElement.addEventListener("click", function() {
// //     // Check if the image is currently "small"
// //     alert("gaga");
// //     console.log("Clicked");
// //   });