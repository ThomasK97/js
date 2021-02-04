console.log("heyho");


const loading = document.querySelector(".loader");

setTimeout(function(){
    loading.innerHTML = "Done Loading!";
}, 3000);