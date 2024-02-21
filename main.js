let gift_lid = document.querySelector(".gift_lid");
let content = document.querySelector(".close");
gift_lid.addEventListener("click",function(e){
    e.target.classList.add("open");
    setTimeout(function() {
   content.classList.remove("close");
    content.classList.add("content");
}, 1000); 
})
