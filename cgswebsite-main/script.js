const wrapper = document.querySelectorAll(".wrapper")
const Main = document.querySelector('Main')

wrapper.forEach(item => {
  item.children[0].addEventListener("mousedown", () => {
    // e.preventDefault();
    item.children[0].classList.add("active");
    item.children[0].addEventListener("mousemove", onDrag);
  });
})

function onDrag({ movementX, movementY }) {
  let activeWrapper = Main.querySelector('.active').parentElement;
  let getStyle = window.getComputedStyle(activeWrapper);
  let leftVal = parseInt(getStyle.left);
  let topVal = parseInt(getStyle.top);
  activeWrapper.style.left = `${leftVal + movementX}px`;
  activeWrapper.style.top = `${topVal + movementY}px`;
}
document.addEventListener("mouseup", () => {
  let activeWrapper = Main.querySelector('.active');
  console.log(activeWrapper)
  if (activeWrapper) {
    activeWrapper.classList.remove("active");
    activeWrapper.removeEventListener("mousemove", onDrag);
  }
});