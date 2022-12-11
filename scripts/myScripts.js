let scrollSpy = new bootstrap.ScrollSpy(document.body, { target: '#navbar-main' })

// Gallery function to launch Modal popup with Image
function showImage( event ) {
  console.log( event.target );
  const src = event.target.getAttribute("src");
  console.log( src );
  document.querySelector(".modal-img").src = src;
  document.querySelector(".modal-img").height = "400";
  document.querySelector(".modal-img").width = "400";
  const myModal = new bootstrap.Modal( document.getElementById( 'galleryModal' ) );
  myModal.show();
}

// Function to show different category images based on drop down value
function showGalleryCategoryImages() {

  if ( document.getElementById("gallerySelect").value == 1 ) {
    document.getElementById("Cardiovascular").style.display = "block";
    document.getElementById("Weights").style.display = "block";
  }
  else if ( document.getElementById("gallerySelect").value == 2 ) {
    document.getElementById("Weights").style.display = "none"
    document.getElementById("Cardiovascular").style.display = "block";
  }
  else {
    document.getElementById("Cardiovascular").style.display = "none"
    document.getElementById("Weights").style.display = "block";
  }
}
