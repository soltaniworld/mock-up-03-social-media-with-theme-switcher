const toggle = document.querySelector("#toggle");
const elementsLight = document.querySelectorAll("[class$='--light']"); //Will select all elements whos class ends with '--light'

//Add click event for toggle switch
toggle.addEventListener('click', ()=>{
  //go through each element with --light class
  //toggle --dark counterpart to each of those class
  elementsLight.forEach((em)=>{
    toggleDark(em, "--light", "--dark")
  });
});

toggle.click();

//toggle its counterpart [class]--dark forEach class that ends with [class]--light
// end = "--light"
// end-mod = '--dark" - the modified class to toggle
function toggleDark (em, end, endMod){
  em.classList.forEach((c)=>{
    if (c.endsWith(end)){
      em.classList.toggle(c.slice(0,-end.length)+endMod)
    }
  });
}