const neverGonnaGiveYouUp = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
const links = document.querySelectorAll(`[href='${neverGonnaGiveYouUp}']`);
links.forEach((link) => {
  link.innerText = "🚨 " + link.innerText + " 🚨"
  link.insertAdjacentHTML('afterend', "<p style='color: red;font-weight: bolder;padding: 8px;'>RICK-ROLL ALERT</p>")
})
