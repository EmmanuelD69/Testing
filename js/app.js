window.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM entièrement chargé et analysé");
  });

const links = document.querySelectorAll("a");

links.forEach(function(link){
  link.addEventListener("click", test)
})

function test () {
  console.log("test");
}
