window.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM entièrement chargé et analysé");
  });

const links = document.querySelectorAll("a");

links.forEach(function(link){
  // console.log(link)
  link.addEventListener("click", test)
})

function test (e) {
  // console.log(e.target.className);
  switch (e.target.className) {
    case "link1":
      console.log("section 1")
      break
    case "link2":
      console.log("section 2")
      break
    case "link3":
      console.log("section 3")
      break
    case "scrollTop":
      console.log("back to the top")
      break
  }
}
