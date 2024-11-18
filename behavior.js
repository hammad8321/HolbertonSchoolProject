document.addEventListener("DOMContentLoaded", function(event) {
    alert("Hello!")
    });


    
document.addEventListener("DOMContentLoaded", function(event) {
   
    var images = document.querySelectorAll(".clickable-image");

    // Add a click event listener to each image
    images.forEach(function(image) {
        image.addEventListener("click", function(event) {
            // Get the ID of the clicked image
            var clickedImageId = event.target.id;
            alert("I saw you click " + clickedImageId + "!");
            if (event.target.classList.contains("small")) {
                event.target.classList.remove("small"); // Remove the class "small"
            } else {
                event.target.classList.add("small"); // Add the class "small"
            }
    
            // Log the ID and updated className of the clicked image to the console
            console.log("Image ID:", clickedImageId);
            console.log("Updated Class Name:", event.target.className);

           
        });
    });
});






