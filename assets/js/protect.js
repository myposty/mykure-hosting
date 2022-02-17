let xhr = new XMLHttpRequest();

//open the request


xhr.open('GET','');

xhr.responseType = 'arraybuffer';

xhr.onload = (e)=>{
   let blob = new Blob([xhr.response]);
   let url = URL.createObjectURL(blob);

   let image = document.getElementById('imagenes')
   image.src = url;
}

/* xhr.send(); */