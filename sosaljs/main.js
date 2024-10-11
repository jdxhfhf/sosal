const net = document.querySelector(".net");
const da = document.querySelector('.da')
function move() {
  const viewWidth = window.innerWidth;
  const viewHeight = window.innerHeight;
  const netWidth = net.offsetWidth;
  const netHeight = net.offsetHeight;
  const randomX = Math.max(0, Math.min(viewWidth - netWidth, Math.random() * (viewWidth - netWidth)));
  const randomY = Math.max(0, Math.min(viewHeight - netHeight, Math.random() * (viewHeight - netHeight)));
  net.style.left = `${randomX}px`;
  net.style.top = `${randomY}px`;
}
net.addEventListener("mouseover", move);
da.addEventListener("click", ()=>{
    alert("ХОРОШИЙ МАЛЬЧИК!!!")
});
