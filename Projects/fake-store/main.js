fetch('https://fakestoreapi.com/products').then((res) =>{
    return res.json();
}).then((completedata) => {
    //console.log(completedata[2].title); 
   let fakestore_data="";
   completedata.map((values) => {
    fakestore_data+=` <div class="card">
        <h1 class="title"> ${values.title} </h1>
        <img src="${values.image}" alt="img" class="images">
        <p>${values.description}</p>
        <p class="category">${values.category}</p>
        <p class="price">${values.price}</p>
    </div>`
   });
   document.getElementById("cards").innerHTML=fakestore_data;
}).catch((err) => {
    console.log(err); 
})