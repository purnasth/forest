let title = document.getElementById("title");
let stroke = document.getElementById("title-stroke");
let leaf = document.getElementById("leaf");
let tree = document.getElementById("tree");
let hill1 = document.getElementById("hill1");
// let hill2 = document.getElementById("hill2");
// let hill3 = document.getElementById("hill3");
let hill4 = document.getElementById("hill4");
let hill5 = document.getElementById("hill5");

window.addEventListener("scroll", () => {
  let value = window.scrollY;

  //   text.style.marginTop = value * 2.5 + "px";
  //   leaf.style.top = value * -1.5 + "px";
  //   leaf.style.left = value * 1.5 + "px";
  //   hill5.style.left = value * 1.5 + "px";
  //   hill4.style.left = value * -1.5 + "px";
  //   hill1.style.top = value * 1 + "px";

  title.style.marginTop = value * 2.5 + "px";
  stroke.style.marginTop = value * 2.5 + "px";
  leaf.style.top = value * -1.5 + "px";
  leaf.style.left = value * 1.5 + "px";
    hill5.style.left = value * 1.5 + "px";
    hill4.style.left = value * -1.5 + "px";
    hill1.style.top = value * 1 + "px";
});

console.log(
  "I have a problem with the code above. I want to make the leaf move to the right and the tree move to the left. But when I add the code for the tree, the leaf stops moving to the right. I don't know why. Can someone help me?"
);


//For navbar

const list = document.querySelectorAll(".list");
      function activeLink() {
        list.forEach((item) => item.classList.remove("active"));
        this.classList.add("active");
      }
      list.forEach((item) => item.addEventListener("click", activeLink));
