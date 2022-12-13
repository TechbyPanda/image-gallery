var img_box = document.getElementById('img_box');
var left_box = document.getElementById('left-box');
let selectedImage = []

const images = [
  "./images/img-2.jpg",
  "./images/img-3.jpg",
  "./images/img-4.jpg",
  "./images/img-5.jpg",
  "./images/img-6.jpg",
  "./images/img-7.jpg",
  "./images/img-8.jpg",
  "./images/img-9.jpg",
  "./images/img-10.jpg",
  "./images/img-11.jpg",
  "./images/img-12.jpg",
  "./images/img-13.jpg",
  "./images/img-14.jpg",
  "./images/img-15.jpg"
]

function load_image(){
  let img = ``;
  for (let i = 0; i < images.length; i++) {
    img += `
    <div class="img">
      <img src=${images[i]} id='img-${i}' onclick="selectImage('${images[i]}', 'img-${i}')" >
    </div>
    `
  }
  img_box.innerHTML = img
}

function selectImage(img, id){
  if(selectedImage.length > 5)
    return alert("You cannot not select more than 6 images")
  let element = document.getElementById(id)
  console.log(element)
  if(!selectedImage.includes(img)){
    element.classList.add('selected')
    selectedImage.push(img)
  }
  else{
    element.classList.remove('selected')
    selectedImage = selectedImage.filter(function(value){
      console.log("isSelected :- ", value == img)
      return value !== img
    })
  }
  console.log(selectedImage)
}

function submitImage(){
  let images = ""
  for(let img of selectedImage){
    images += `
    <div class="img">
      <img src=${img} alt="">
    </div>
    `
  }
  left_box.innerHTML = images
}

load_image()
