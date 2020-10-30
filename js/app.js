window.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM entièrement chargé et analysé");
  });

const links = document.querySelectorAll(".link");
// console.log(links)

links.forEach(function(link){
  // console.log(link)
  link.addEventListener("click", test)
})

function test (e) {
  // console.log(e.target);
  switch (e.target.id) {
    case "link1":
      window.scrollTo(0, 0);
      break;

    case "link2":
      window.scrollTo(0, 950);
      break;

    case "link3":
      window.scrollTo(0, 2000);
      break;

    case "scrollTop":
      window.scrollTo(0, 0);
      break;

    default:
    console.log(`error`);
  }
}

