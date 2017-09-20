(function (){
  var theImages = document.querySelectorAll('.image-holder'),
  theHeader = document.querySelector('.heading'),
  theSubhead = document.querySelector('.main-copy h2'),
  theSeasonText = document.querySelector('.main-copy p'),
  appliedClass;

  function changeElements() {
    // i want to load synamic conetent here
    //debugger;
    let subImages = document.querySelector('.subImagesContainer');
    let objectIndex = dynamicContent[this.id];

    //remove all the thumbnail images
    while (subImages.firstChild) {
      subImages.removeChild(subImages.firstChild);
    }

    objectIndex.images.forEach(function(element, index){
      let newSubImage = document.createElement ('img');

//add a css class
      newSubImage.classList.add('thumb');
// add an image source
      newSubImage.src = "images/" + objectIndex.images[index];
// append it to the container
      subImages.appendChild(newSubImage);
    });

    theSubhead.classList.remove(appliedClass);
    theHeader.classList.remove(appliedClass);

    theSubhead.classList.add(this.id);
    theHeader.classList.add(this.id);

    theSubhead.firstChild.nodeValue = objectIndex.headline;
    theSeasonText.firstChild.nodeValue = objectIndex.text;

    appliedClass = this.id;
  }

  theImages.forEach(function(element, index) {
    // loop though and do stuff to each element at the top of the page
    element.addEventListener('click', changeElements, false);
  });

  //initalize the app
  theSubhead.firstChild.nodeValue = dynamicContent['spring'].headline;
  theSeasonText.firstChild.nodeValue = dynamicContent['spring'].text;
  theHeader.classList.add('spring');

})();
